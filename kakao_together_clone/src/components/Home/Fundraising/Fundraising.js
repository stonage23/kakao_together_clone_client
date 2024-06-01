import Card from 'components/common/Card/Card';
import Progressbar from 'components/common/Progressbar';
import { calculateDaysLeft, calculateDiff, stringToDate } from 'utils/dateUtils';
import { calculatePercentage } from 'utils/progressUtils';


/**
 * @typedef {Object} Fundraising
 * @property {number} id - 고유 식별자
 * @property {number} tagId - 태그 식별자
 * @property {string} title - 모금 제목
 * @property {string} agency - 주관 기관
 * @property {number} min - 최소 금액
 * @property {number} max - 목표 금액
 * @property {number} now - 현재 금액
 * @property {string} endDate - 종료일 (형식: YYYY-MM-DD)
 */

/**
 * @param {Object} props - 컴포넌트의 props
 * @param {Fundraising} props.fundraising - 모금 객체
 */
const Fundraising = ({ fundraising, ...rest }) => {
    
    if (!fundraising) {
        return null;
    }
    
    const endDate = stringToDate(fundraising.endDate);
    const diff = calculateDiff(endDate);
    const daysLeft = calculateDaysLeft(diff);
    const {now: nowPrice, min: minPrice, max: maxPrice} = fundraising;
    const progressPercentage = calculatePercentage(nowPrice, minPrice, maxPrice);

    return (
        <Card title={fundraising.title} subtext={fundraising.agency} href={`/fundraisings/${fundraising.id}/story`} {...rest}>
            <Progressbar now={nowPrice} min={minPrice} max={maxPrice}>
                {rest.row &&
                    <>
                        <div>
                            <span>{nowPrice}원</span>
                            <span>{maxPrice}원 목표</span>
                        </div>
                        <div>
                            <span>{progressPercentage}% 달성</span>
                            <span>{daysLeft}일 남음</span>
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
    )
}

export default Fundraising;