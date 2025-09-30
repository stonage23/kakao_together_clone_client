import styled, { css } from 'styled-components';

export const Modal = styled.div``;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0px;
  height: 0px;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &.open {
    z-index: 999;
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
  }
`;

export const ModalBox = styled.div`
    &.open {
        z-index: 1000;
        position: relative;
    }
`;
