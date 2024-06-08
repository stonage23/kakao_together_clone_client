import React from 'react'
import * as S from './Styled';
import MindWether from 'components/Home/MindWether/MindWether';
import DonationCard from './DonationCard';
import CategoryContainer from './CategoryContainer';
import { Card } from 'components/common/Card';



const categoryList = [
  { id: 1, category: "last_donations" },
  { id: 2, category: 'top_donations' },
  { id: 3, category: 'tagged_donations' }
];


const Home = () => {
  return (
    <S.HomeMain id='main'>
      <S.HomeWrapper>
        <S.HomeContainer>
          <S.SectionLeftLayout>
            {categoryList.map(item => (
              <CategoryContainer key={item.id} category={item.category} />
            ))}
            <Card title={'가나봐라'} subtext={'이것은 서브 텍스트'}></Card>
          </S.SectionLeftLayout>
          <S.SectionRightLayout>
            <S.RightBannerContainer>
              <DonationCard />
            </S.RightBannerContainer>
            <S.RightBannerContainer2>
              <MindWether />
            </S.RightBannerContainer2>
          </S.SectionRightLayout>
        </S.HomeContainer>
      </S.HomeWrapper>
    </S.HomeMain>
  )
}

export default Home;
