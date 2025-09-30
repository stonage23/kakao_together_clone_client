import React from 'react'
import * as S from './Styled';


function Button({children, ...rest}) {
  return (
    <S.Button className='button' {...rest}> {children} </S.Button>
  )
}

export default Button;