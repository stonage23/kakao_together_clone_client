import React from 'react'

/**
 * @typedef {Object} Theme
 * @property {Colors} colors - The color palette
 * @property {MediaQueries} mediaQueries - The media query breakpoints
*/
 
/**
 * @typedef {Object} MediaQueries
 * @property {string} minWidth - The minimum width for the responsive design
 * @property {string} maxWidth - The maximum width for the responsive design
 */

/**
* @typedef {Object} Colors
* @property {string} white - The white color
* @property {string} black - The black color
* @property {string} gray1 - The gray color
*/

// TODO 기기 형식을 contextAPI으로 관리하고 특정 기기에 따라 theme 다르게 주는거 필요하다면 구현
// NOTE : 일단은 theme 을 어떻게 주든 스타일 적용법은 통일 시켜서 구현 ex. (color: ${({theme}) => theme.color})
const Theme= {
    colors: {
        white: 'rgb(255, 255, 255)',
        black: 'rgb(32, 32, 32)',
        gray1: 'rgb(102, 102, 102)',
    },
    mediaQueries: {
        minWidth: '768px',
        maxWidth: '767px'
    },  
};


/**
 * Media query breakpoints for different device types
 * @typedef {Object} MediaQueries
 * @property {string} mobileS - Small mobile devices
 * @property {string} mobileM - Medium mobile devices
 * @property {string} mobileL - Large mobile devices
 * @property {string} tablet - Tablet devices
 * @property {string} laptop - Laptop devices
 * @property {string} desktop - Desktop devices
*/ 
const mediaQueries = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktop: {
        maxWidth: '768px',
        minWidth: '767px'
    }
}

const zIndex = {
    default: 0,
    page: 10,
    sticky: 100,
    dropdown: 200,
    tooltip: 300,
    overlay: 400, // modal 뒤 깔리는 반투명한 검은색 배경, 로딩 스피너
    modal: 500,
    notification: 600,
}

export default Theme