import React, { Children } from 'react'
import Clock from 'components/animations/clock/Clock';
import TimerContainer from '../Home/Timer/TimerContainer';
import * as S from './Styled';

function ImageCover({children}) {
  return (
    <S.ImageCover>
        {children}
    </S.ImageCover>
  )
}

export default ImageCover;