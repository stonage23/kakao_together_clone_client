import TimeDisplay from 'components/TimeDisplay/TimeDisplay';
import React, { useEffect, useState } from 'react';
import * as S from './Styled';
import Clock from 'components/animations/clock/Clock';

/**
 * @param {Object} props - 컴포넌트의 props
 * @param {number} props.time - 표시할 시간(밀리세컨드) 
 */
function TimerContainer({time: initialTime}) {

  const [currentTimeLeft, setCurrentTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTimeLeft((prev) => prev > 0 ? prev - 1000 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.TimerContainer>
      <Clock />
      <TimeDisplay time={currentTimeLeft} separator=":" />
    </S.TimerContainer>
  )
}

export default TimerContainer;
