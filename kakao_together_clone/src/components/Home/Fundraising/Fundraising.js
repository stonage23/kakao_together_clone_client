import Card from 'components/common/Card/Card';
import Progressbar from 'components/common/Progressbar';
import { calculateDaysLeft, calculateDiff, stringToDate } from 'utils/dateUtils';
import { calculatePercentage } from 'utils/progressUtils';
import * as S from './Styled';

/**
 * @param {Object} props - 컴포넌트의 props
 * @param {Fundraising} props.fundraising - 모금 객체
 * @param {string} props.className - 추가할 클래스명
 */
const Fundraising = ({ fundraising, className, ...rest }) => {
    
    if (!fundraising) {
        return null;
    }
    
    const endDate = stringToDate(fundraising.endDate);
    const diff = calculateDiff(endDate);
    const daysLeft = calculateDaysLeft(diff);
    const {now: nowPrice, min: minPrice, max: maxPrice, title, agency} = fundraising;
    const progressPercentage = calculatePercentage(nowPrice, minPrice, maxPrice);

    return (
        <S.FundraisingContainer className={className}>
            <Card 
                title={title} 
                subtext={agency} 
                href={`/fundraisings/${fundraising.id}/story`} 
                className={className}
                {...rest}>
                <Progressbar now={nowPrice} min={minPrice} max={maxPrice}>
                    {rest.row &&
                        <>
                            <div>
                                <span>{nowPrice}원</span>
                                <span>{maxPrice}원 목표</span>
                            </div>
                            <div>
                                <span>{progressPercentage}% 달성</span>
                                <span>{diff <= 0 ? '0' : daysLeft}일 남음</span>
                            </div>
                        </>
                    }
                    {rest.column &&
                        <div>
                            <span>{nowPrice}원</span>
                            <span>{progressPercentage}% </span>
                        </div>
                    }
                </Progressbar>
            </Card>
        </S.FundraisingContainer>
    )
}

export default Fundraising;