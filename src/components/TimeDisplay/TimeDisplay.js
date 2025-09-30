import React from 'react';
import * as S from './Styled';


/**
 * 시간 형식 맞춰 반환
 * @param {number} time - 시간(ms)
 * @param {string} separator - 구분자
 * @returns {string} - time type of string transformed by format
 */
function formatTime(time, separator) {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  return `${hours.toString().padStart(2, '0')}${separator}${minutes.toString().padStart(2, '0')}${separator}${seconds.toString().padStart(2, '0')}`;
}
  
function TimeDisplay({ time, separator }) {

  return (
    <S.TimeDisplay>
      <span>{time !== null ? formatTime(time, separator) : 'Loading...'}</span>
    </S.TimeDisplay>
  );
}

export default TimeDisplay;
