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
 * @typedef {Object} FundraisingResponse
 * @property {number} id - 모금의 고유 식별자
 * @property {string} title - 모금의 제목
 * @property {string} agency - 모금을 진행하는 기관
 * @property {number} currentAmount - 현재 모금된 금액
 * @property {number} targetAmount - 목표 모금 금액
 * @property {string} endDate - 모금 종료 날짜 (YYYY-MM-DD 형식)
 * @property {string} thumbnailUrl - 모금 썸네일 이미지의 URL
 * @property {number} directDonors - 직접 기부자 수
 * @property {number} directAmount - 직접 기부된 금액
 * @property {number} indirectDonors - 간접 기부자 수
 * @property {number} indirectAmount - 간접 기부된 금액
 * @property {number} heartCount - 좋아요 수
 * @property {number} sharedCount - 공유 횟수
 */