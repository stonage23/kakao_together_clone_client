import React from 'react'
import * as S from './Styled';

const MaskingImage = ({maskUrl, imgUrl}) => {
  return (
    <S.ImageMask className='mask' maskUrl={maskUrl}>
        <S.Image className='img' as='img' imgUrl={imgUrl}/>
    </S.ImageMask>
  )
}

export default MaskingImage