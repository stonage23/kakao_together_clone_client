import Card from 'components/common/Card/Card';
import { ExternalHyperlink, Title } from 'components/CommonStyles/Styled';
import React, { useEffect, useState } from 'react'
import * as S from './Styled';
import { fetchData } from 'api/api';
import { personalityTestMock } from 'mocks/mockData';

function MindWether() {

    const [personalityTestList, setPersonalityTestList] = useState([]);

    useEffect(() => {
            const personalityTest = personalityTestMock;
            setPersonalityTestList(personalityTest);
    }, []);

    const renderMindWetherList = (list) => {
        
        const items = Array.isArray(list) ? list : [];

        return (
            <S.Ul>
            {items.map(item => {
                return(
                    <S.Li key={item.id} className='mind_item'>
                        <Card 
                            key={item.id} 
                            title={item.title} 
                            subtext={item.count + "명 참여"} 
                            href={`hello/${item.id}/story`}
                            imageUrl={item.thumbnail}>
                            
                        </Card>
                    </S.Li>
                )
            })}
            </S.Ul>
        )
    }

    return (
    <S.MindWetherContainer>
        <ExternalHyperlink>
            <Title>오늘 너의 마음 날씨는 어때?</Title>
        </ExternalHyperlink>
        {renderMindWetherList(personalityTestList)}
    </S.MindWetherContainer>
    )
}

export default MindWether