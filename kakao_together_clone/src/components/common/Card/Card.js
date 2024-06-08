import { Span, Title } from "components/CommonStyles/Styled";
import * as S from './Styled';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// TODO useEffect 에러 처리 나중에 수정
const Card = ({title, children, subtext, href, thumbnail, className}) => {

    if (!title) {
        return null;
    }

    return (
        <S.CardWrapper className={`content_card ${className}`}>
            <S.CardInner thumbnail={thumbnail} as={Link} className='card_inner' to={href}>
                <div className='card_thumbnail'></div>
                <div className='card_content'>
                    <strong className='card_title'>{title}</strong>
                    <Span className='card_subtext'>{subtext}</Span>
                    {children}
                </div>
            </S.CardInner>
        </S.CardWrapper>
    );
}

export default Card;