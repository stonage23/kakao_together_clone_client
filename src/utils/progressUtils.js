/**
 * 주어진 값으로 진행 퍼센트를 계산합니다.
 * @param {number} now - 현재 값
 * @param {number} min - 최소 값
 * @param {number} max - 최대 값
 * @returns {number} 계산된 퍼센트 값
 */
export const calculatePercentage = (now, min, max) => {
    if (max <= min) {
        throw new Error('max는 min보다 커야 합니다.');
    } else if (now < min || now > max) {
        throw new Error('현재 값이 유효한 범위내에 있지 않습니다.')
    }
    return Math.round(((now - min) / (max - min)) * 100);
};
