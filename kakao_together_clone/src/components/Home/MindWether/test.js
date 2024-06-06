import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MindWether from './MindWether';
import axiosInstance from 'api/axiosInstance';

// Axios 모듈 모킹. API 호출 가로챔

// const mockData = {
//     data: {
//         mindWethers: [
//             {
//                 id: 1,
//                 title: "나의 나르시시즘 레벨은?",
//                 count: 244330,
//                 thumbnail: "assets/images/hello/img_a_1.png",
//                 image: []
//             },
//             {
//                 id: 2,
//                 title: "나는 어떤 꽃일까?",
//                 count: 263828,
//                 thumbnail: "assets/images/hello/img_a_2.png",
//                 image: []
//             },
//             {
//                 id: 3,
//                 title: "나랑 가장 닮은 강아지는?",
//                 count: 142321,
//                 thumbnail: "assets/images/hello/img_a_3.png",
//                 image: []
//             },
//             {
//                 id: 4,
//                 title: "세상을 보는 나의 눈",
//                 count: 196881,
//                 thumbnail: "assets/images/hello/img_a_4.png",
//                 image: []
//             }
//         ]
//     }
// };

describe('MindWether', () => {
    test('fetches and displays data', 
    
    async () => {
        try {
            const result = await axiosInstance.get("/mindWethers");
            return result;
        } catch (e) {
            console.log(e);
        }


        await waitFor(() => { // 비동기 호출이 왈료될 때까지 기다린 후 테스트 실행
            // expect(screen.getByText('나의 나르시시즘 레벨은?')).toBeInTheDocument(); // 화면에 특정 텍스트가 존재하는지 확인
            // expect(screen.getByText('나는 어떤 꽃일까?')).toBeInTheDocument();
            // expect(screen.getByText('나랑 가장 닮은 강아지는?')).toBeInTheDocument();
            // expect(screen.getByText('세상을 보는 나의 눈')).toBeInTheDocument();
            expect()
        });
    });
});
