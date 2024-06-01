import React from 'react';
import * as S from './Styled';
import { calculatePercentage } from 'utils/progressUtils';


const Progressbar = ({ children, 
  now= 0,
  min= 0,
  max= 100,
  ...props
}) => {          
  
  const progressPercentage = calculatePercentage(now, min, max);
  
  return (
    <S.ProgressBarContainer className='progress_container' {...props}>
      <S.ProgressBar className='progress_bar'>
        <S.CurrentProgressBar className='current_progress_bar'
          role="progressbar"
          aria-valuenow={now}
          aria-valuemin={min}
          aria-valuemax={max}
          width={`${progressPercentage}%`}
        />
      </S.ProgressBar>
      {children && 
      <S.ProgressInfo className='progress_info'>
        {children}
      </S.ProgressInfo>
      }
    </S.ProgressBarContainer>
  );
};

export default Progressbar;
