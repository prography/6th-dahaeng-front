import React from 'react';
import styled from 'styled-components';

import closeicon from 'assets/icon/closeicon.png';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.16); */
`;

const Wrapper = styled.div`
  position: fixed;
  top: 350px;
  left: 50%;
  width: calc(100% - 20px);
  max-width: ${(props) => (props.className ? '380px' : '768px')};
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 0px 0px 500px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 1.5rem;
`;

const TitleField = styled.div``;

const ContentField = styled.div``;

const ButtonField = styled.div``;

const CloseButton = styled.button`
  float: right;
  z-index: 5;
  border: none;
  outline: none;
  background: none;

  cursor: pointer;
  /* padding: 1rem 1rem 0 0; */
`;

const CloseIcon = styled.img`
  width: 10px;
`;

const Modal = ({ className, openModal, setModal, title, content, button }) => {
  return (
    <>
      {openModal ? (
        <>
          <ModalOverlay></ModalOverlay>
          <Wrapper className = {className}>
            <CloseButton onClick={setModal}>
              <CloseIcon src={closeicon} alt="" />
            </CloseButton>
            <TitleField>{title}</TitleField>
            <ContentField>{content}</ContentField>
            <ButtonField>{button}</ButtonField>
          </Wrapper>
        </>
      ) : null}
    </>
  );
};
export default Modal;
