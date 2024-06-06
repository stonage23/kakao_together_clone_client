import React from 'react'
import * as S from './Styled';

const MaskingImage = ({maskurl, imgurl}) => {
  return (
    <S.ImageMask className='mask' maskurl={maskurl}>
        <S.Image className='img' as='img' imgurl={imgurl}/>
    </S.ImageMask>
  )
}

export default MaskingImage