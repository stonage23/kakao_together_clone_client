import { Span } from "components/CommonStyles/Styled";
import * as S from './Styled';
import { Link } from "react-router-dom";
import { forwardRef } from "react";

// TODO useEffect 에러 처리 나중에 수정. forwardRef 왜썼었지..?
const Card = forwardRef(({title, children, subtext, href, imageUrl}, ref) => {

    if (!title) {
        return null;
    }

    return (
        <S.CardInner imageUrl={imageUrl} as={Link} className='card_inner' to={href}>
            <div className='card_thumbnail'></div>
            <div className='card_content'>
                <strong className='card_title' ref={ref}>{title}</strong>
                <Span className='card_subtext'>{subtext}</Span>
                {children}
            </div>
        </S.CardInner>
    );
});

export default Card;