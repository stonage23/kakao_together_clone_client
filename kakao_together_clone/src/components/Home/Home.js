import React from 'react'
import * as S from './Styled';
import MindWether from 'components/Home/MindWether/MindWether';
import DonationCard from './DonationCard';
import CategoryContainer from './CategoryContainer';



const sectionList = [
  {
    id: 1,
    title: "마지막 기부자를 찾습니다",
    subText: "목표 달성까지 얼마 남지 않았어요!",
    type: "last-donation",
    href: null
  },
  {
    id: 2,
    title: "가장 많이 기부중인 모금함",
    subText: "오늘, 기부 하셨나요? 당신의 마음도 함께 나눠주세요!",
    type: 'top-donations',
    href: "fundraisings/now"
  },
  {
    id: 3,
    title: "가장 많이 기부중인 모금함",
    subText: null,
    type: 'tagged',
    href: null
  }
];


const Home = () => {
  return (
    <S.HomeMain id='main'>
      <S.HomeWrapper>
        <S.HomeContainer>
          <S.SectionLeftLayout>
            {sectionList.map(category => (
              <S.SubSectionContainer key={category.id}>
                <CategoryContainer category={category} />
              </S.SubSectionContainer>
            ))}
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
