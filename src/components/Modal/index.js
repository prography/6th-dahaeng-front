import React from 'react';
import styled from 'styled-components';

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
  padding: 2rem;
`;

const TitleField = styled.div``;

const ContentField = styled.div``;

const ButtonField = styled.div``;

const CloseButton = styled.button`
  color: #faa084;
  float: right;
  z-index: 10;
  border: none;
  outline: none;
  cursor: pointer;
  /* padding: 1rem 1rem 0 0; */
`;

const Modal = ({ openModal, setModal, title, content, button }) => {
  return (
    <>
      {openModal ? (
        <>
          <ModalOverlay></ModalOverlay>
          <Wrapper>
            <CloseButton onClick={setModal}>X</CloseButton>
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
