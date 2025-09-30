import React from 'react';
import * as S from './Styled';
import { Card } from 'components/common/Card';
import { calculatePercentage } from 'utils/progressUtils';
import Progressbar from 'components/common/Progressbar';
import useDynamicClamp from 'hooks/useDynamicClamp';

/**
 * @param {{fundraisingList: Fundraising[]}}
 */
const FundraisingList = ({ fundraisingList }) => {
  console.log("하하호호");
  console.log(fundraisingList);
  return (
    <S.FundraisingList>
      {fundraisingList &&
        fundraisingList.map(item => <Fundraising fundraising={item} />)}
    </S.FundraisingList>
  );
};

const Fundraising = ({ fundraising }) => {
  const {
    currentAmount: nowPrice,
    min: minPrice = 0,
    targetAmount: maxPrice,
    title: cardTitle,
    summary: cardSubtext,
  } = fundraising;
  const progressPercentage = calculatePercentage(nowPrice, minPrice, maxPrice);

  const { lineClamp, targetRef: titleRef } = useDynamicClamp(cardTitle, 2, 3);

  return (
    <S.FundraisingWrapper
      className={'content_card'}
      subtextLineClamp={lineClamp}
    >
      <Card
        title={cardTitle}
        subtext={cardSubtext}
        href={`/fundraisings/${fundraising.id}/story`}
        ref={titleRef}
        imageUrl={fundraising.thumbnailUrl}
      >
        <Progressbar now={nowPrice} min={minPrice} max={maxPrice}>
          <div>
            <span>{nowPrice}원</span>
            <span>{progressPercentage}%</span>
          </div>
        </Progressbar>
      </Card>
    </S.FundraisingWrapper>
  );
};

export default FundraisingList;
