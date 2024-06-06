import Card from 'components/common/Card/Card';
import { ExternalHyperlink, Title } from 'components/CommonStyles/Styled';
import React, { useEffect, useState } from 'react'
import * as S from './Styled';
import axiosInstance from 'api/axiosInstance';

function MindWether() {

    const [mindWetherList, setMindWetherList] = useState([]);

    useEffect(() => {

        const fetchApi = async () => {
            try {
                const result = await axiosInstance.get("/mindWethers");
                setMindWetherList(result.data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchApi();
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
                            thumbnail={item.thumbnail}> 
                            
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
        {renderMindWetherList(mindWetherList)}
    </S.MindWetherContainer>
    )
}

export default MindWether