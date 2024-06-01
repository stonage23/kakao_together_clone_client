/**
 * 주어진 종료일로부터 현재 날짜까지 시간 차이를 밀리초 단위로 반환합니다.
 * @param {Date} endDate - 종료일 (형식: YYYY-MM-DD)
 * @returns {number} 시간차이(ms)
 */
export const calculateDiff = (endDate) => {
    if (!(endDate instanceof Date)) {
        throw new Error('param :endDate must be instanceof Date');
    }
    if (isNaN(endDate)) {
        throw new Error('param :endDate is NaN');
    }
    const today = new Date();
    const timeDiff = endDate.getTime() - today.getTime();
    return timeDiff;
}

/**
 * 주어진 시간이 며칠인지 내림해서 반환합니다.
 * @param {number} time - 시간 차이 (단위 ms)
 * @returns {number} 남은 일수
 */
export const calculateDaysLeft = (time) => {
    if (time < 0) {
        // throw new Error('time cannot be minus');
    }
    if (isNaN(time)) {
        throw new Error('param :time is NaN');
    }
    const daysLeft = Math.floor(time / (1000 * 3600 * 24)); // 1일 = 1000ms * 3600초 * 24시간
    return daysLeft;
}


/**
 * 문자열을 Date 객체로 변환합니다.
 * @param {string} day - 종료일 (형식: YYYY-MM-DD)
 * @returns {Date} Date 객체
 */
export const stringToDate = (day) => {
    if (!day) {
        throw new Error('parameter:day is required');
    }
    const [year, month, dayPart] = day.split('-').map(Number);
    return new Date(year, month - 1, dayPart);
}
