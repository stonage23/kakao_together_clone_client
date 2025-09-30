import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  
  padding-top: 8px;
`;

export const ProgressBar = styled.div`
  display: flex;
  height: 6px;
  width: 100%;
  border-radius: 1000px;
  background-color: rgb(233, 233, 233);
`;

export const CurrentProgressBar = styled.div`
  height: 100%;
  border-radius: inherit;
  background-color: rgb(255, 64, 80);
  width: ${({ width }) => width || '50%'};
`;

export const ProgressInfo = styled.div`
  padding-top: 5px;

  line-height: 1.57;
  letter-spacing: -0.1px;
  font-size: 14px;
  &>div {
    display: flex;
    justify-content: space-between;

    &:nth-child(2) {
      span:first-child {
          color: red;
      }
      span:last-child {
          color: gray;
      }
    }
  }
`;