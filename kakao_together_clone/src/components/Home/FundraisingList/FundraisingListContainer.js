import React, { useEffect, useState } from 'react';
import { fundraisingMock } from 'mocks/mockData';
import FundraisingList from './FundraisingList';

const FundraisingListContainer = () => {
  const [fundraisingList, setFundraisingList] = useState();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      let fundraisingList = [];
      for (let i = 0; i < 6; i++) {
        const fundraising = fundraisingMock[0];
        fundraisingList.push(fundraising);
      }
      setFundraisingList(fundraisingList);
    } else {
    }
  }, []);

  if (!fundraisingList) return null;

  return <FundraisingList fundraisingList={fundraisingList} />;
};

export default FundraisingListContainer;
