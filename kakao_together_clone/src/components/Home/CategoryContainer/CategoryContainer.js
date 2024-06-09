import React, { useEffect, useState } from 'react';
import * as S from './Styled.js';
import Button from '../../common/Button/Button.js';
import { CiHeart } from "react-icons/ci";
import { fetchCampaignsByTag, fetchData, fetchTags } from 'api/api';
import { handleCache } from 'utils/handleCache';
import 'types/fundraising';
import { calculateDiff, calculateLeftTime, deadlineState } from 'utils/dateUtils.js';
import Fundraising from '../Fundraising/Fundraising.js';
import TimerContainer from '../Timer/TimerContainer.js';
import { joinClassName } from 'utils/classNameUtil.js';

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

/**
 * @param {Object} props - 컴포넌트의 props
 * @param {Object} props.category - 카테고리 객체
 * @param {string} props.category.title - 카테고리 제목
 * @param {string} props.category.subText - 카테고리 설명
 * @param {string} props.category.type - 카테고리 타입
 * @param {string} props.category.href - 링크 
 */

/**
 * fundraising - 모금중인 펀딩에 대한 정보 객체
 * @param {Object} props 
 * @param {Fundraising} props.fundraising
 */

const CategoryContainer = ({ category }) => {

    const contentMap = {
      'last_donations': <LastDonation category={category} />,
      'top_donations': <TopDonations category={category} />,
      'tag_donations': <TagDonations category={category} />
    };

    // NOTE null로 반환하면서 로그를 남겨야 할것 같은데
    return contentMap[category] || null;
};

/**
 * @param {Object} props 
 * @param {Fundraising} props.fundraising
 */
const LastDonation = ({ category }) => {

  const {title, subText} = categoryList[category];
  const [fundraising, setFundraising] = useState();
  const [isExpired, setIsExpired] = useState();

  useEffect(() => {

    const initializeData = async () => {
      try {

        // TODO (임시) API 작성하기
        // TODO 예외 처리
        const result = await fetchData("/campaigns/1");
        setFundraising(result);

        const isExpired = deadlineState(fundraising.endDate);
        setIsExpired(isExpired);
      } catch (e) {
        console.log(e);
      }
    };

    initializeData();
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

    const initializeData = async () => {
      try {

        // TODO (임시) API 작성하기
        // TODO 예외 처리
        const result1 = await fetchData("/campaigns/1");
        const result2 = await fetchData("/campaigns/2");
        const result3 = await fetchData("/campaigns/3");
        setFundraisingList([result1, result2, result3]);
      } catch (e) {
        console.log(e);
      }
    };

    initializeData();
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
  }, []);

  const handleTagClick = async (tagId, index) => {

    try {
      const result = await handleCache(tagId, fundraisingCache, () => fetchCampaignsByTag(tagId));
      setFundraisingCache(prevCache => ({ ...prevCache, [tagId]: result }));
      setFundraisingList(result);
    } catch (e) {
      console.e('handleTagClick failed:', e);
    }

    setActiveIndex(index);
  };

  return (
    <S.TagDonationsContainer>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <S.Tablist>
        {tags && tags.map((tag, index) => (
          <S.ButtonTab key={tag.id} onClick={() => handleTagClick(tag.id, index)} active={activeIndex === index}>
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
