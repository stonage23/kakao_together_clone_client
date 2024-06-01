import { Span, Title } from "components/CommonStyles/Styled";
import * as S from './Styled';
import { Link } from "react-router-dom";

const Card = ({title, children, subtext, href, ...rest}) => {

    if (!title) {
        return null;
    }

    return (
        <S.CardWrapper className="content_card">
            <S.CardInner as={Link} className='card_inner' to={href}>
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