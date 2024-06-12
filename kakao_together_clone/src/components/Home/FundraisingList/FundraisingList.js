import React from 'react';
import * as S from './Styled';
import { Card } from 'components/common/Card';
import { calculatePercentage } from 'utils/progressUtils';
import Progressbar from 'components/common/Progressbar';
import useDynamicClamp from 'utils/useDynamicClamp';

/**
 * @param {{fundraisingList: Fundraising[]}}
 */
const FundraisingList = ({ fundraisingList }) => {
  return (
    <S.FundraisingList>
      {fundraisingList &&
        fundraisingList.map(item => <Fundraising fundraising={item} />)}
    </S.FundraisingList>
  );
};

const Fundraising = ({ fundraising }) => {
  const {
    now: nowPrice,
    min: minPrice,
    max: maxPrice,
    title: cardTitle,
    text: cardSubtext,
  } = fundraising;
  const progressPercentage = calculatePercentage(nowPrice, minPrice, maxPrice);

  const { lineClamp, titleRef } = useDynamicClamp(cardTitle, cardSubtext);

  console.log(lineClamp);

  return (
    <S.FundraisingWrapper
      className={'content_card'}
      subtextLineClamp={lineClamp}
    >
      <Card
        title={cardTitle}
        subtext={cardSubtext}
        href={`/fundraisings/${fundraising.id}/story`}
        titleRef={titleRef}
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
