import React from 'react'
import styled, { css, keyframes } from 'styled-components'

// 시계 바늘 회전 애니메이션 정의
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const faceRadius = 28;
const clockHandWidth = 2;
const clockHandHeight = 10;

// 원형 모양의 바깥 블록 스타일
const ClockFace = styled.div`
  width: ${faceRadius}px;
  height: ${faceRadius}px;
  background-color: red;
  border-radius: 50%;  // 원형 모양 만들기
  position: relative;
`;

// 시계 바늘 스타일
const ClockHand = styled.div`
  width: ${clockHandWidth}px;
  height: ${clockHandHeight}px;
  background-color: white;

  ${({state}) => {
    if (state === 'go') {
      return css`
        transform-origin: 50% 100%;  // 회전 축 설정
        animation: ${rotateAnimation} 3s linear infinite;  // 애니메이션 적용
        `;
    } else if (state === 'stop') {
      return css`
        transform-origin: 50% 100%;  // 회전 축 설정
      `;
  }
  }}

  position: absolute;
  left: ${faceRadius/2 - clockHandWidth/2}px;
  top: ${faceRadius/2 - clockHandHeight}px;
`;

function Clock({state}) {
  return (
    <ClockFace>
      <ClockHand $state={state} />
    </ClockFace>
  );
}

export default Clock;
