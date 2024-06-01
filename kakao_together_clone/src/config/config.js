
export const config = {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
    baseUrl: process.env.REACT_APP_BASE_URL,
};

// API 엔드포인트
export const API = {
    HOME_PAGE: `${config.apiBaseUrl}`,
};


/**
 * 환경 변수 구성 객체의 타입 정의
 * @typedef {Object} EnvConfig
 * @property {string} REACT_APP_API_BASE_URL - api기본 경로
 * @property {string} REACT_APP_BASE_URL - 프로젝트 기본 경로
 */

/**
 * 환경 변수 구성 객체
 * @type {EnvConfig}
 */
export const envConfig = {
    REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  };
  
  