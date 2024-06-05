import Card from 'components/common/Card/Card';
import { ExternalHyperlink, Title } from 'components/CommonStyles/Styled';
import React from 'react'
import styled from 'styled-components';

const StyledMindWether = styled.div`

    ${Title} {
        margin-bottom: 19px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
    & .mind_item .content_card {
        height: 60px;
        background-color: rgb(245, 245, 244);
        border-radius: 5px;
        
        .card_inner {
            display: flex;
            align-items: center;
        }

        .card_content{
            padding: 0px 16px;
        }

        .card_title {
            font-size: 15px;
        }

        .card_subtext {
            font-size: 13px;
        }

    }

    & .mind_item .card_thumbnail {
        width: 60px;
        border-radius: 5px 0px 0px 5px;
    }

    
`;

const ddt = {
    d1: [
        {
            id: 1,
            title: "나의 나르시시즘 레벨은?",
            count: 244330,
            thumbnail: 'assets/images/hello/img_a_1.png',
            image: []
        },
        {
            id: 2,
            title: "나는 어떤 꽃일까?",
            count: 263828,
            thumbnail: 'assets/images/hello/img_a_2.png',
            image: []
        },
        {
            id: 3,
            title: "나랑 가장 닮은 강아지는?",
            count: 142321,
            thumbnail: 'assets/images/hello/img_a_3.png',
            image: []
        },
        {
            id: 4,
            title: "세상을 보는 나의 눈",
            count: 196881,
            thumbnail: 'assets/images/hello/img_a_4.png',
            image: []
        },
    ]
};
function MindWether() {
  return (
    <StyledMindWether>
        <ExternalHyperlink>
            <Title>오늘 너의 마음 날씨는 어때?</Title>
        </ExternalHyperlink>
        <ul>
            {ddt.d1.map(card => 
                <li className='mind_item'>
                    <Card 
                        key={card.id} 
                        title={card.title} 
                        subtext={card.count + "명 참여"} 
                        href={`hello/${card.id}/story`}
                        thumbnail={card.thumbnail}> 
                        
                    </Card>
                </li>
            )}
        </ul>
    </StyledMindWether>
  )
}

export default MindWether