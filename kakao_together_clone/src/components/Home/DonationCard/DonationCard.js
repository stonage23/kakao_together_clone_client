// DonationCard.js
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { A, ExternalHyperlink, P, Strong, Title } from 'components/CommonStyles/Styled';


const tdt = {
  date: "2024.05.12",
  totalDonation: 74322200,
  reviews: 
  [
    {
      id: 1,
      title: "역사상 최악의 지진",
      subText: "2023 엄청난 지진이 발생했다다다다다다다다다다다다다다다닫다ㅏㄷ다다ㅏ다",
    },
    {
      id: 2,
      title: "클났다",
      subText: "2023 엄청난 지진이 발생했다다다다다다다다다다다다다다다닫다ㅏㄷ다다ㅏ다",
    },
    {
      id: 3,
      title: "배고프다",
      subText: "2023 엄청난 지진이 발생했다다다다다다다다다다다다다다다닫다ㅏㄷ다다ㅏ다",
    },
  ]
}

const RightBannerContainer = styled.div`
    
`;

const TopLayout = styled.div`
    
    
    background-color: rgb(255, 232, 0);
    padding: 34px 26px 29px;

    border-radius: 20px 20px 0px 0px;

    h4 {
      font-size: 20px;
      line-height: 1.5;
    }


    .donation_total {
      height: 60px;
      margin-top: 41px;
      padding: 0px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
    }

    .date {
      display: inline-block;
      font-size: 14px;
      margin-top: 12px;
    }


    `;

  const BottomLayout = styled.div`
      height: 300px;
      border-radius: 0px 0px 20px 20px;
      
      background-color: var(--white-color);
  `;
  
  const StyledA = styled(ExternalHyperlink)`
      display: block;
  `;



const StyledTitle = styled(Title)`
`;

const DonationCard = () => {
  const [date, setDate] = useState('');
  const [totalDonation, setTotalDonation] = useState('');
  const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // 가정: 서버에서 날짜와 총 기부금을 가져오는 API가 있다고 가정하고 구현함
//     const fetchData = async () => {
//       const result = await axios.get('/api/donation/info');
//       setDate(result.data.date);
//       setTotalDonation(result.data.totalDonation);
//       // 따뜻한 후기 데이터도 함께 받아옴
//       setReviews(result.data.reviews);
//     };

//     fetchData();
//   }, []);



  return (
    <>
      <TopLayout className="area_top">
        <h4>
          <a href="#">
            <StyledTitle>우리가 <br/>같이만든 변화들</StyledTitle>
          </a>
        </h4>
        <P className='date'>{tdt.date} 기준</P>
        
        
        <StyledA>
          <div className="donation_total">
            <i className="fas fa-hand-holding-heart"></i>
            <Strong> 총 기부금 </Strong>
            <em>{tdt.totalDonation}</em>원
          </div>
        </StyledA>
      </TopLayout>
      <BottomLayout className="area_bottom">

      </BottomLayout>
    </>
  );
};

export default DonationCard;
