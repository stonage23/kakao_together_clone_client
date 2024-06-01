import React, { useEffect, useState } from 'react';
import * as S from './Styled.js';
import Button from '../../common/Button/Button.js';
import { CiHeart } from "react-icons/ci";
import { fetchCampaignsByTag, fetchTags } from 'api/api';
import { handleCache } from 'utils/handleCache';
import { Link } from 'react-router-dom';
import 'types/fundraising';
import { calculateDiff, stringToDate } from 'utils/dateUtils.js';
import { ImageCover } from 'components/ImageCover/Styled.js';
import TimerContainer from '../Timer/TimerContainer.js';
import Fundraising from '../Fundraising/Fundraising.js';

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

const CategoryContainer = ({ category, fundraising, ...rest }) => {

  const [campaigns, setCampaigns] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [campaignCache, setCampaignCache] = useState({});


  useEffect(() => {

    const initializeTagData = async () => {

      try {
        const tagsResult = await fetchTags();
        setTags(tagsResult);

        if (tagsResult.length > 0) {
          handleTagClick(tagsResult[0].id, 0);
        }
      } catch (error) {
        console.error('initializeTagData failed:', error);
      }
    };

    initializeTagData();
  }, []);

  const handleTagClick = async (tagId, index) => {
    try {
      const result = await handleCache(tagId, campaignCache, () => fetchCampaignsByTag(tagId));
      setCampaignCache(prevCache => ({ ...prevCache, [tagId]: result }));
      setCampaigns(result);
    } catch (error) {
      console.error('handleTagClick failed:', error);
    }
    setActiveIndex(index);
  };

  const renderByCategoryType = () => {
    const contentMap = {
      'last-donation': <LastDonorContainer fundraising={campaigns[0]} />,
      'top-donations': <TopDonationsContainer data={campaigns} />,
      'tagged': <TaggedContainer activeIndex={activeIndex} setActiveIndex={handleTagClick} tags={tags} data={campaigns} />
    };

    return contentMap[category.type] || null;
  };

  console.log(campaigns);
  

  return (
    <>
      <CategoryTitle title={category.title} href={category.href}/>

      {category.subText && category.type !== 'tagged' && (
        <S.CategoryParagraph as='p'>
          {category.subText}
        </S.CategoryParagraph>
      )}

      {renderByCategoryType()}     
    </>
  );
};

const CategoryTitle = ({ title, href, ...rest }) => {

  return (
    <S.CategoryTitle>
      {href ? 
        <Link className='external_hyperlink' to={href}>
          <span>{title}</span>
        </Link>
        :
        title
      }
    </S.CategoryTitle>
  );
}

/**
 * @param {Object} props 
 * @param {Fundraising} props.fundraising
 */
const LastDonorContainer = ({ fundraising }) => {

  if (!fundraising) {
    return null;
  }

  console.log("gkgkgk");
  console.log(fundraising);

  const endDate = stringToDate(fundraising.endDate);
  const timeDiff = calculateDiff(endDate);

  return (
    <S.CategorySingleContentContainer>
      <ImageCover>
        <TimerContainer time={timeDiff} />
      </ImageCover>
      <Fundraising fundraising={fundraising} row />
      <ActionButtons />
    </S.CategorySingleContentContainer>
  );
};

const TopDonationsContainer = ({ data }) => (
  <S.CategoryMultipleContentContainer>
    {data && data.map(fundraising => (
      <Fundraising key={fundraising.id} fundraising={fundraising} column />
    ))}
  </S.CategoryMultipleContentContainer>
);

const TaggedContainer = ({ activeIndex, setActiveIndex, tags, data }) => (
  <>
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
);

const ActionButtons = () => (
  <S.CampaignActionContainer>
    <Button color='#c9c9c9'><CiHeart /> 하트응원</Button>
    <Button color='#c9c9c9'>기부하기</Button>
  </S.CampaignActionContainer>
);

export default CategoryContainer;
