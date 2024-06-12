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

    // NOTE 개발환경(development) mock 데이터 사용
    if (process.env.NODE_ENV === 'development') {
      setFundraising(fundraisingMock[0]);
      setIsExpired(false);
    }
    else {

      const initializeData = async () => {
        try {
          
        // TODO 예외 처리
        const result = await fetchData("/fundraisings/expiring-soon", {params: {count: 1, left: 2}});
        setFundraising(result);
    
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

  const { now: nowPrice, min: minPrice, max: maxPrice, title: cardTitle, agency: cardSubtext } = fundraising;
  const progressPercentage = calculatePercentage(nowPrice, minPrice, maxPrice);
  const cardClassName = joinClassName([classDisabled, 'content_card']);

  return (
    <S.LastDonationContainer>
      <S.ImageCover>
        <TimerContainer time={diff}/>
      </S.ImageCover>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <S.LastDonationSingleContentCardContainer>
        <S.SingleContentCardWrapper className={`content_card ${cardClassName}`}>
          <Card
            title={cardTitle}
            subtext={cardSubtext}
            href={`/fundraisings/${fundraising.id}/story`}
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

    if (process.env.NODE_ENV === 'development') {
      const [mock1, mock2, mock3] = fundraisingMock;
      setFundraisingList([mock1, mock2, mock3]);

    } else {
      const initializeData = async () => {
        try {
  
          // TODO 예외 처리
          const result = await fetchData("/fundraisings/top-rate", {params: {count: 3}});
          setFundraisingList(result);
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

  return (
    <S.TopDonationsConatainer>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <S.TopDonationsTripleContentCardContainer>
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
      </S.TopDonationsTripleContentCardContainer>
    </S.TopDonationsConatainer>
  )
};

const TagDonationsContainer = () => {

  const [fundraisingList, setFundraisingList] = useState([]);
  const [fundraisingCache, setFundraisingCache] = useState({});
  const [tags, setTags] = useState([]);

  useEffect(() => {

    if (process.env.NODE_ENV === 'development') {
      const [tag1, tag2, tag3] = tagMock;
      setTags([tag1, tag2, tag3]);

    } else {
      const initializeTagData = async () => {
        try {
          const tagsResult = await fetchTags();
          setTags(tagsResult);

          

        } catch (e) {
          console.e('initializeTagData failed:', e);
        }
      };

      initializeTagData();
    }
    }, []);

    const handleCache = async (tagId) => {
      if (process.env.NODE_ENV === 'development') {
        const [fundraising1, fundraising2, fundraising3, fundraising4] = fundraisingMock;
        const data = {
          "1" : [fundraising1, fundraising2, fundraising3],
          "2" : [fundraising2, fundraising3, fundraising4],
          "3" : [fundraising3, fundraising4, fundraising1]
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
          console.e('handleCache failed:', e);
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
    if (process.env.NODE_ENV === 'development') {
      const [fundraising1, fundraising2, fundraising3] = fundraisingMock;
      fundraisingList = [fundraising1, fundraising2, fundraising3];
    
    } else {
      if (tags.length > 0) {
        handleTagClick(tags[0].id, 0);
      }
    }
  }, [tags]);

  // TODO 테스트 코드 작성하든가 아니면 그냥 Mock 데이터 없애고 연동 시키든가
  const handleTagClick = async (tagId, index) => {
    
    if (process.env.NODE_ENV === 'development') {
      setActiveIndex(index);

    } else {
      try {
        handleCache(tagId);
      } catch (e) {
        console.e('handleTagClick failed:', e);
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
