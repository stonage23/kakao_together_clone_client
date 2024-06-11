import React, { useEffect, useState } from 'react';
import * as S from './Styled.js';
import Button from '../../common/Button/Button.js';
import { CiHeart } from "react-icons/ci";
import { fetchFundraisingsByTag, fetchData, fetchTags } from 'api/api';
import { handleCache } from 'utils/handleCache';
import { calculateLeftTime, deadlineState } from 'utils/dateUtils.js';
import Fundraising from '../Fundraising/Fundraising.js';
import TimerContainer from '../Timer/TimerContainer.js';
import { joinClassName } from 'utils/classNameUtil.js';
import { fundraisingMock, tagMock } from 'mocks/mockData.js';

const categoryList = {
  last_donations: {
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
      'last_donations': <LastDonation category={category} />,
      'top_donations': <TopDonations category={category} />,
      'tag_donations': <TagDonations category={category} />
    };

    // NOTE null로 반환하면서 로그를 남겨야 할것 같은데
    return contentMap[category] || null;
};


const LastDonation = ({ category }) => {

  /**
   * @type {[Fundraising]}
  */
  const [fundraising, setFundraising] = useState();
  const {title, subText} = categoryList[category];
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

  if (!fundraising) {
    return null;
  }

  const diff = calculateLeftTime(fundraising.endDate);
  const classDisabled = isExpired ? 'disabled' : '';
  const classHidden = isExpired ? 'hidden' : '';

  const fundraisingClassName = joinClassName([classDisabled, 'content_card']);

  return (
    <S.LastDonationContainer>
      <S.ImageCover>
        <TimerContainer time={diff}/>
      </S.ImageCover>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <S.LastDonationSingleContentCardContainer>
        <Fundraising 
          fundraising={fundraising} 
          isExpired={isExpired} 
          type='card' 
          className={fundraisingClassName}
          progressInfo='twoline'
        />
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

const TopDonations = ({ category }) => {

  const [fundraisingList, setFundraisingList] = useState([]);
  const {title, subText} = categoryList[category];
  
  // TODO API 임시로 된거 실제로 작성
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

  return (
    <S.TopDonationsConatainer>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <S.TopDonationsTripleContentCardContainer>
        {fundraisingList && fundraisingList.map(item => (
          <Fundraising 
            key={item.id}
            fundraising={item} 
            type='card' 
            progressInfo='oneline'
          />
        ))}
      </S.TopDonationsTripleContentCardContainer>
    </S.TopDonationsConatainer>
  )
};

const TagDonations = ({ category }) => {

  const {title, subText, href} = categoryList[category];

  const [fundraisingList, setFundraisingList] = useState([]);
  const [fundraisingCache, setFundraisingCache] = useState({});

  const [tags, setTags] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {

    if (process.env.NODE_ENV === 'development') {
      const [tag1, tag2, tag3] = tagMock;
      setTags([tag1, tag2, tag3]);
      handleTagClick(tag1.id, 0);

    } else {
      const initializeTagData = async () => {
        
        try {
          const tagsResult = await fetchTags();
          setTags(tagsResult);

          if (tagsResult.length > 0) {
            handleTagClick(tagsResult[0].id, 0);
          }

        } catch (e) {
          console.e('initializeTagData failed:', e);
        }
      };

      initializeTagData();
    }
  }, []);

  const handleTagClick = async (tagId, index) => {

    if (process.env.NODE_ENV === 'development') {
      const [fundraising1, fundraising2, fundraising3, fundraising4] = fundraisingMock;

      console.log('하하하');
      let data = null;
      if (tagId === "1") {
        data = [fundraising1, fundraising2, fundraising3];
      }
      if (tagId === "2") {
        data = [fundraising2, fundraising3, fundraising4];
      }
      if (tagId === "3") {
        data = [fundraising3, fundraising4, fundraising1];
      }
      setFundraisingCache(prevCache => ({ ...prevCache, [tagId]: data }));
      setFundraisingList(data);
      setActiveIndex(index);

    } else {
      try {
        const result = await handleCache(tagId, fundraisingCache, () => fetchFundraisingsByTag(tagId));
        setFundraisingCache(prevCache => ({ ...prevCache, [tagId]: result }));
        setFundraisingList(result);

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
        {fundraisingList && fundraisingList.map(item => (
          <Fundraising 
            key={item.id}
            fundraising={item} 
            type='card' 
            progressInfo='oneline'
          />
        ))}
      </S.TagDonationsTripleContentCardContainer>
      </S.TotalTabPanel>
    </S.TagDonationsContainer>
  )
}

export default CategoryContainer;
