import styled, { css } from "styled-components";

export const ImageMask = styled.div`

  height: 24px;
  width: 24px;

  -webkit-mask-image: url(${({maskurl}) => maskurl ? maskurl : ''});
  mask-image: url(${({maskurl}) => maskurl ? maskurl : ''});
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;

  background: url(${({imgurl}) => imgurl ? imgurl : ''});
  background-size: cover;
  background-repeat: no-repeat;
`;