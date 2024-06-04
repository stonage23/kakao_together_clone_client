import styled, { css } from "styled-components";

export const ImageMask = styled.div`

  height: 24px;
  width: 24px;

  -webkit-mask-image: url(${({maskUrl}) => maskUrl ? maskUrl : ''});
  mask-image: url(${({maskUrl}) => maskUrl ? maskUrl : ''});
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;

  background: url(${({imgUrl}) => imgUrl ? imgUrl : ''});
  background-size: cover;
  background-repeat: no-repeat;
`;