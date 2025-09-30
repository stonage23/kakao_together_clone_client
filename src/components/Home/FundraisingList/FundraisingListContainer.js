import React, { useEffect, useState } from 'react';
import { fundraisingMock } from 'mocks/mockData';
import FundraisingList from './FundraisingList';
import axios from 'axios';
import { deadlineState } from '../../../utils/dateUtils';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const FundraisingListContainer = () => {
  const [fundraisingList, setFundraisingList] = useState();

  console.log("히히");
  console.log(fundraisingList);

  useEffect(() => {
    if (process.env.REACT_APP_ENV === 'mock') {
      const {mockOne, mockTwo, mockThree, mockFour} = fundraisingMock;
      setFundraisingList([mockOne, mockTwo, mockThree, mockFour]);
    } else {
      const initializeData = async () => {
        try {

          // TODO 예외 처리
          const response = await axios.get(API_BASE_URL + "/api/fundraisings/recommendations");

          setFundraisingList(response.data);
        } catch (e) {
          console.log(e);
        }
      };

      initializeData();
    }
  }, []);

  if (!fundraisingList) return null;

  return <FundraisingList fundraisingList={fundraisingList} />;
};

export default FundraisingListContainer;
