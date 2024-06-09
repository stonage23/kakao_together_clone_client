import Card from 'components/common/Card/Card';
import Progressbar from 'components/common/Progressbar';
import { calculateDaysLeft, calculateDiff, deadlineState, stringToDate } from 'utils/dateUtils';
import { calculatePercentage } from 'utils/progressUtils';
import * as S from './Styled';

/**
 * @param {Object} props - 컴포넌트의 props
 * @param {Fundraising} props.fundraising 펀딩 객체
 * @param {isExpired} props.isExpired 해당 fundraising 만료 여부
 * @param {string} props.type fundraising 데이터를 어떤 형식으로 렌더링 할 것인지
 * @param {string} props.className 추가할 클래스명
 * @param {string} props.progressInfo progressInfo 몇 줄
 */
const Fundraising = ({ fundraising, isExpired, type, className, progressInfo, ...rest}) => {

    if (!fundraising) {
        return null;
    }

    const { now: nowPrice, min: minPrice, max: maxPrice, title, agency } = fundraising;
    const progressPercentage = calculatePercentage(nowPrice, minPrice, maxPrice);

    const progressInfoLine = {

        'oneline': (
            <div>
                <span>{nowPrice}원</span>
                <span>{progressPercentage}% </span>
            </div>
        ),
        'twoline': (
            <>
                <div>
                    <span>{nowPrice}원</span>
                    <span>{maxPrice}원 목표</span>
                </div>
                <div>
                    <span>{progressPercentage}% 달성</span>
                    <span>{isExpired ? '0' : calculateDaysLeft(fundraising.endDate)}일 남음</span>
                </div>
            </>
        )
    }

    const renderProgressbar = () => (
        <Progressbar now={nowPrice} min={minPrice} max={maxPrice}>
            {progressInfoLine[progressInfo]}
        </Progressbar>
    )

    const contentType = {
        'card': (
            <Card
                title={title}
                subtext={agency}
                href={`/fundraisings/${fundraising.id}/story`}
                className={className}
                {...rest}
            > {renderProgressbar()}
            </Card>
        )
    }

    return (
        <S.FundraisingContainer className={className}>
            {contentType[type]}
        </S.FundraisingContainer>
    )
}

export default Fundraising;