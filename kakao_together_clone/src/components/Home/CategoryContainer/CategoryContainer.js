import React, { useEffect, useState } from 'react';
import * as S from './Styled.js';
import Button from '../../common/Button/Button.js';
import { CiHeart } from "react-icons/ci";
import { fetchCampaignsByTag, fetchData, fetchTags } from 'api/api';
import { handleCache } from 'utils/handleCache';
import 'types/fundraising';
import { calculateDiff, stringToDate } from 'utils/dateUtils.js';
import Fundraising from '../Fundraising/Fundraising.js';
import TimerContainer from '../Timer/TimerContainer.js';

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
  tagged_donations: {
    title: "가장 많이 기부중인 모금함",
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
      'tagged_donations': <TagDonations category={category} />
    };

    // NOTE null로 반환하면서 로그를 남겨야 할것 같은데
    return contentMap[category] || null;
};

// TODO 시간관리 유틸 별도로 빼기
const dateUtils = (date) => {

  const endDate = stringToDate(date);
  const diff = calculateDiff(endDate);
  const isExpired = (diff <= 0) ? true : false;

  return {isExpired, diff};
}

/**
 * @param {Object} props 
 * @param {Fundraising} props.fundraising
 */
const LastDonation = ({ category }) => {

  const {title, subText} = categoryList[category];
  const [fundraising, setFundraising] = useState();

  useEffect(() => {

    const initializeData = async () => {
      try {

        // TODO (임시) API 작성하기
        // TODO 예외 처리
        const result = await fetchData("/campaigns/1");
        setFundraising(result);
      } catch (e) {
        console.log(e);
      }
    };

    initializeData();
  }, []);

  if (!fundraising) {
    return null;
  }

  const {isExpired, diff} = dateUtils(fundraising.endDate);
  const classDisabled = isExpired ? 'disabled' : '';
  const classHidden = isExpired ? 'hidden' : '';

  // TODO 남은시간 유틸로 빼기
  return (
    <S.LastDonationContainer>
      <S.ImageCover>
        <TimerContainer time={diff}/>
      </S.ImageCover>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <Fundraising fundraising={fundraising} className={classDisabled} row />
      <ActionButtons className={classHidden}/>
    </S.LastDonationContainer>
  );
};

const ActionButtons = ({className}) => (

  <S.CampaignActionContainer className={className}>
    <Button color='#c9c9c9'><CiHeart /> 하트응원</Button>
    <Button color='#c9c9c9'>기부하기</Button>
  </S.CampaignActionContainer>
);

const TopDonations = ({ category, data }) => {

  const {title, subText} = categoryList[category];
  const [campaigns, setCampaigns] = useState([]);
  const [campaignCache, setCampaignCache] = useState({});

  return (
    <S.CategoryMultipleContentContainer>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      {data && data.map(fundraising => (
        <Fundraising key={fundraising.id} fundraising={fundraising} column />
      ))}
    </S.CategoryMultipleContentContainer>
  )
};

const TagDonations = ({ category, data }) => {

  const {title, subText, href} = categoryList[category];

  const [campaigns, setCampaigns] = useState([]);
  const [campaignCache, setCampaignCache] = useState({});

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
      const result = await handleCache(tagId, campaignCache, () => fetchCampaignsByTag(tagId));
      setCampaignCache(prevCache => ({ ...prevCache, [tagId]: result }));
      setCampaigns(result);
    } catch (e) {
      console.e('handleTagClick failed:', e);
    }

    setActiveIndex(index);
  };

  return (
    <>
      <S.CategoryTitle> <span>{title}</span> </S.CategoryTitle>
      <S.CategoryParagraph as='p'>{subText}</S.CategoryParagraph>
      <S.Tablist>
        {tags && tags.map((tag, index) => (
          <S.ButtonTab key={tag.id} onClick={() => setActiveIndex(tag.id, index)} active={activeIndex === index}>
            <span>#</span><span>{tag.tag}</span>
          </S.ButtonTab>
        ))
        }
      </S.Tablist>
      <S.TotalTabPanel>
        {data && data.map(fundraising => (
          <Fundraising key={fundraising.id} fundraising={fundraising} column />
        ))}
      </S.TotalTabPanel>
    </>
  )
}

export default CategoryContainer;
