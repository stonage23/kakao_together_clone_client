/**
 * 특정 형식의 문자열 타입의 날짜를 넣으면 남은 일수를 반환
 * @param {string} date 마감일 (형식: YYYY-MM-DD)
 * @returns {number} 남은 일수
 */
export const calculateDaysLeft = (date) => {
    
    const diff = calculateDiff(stringToDate(date));
    const days = timeToDays(diff);

    return days;
}

/**
 * @description 마감일이 유효하면 false, 마감일이 지났으면 true 반환
 * @param {string} deadline - 마감일 (형식: YYYY-MM-DD)
 * @returns {boolean} 마감일 유효 상태
 * 
 */
export const deadlineState = (deadline) => {

    const endDate = stringToDate(deadline);
    const diff = calculateDiff(endDate);
    const isExpired = (diff <= 0) ? true : false;
  
    return isExpired;
}

/**
 * 특정 형식의 문자열 타입의 날짜를 넣으면 남은 시간을 반환
 * @param {String} deadlineString - 마감일 (형식: YYYY-MM-DD)
 * @returns {number} 시간차이(ms)
 */
// TODO 예외처리
export const calculateLeftTime = (deadline) => {

    if (!(deadline instanceof String)) {
        console.log('param :endDate must be instanceof String');
    }

    const leftTime = calculateDiff(stringToDate(deadline));

    return leftTime;
}

/**
 * 오늘 날짜 기준 건네 받은 날짜와의 시간 차이(ms)을 반환
 * @param {Date} date 
 * @returns {number} 시간 차이
 */
const calculateDiff = (date) => {

    const today = new Date();
    const diff = date.getTime() - today.getTime();

    return diff;
}

/**
 * 주어진 시간이 며칠인지 내림해서 반환
 * @param {number} time - 시간 (단위 ms)
 * @returns {number} 일수(days)
 */
// TODO 예외처리
const timeToDays = (time) => {

    if (time < 0) {
        // throw new Error('time cannot be minus');
    }

    if (isNaN(time)) {
        console.log('param :time is NaN');
    }

    const days = Math.floor(time / (1000 * 3600 * 24)); // 1일 = 1000ms * 3600초 * 24시간

    return days;
}


/**
 * 문자열을 Date 객체로 변환
 * @param {string} date - 마감일 (형식: YYYY-MM-DD)
 * @returns {Date} Date 객체
 */
// TODO 예외처리
const stringToDate = (date) => {

    if (!date) {
        console.log('parameter:day is required');
        // TODO 예외시 뭘 넘겨줄지
        return new Date();
    }

    const [year, month, dayPart] = date.split('-').map(Number);

    return new Date(year, month - 1, dayPart);
}