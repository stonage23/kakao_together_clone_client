// DonationCard.js
import React, { useState, useEffect } from 'react';
import { P, Strong, } from 'components/CommonStyles/Styled';
import SliderComponent from 'components/common/Slider/SliderComponent';
import { Link } from 'react-router-dom';
import { formatTodayToKorean } from 'utils/dateUtils';
import * as S from './Styled';
import { fetchData } from 'api/api';
import { newsMock } from 'mocks/mockData';

const DonationCard = () => {

  const [totalDonations, setTotalDonations] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {

    if (process.env.NODE_ENV === 'development') {
      const news = newsMock;
      setNews(news);
      setTotalDonations(74322200);

    } else {
      const initializeData = async () => {
        const news = await fetchData('/news/top-rate-like', {count: 3});
        const totalDonations = await fetchData('/fundraisings/total-donations');
        setNews(news);
        setTotalDonations(totalDonations);
      };

      initializeData();
    }
  }, []);

  return (
    <>
      <S.TopLayout className="area_top">
        <h4>
          <Link to="/hardcoding">
            <S.StyledTitle>우리가 <br/>같이만든 변화들</S.StyledTitle>
          </Link>
        </h4>
        <P className='date'>{formatTodayToKorean('.')} 기준</P>
        <S.StyledA>
          <div className="donation_total">
            <i className="fas fa-hand-holding-heart"></i>
            <Strong> 총 기부금 </Strong>
            <em>{totalDonations}</em>원
          </div>
        </S.StyledA>
      </S.TopLayout>
      <S.BottomLayout className="area_bottom">
        <div>
          <Link to='/hardcoding'>
            <h4>따뜻한 후기</h4>
          </Link>
        </div>
        <SliderComponent data={news}/>
      </S.BottomLayout>
    </>
  );
};

export default DonationCard;
