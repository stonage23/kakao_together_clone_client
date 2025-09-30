import React, { useEffect, useState } from 'react';
import * as S from './Styled.js';
import Button from '../../common/Button/Button.js';
import { CiHeart } from "react-icons/ci";
import { fetchFundraisingsByTag, fetchData, fetchTags } from 'api/api';
import { calculateDaysLeft, calculateLeftTime, deadlineState } from 'utils/dateUtils.js';
import TimerContainer from '../Timer/TimerContainer.js';
import { joinClassName } from 'utils/classNameUtil.js';
import { fundraisingMock, tagMock } from 'mocks/mockData.js';
import Progressbar from 'components/common/Progressbar/Progressbar.js';
import Card from 'components/common/Card/Card.js';
import { calculatePercentage } from 'utils/progressUtils.js';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const categoryList = {
  last_donation: {
    title: "마지막 기부자를 찾습니다",
    subText: "목표 달성까지 얼마 남지 않았어요!",
    href: null
  },
  top_donations: {
    title: "가장 많이 기부중인 모금함",
    subText: "오늘, 기부 하셨나요? 당신의 마음도 함께 나눠주세요!",
    href: "fundraisings/now"
  },
  tag_donations: {
    title: "태그로 보는 모금함",
    subText: null,
    href: null
  }
};

const CategoryContainer = ({ category }) => {

    const contentMap = {
      'last_donation': <LastDonationContainer />,
      'top_donations': <TopDonationsConatainer />,
      'tag_donations': <TagDonationsContainer />
    };

    // NOTE null로 반환하면서 로그를 남겨야 할것 같은데
    return contentMap[category] || null;
};

const LastDonationContainer = () => {
  /**
   * @type {[Fundraising]}
  */
  const [fundraising, setFundraising] = useState();
  const [isExpired, setIsExpired] = useState();

  useEffect(() => {
  console.log("왜이래");
    // NOTE 개발환경(development) mock 데이터 사용
    if (process.env.REACT_APP_ENV === 'mock') {
      setFundraising(fundraisingMock.mockOne);
      console.log(fundraisingMock[0]);
      setIsExpired(false);
    }
    else {

      const initializeData = async () => {
        try {
          
        // TODO 예외 처리
        const response = await axios.get(API_BASE_URL + "/api/fundraisings/expiring-soon");

        const fundraising = response.data[0];

        if (response.status != 200) throw new Error('네트워크 오류로 서버 통신 실패');
        if (Array.isArray() && response.data.length === 0) return null;

        setFundraising(fundraising);

        const isExpired = deadlineState(fundraising.endDate);
        setIsExpired(isExpired);
        } catch (e) {
          console.log(e);
        }
      };

      initializeData();
    }
  }, []);

  return <LastDonation fundraising={fundraising} isExpired={isExpired} />
}

const LastDonation = ({ fundraising, isExpired }) => {
  // TODO 모금이 없을 때 보여줄 UI 및 처리
  if (!fundraising) return null;

  const {title, subText} = categoryList['last_donation'];
  const diff = calculateLeftTime(fundraising.endDate);
  const classDisabled = isExpired ? 'disabled' : '';
  const classHidden = isExpired ? 'hidden' : '';

  const { currentAmount: nowPrice, min: minPrice = 0, targetAmount: maxPrice, title: cardTitle, agency } = fundraising;
  const progressPercentage = calculatePercentage(nowPrice, minPrice, maxPrice);
  const cardClassName = joinClassName([classDisabled, 'content_card']);

  return (
    <S.LastDonationContainer>
      <S.ImageCover>
        <TimerContainer time={diff}/>
      </S.ImageCover>
      <S.CategoryTitle> <span>{cardTitle}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <S.LastDonationSingleContentCardContainer>
        <S.SingleContentCardWrapper className={`content_card ${cardClassName}`}>
          <Card
            title={cardTitle}
            subtext={agency.name}
            href={`/fundraisings/${fundraising.id}/story`}
            imageUrl={fundraising.thumbnailUrl}
          > 
            <Progressbar now={nowPrice} min={minPrice} max={maxPrice}>
                <div>
                    <span>{nowPrice}원</span>
                    <span>{maxPrice}원 목표</span>
                </div>
                <div>
                    <span>{progressPercentage}% 달성</span>
                    <span>{isExpired ? '0' : calculateDaysLeft(fundraising.endDate)}일 남음</span>
                </div>
            </Progressbar>
          </Card>
        </S.SingleContentCardWrapper>
      </S.LastDonationSingleContentCardContainer>
      <ActionButtons className={classHidden}/>
    </S.LastDonationContainer>
  );
};

const ActionButtons = ({className}) => (

  <S.ActionContainer className={className}>
    <Button color='#c9c9c9'><CiHeart /> 하트응원</Button>
    <Button color='#c9c9c9'>기부하기</Button>
  </S.ActionContainer>
);

const TopDonationsConatainer = () => {

  const [fundraisingList, setFundraisingList] = useState([]);
  
  useEffect(() => {

    if (process.env.REACT_APP_ENV === 'mock') {
      const {mockOne, mockTwo, mockThree} = fundraisingMock;
      setFundraisingList([mockOne, mockTwo, mockThree]);

    } else {
      const initializeData = async () => {
        try {
  
          // TODO 예외 처리
          const response = await axios.get(API_BASE_URL + "/api/fundraisings/hot", {params: {limit: 3}});
          setFundraisingList(response.data);
        } catch (e) {
          console.log(e);
        }
      };
  
      initializeData();
    }
  }, []);

  return <TopDonations fundraisingList={fundraisingList}/>
}

const TopDonations = ({fundraisingList}) => {

  if (!fundraisingList) return null;

  const {title, subText} = categoryList['top_donations'];

  console.log(fundraisingList);

  return (
    <S.TopDonationsConatainer>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <S.TopDonationsTripleContentCardContainer>
        {fundraisingList && fundraisingList.map(fundraising => {
          const { currentAmount: nowPrice, min: minPrice = 0, targetAmount: maxPrice, title: cardTitle, agency } = fundraising;
          const progressPercentage = calculatePercentage(nowPrice, minPrice, maxPrice);
          return (
            <S.SingleContentCardWrapper className={'content_card'}>
              <Card
                title={cardTitle}
                subtext={agency.name}
                href={`/fundraisings/${fundraising.id}/story`}
                imageUrl={fundraising.thumbnailUrl}
              > 
                <Progressbar now={nowPrice} min={minPrice} max={maxPrice}>
                    <div>
                        <span>{nowPrice}원</span>
                        <span>{progressPercentage}%</span>
                    </div>
                </Progressbar>
              </Card>
            </S.SingleContentCardWrapper>
          )
        })}
      </S.TopDonationsTripleContentCardContainer>
    </S.TopDonationsConatainer>
  )
};

const TagDonationsContainer = () => {

  const [fundraisingList, setFundraisingList] = useState([]);
  const [fundraisingCache, setFundraisingCache] = useState({});
  const [tags, setTags] = useState([]);

  useEffect(() => {

    // if (process.env.REACT_APP_ENV === 'mock') {
      const [tag1, tag2, tag3] = tagMock;
      setTags([tag1, tag2, tag3]);

    // } else {
    //   const initializeTagData = async () => {
    //     try {
    //       const tagsResult = await fetchTags();
    //       setTags(tagsResult);
    //
    //     } catch (e) {
    //       console.error('initializeTagData failed:', e);
    //     }
    //   };
    //
    //   initializeTagData();
    // }
    }, []);

    const handleCache = async (tagId) => {
      if (process.env.REACT_APP_ENV === 'mock') {
        const { mockOne, mockTwo, mockThree, mockFour } = fundraisingMock;
        const data = {
          "1" : [mockOne, mockTwo, mockThree],
          "2" : [mockTwo, mockThree, mockFour],
          "3" : [mockThree, mockFour, mockOne]
        }
        const fundraisingList = data[tagId];
        setFundraisingCache(prevCache => ({ ...prevCache, [tagId]: fundraisingList }));
        setFundraisingList(fundraisingList);
  
      } else {
        try {
          const result = await handleCache(tagId, fundraisingCache, () => fetchFundraisingsByTag(tagId));
          setFundraisingCache(prevCache => ({ ...prevCache, [tagId]: result }));
          setFundraisingList(result);
  
        } catch (e) {
          console.error('handleCache failed:', e);
        }
      }
    }

  return <TagDonations tags={tags} fundraisingList={fundraisingList} handleCache={handleCache} />
}

const TagDonations = ({ tags, fundraisingList, handleCache }) => {

  const {title, subText, href} = categoryList['tag_donations'];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    // NOTE TagDonations UI 개발 Mock데이터 
    if (process.env.REACT_APP_ENV === 'mock') {
      const { mockOne, mockTwo, mockThree} = fundraisingMock;
      fundraisingList = [mockOne, mockTwo, mockThree];
    
    } else {
      if (tags.length > 0) {
        handleTagClick(tags[0].id, 0);
      }
    }
  }, [tags]);

  // TODO 테스트 코드 작성하든가 아니면 그냥 Mock 데이터 없애고 연동 시키든가
  const handleTagClick = async (tagId, index) => {
    
    if (process.env.REACT_APP_ENV === 'mock') {
      setActiveIndex(index);

    } else {
      try {
        handleCache(tagId);
      } catch (e) {
        console.error('handleTagClick failed:', e);
      }

      setActiveIndex(index);
    }
  };

  return (
    <S.TagDonationsContainer>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <S.Tablist>
        {tags && tags.map((tag, index) => (
          <S.ButtonTab key={tag.id} onClick={() => handleTagClick(tag.id, index)} $active={activeIndex === index}>
            <span>#</span><span>{tag.tag}</span>
          </S.ButtonTab>
        ))
        }
      </S.Tablist>
      <S.TotalTabPanel>
      <S.TagDonationsTripleContentCardContainer>
        {fundraisingList && fundraisingList.map(fundraising => {
          const { now: nowPrice, min: minPrice, max: maxPrice, title: cardTitle, agency: cardSubtext } = fundraising;
          const progressPercentage = calculatePercentage(nowPrice, minPrice, maxPrice);
          return (
            <S.SingleContentCardWrapper className={'content_card'}>
              <Card
                title={cardTitle}
                subtext={cardSubtext}
                href={`/fundraisings/${fundraising.id}/story`}
              > 
                <Progressbar now={nowPrice} min={minPrice} max={maxPrice}>
                    <div>
                        <span>{nowPrice}원</span>
                        <span>{progressPercentage}%</span>
                    </div>
                </Progressbar>
              </Card>
            </S.SingleContentCardWrapper>
          )
        })}
      </S.TagDonationsTripleContentCardContainer>
      </S.TotalTabPanel>
    </S.TagDonationsContainer>
  )
}

export default CategoryContainer;
