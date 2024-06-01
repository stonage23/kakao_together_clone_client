import React from 'react'
import * as S from './Styled';


function Button({children, ...rest}) {
  return (
    <S.Button {...rest}> {children} </S.Button>
  )
}

export default Button;