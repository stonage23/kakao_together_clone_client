import React from 'react';
import * as S from './Styled';

const Modal = ({ isModalOpen, children }) => {
  return (
    <S.Modal className='modal'>
      <S.ModalOverlay 
        className={`${isModalOpen ? 'open' : 'close'} modal_overlay`}
      >
        <S.ModalBox
          className={`${isModalOpen ? 'open' : 'close'} modal_container`}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </S.ModalBox>
      </S.ModalOverlay>
    </S.Modal>
  );
};

export default Modal;
