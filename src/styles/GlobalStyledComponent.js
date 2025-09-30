import styled, { css } from 'styled-components';

export const defaultFontCss = css`
  font-size: ${({ size }) => (size ? size : '14')}px;
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  font-style: normal;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  line-height: 1.43;
  letter-spacing: -0.1px;
`;

export const defaultTitleCss = css`
  font-size: ${({ size }) => (size ? size : '18')}px;
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  font-style: normal;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  line-height: 1.6;
  letter-spacing: -0.1px;
  font-weight: 600;
`;

export const listItemFontDefaultStyles = css`
  display: list-item;
  position: relative;
  font-size: 13px;
  line-height: 1.54;
  letter-spacing: -0.1px;
`;

export const Em = styled.em`
  ${defaultFontCss};
  font-weight: 600;
`;

export const Span = styled.span`
  ${defaultFontCss};
`;

export const Strong = styled.strong`
  ${defaultFontCss};
  font-weight: ${({ bold }) => (bold ? bold : '600')};
`;

/**
 * Overlay위에 띄울 요소는 z-index > 999
 */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0px;
  height: 0px;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  display: flex;

  &.open {
    z-index: 999;
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
  }
`;
