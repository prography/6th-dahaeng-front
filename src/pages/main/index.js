import React, { useState, useEffect } from 'react';
import Room from './Room';
import Header from '../../components/header';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, setRecord, getRecords } from 'store/box';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const QuestionBox = styled.div`
  margin: auto auto;
  height: 50%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Date = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Question = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;

const ModalTitle = styled.div``;

const ModalQuestion = styled.div`
  font-size: 0.8rem;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalCharacter = styled.div`
  box-sizing: border-box;
  width: 10rem;
  height: 10rem;
  border: 1px solid;
  margin: 5% auto;
`;

const ModalInput = styled.input`
  box-sizing: border-box;
  width: 90%;
  height: 5rem;
  margin: 0 auto;
  outline: none;
`;

const ModalButton = styled.button`
  box-sizing: border-box;
  float: right;
  margin: 3rem;
  border: none;
  color: white;
  height: 2rem;
  background: #faa084;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  const question = useSelector((state) => state.box.question);

  const [inputText, setInputText] = useState('');
  const onChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getQuestion());
  // }, [dispatch]);

  const completeRecord = () => {
    dispatch(setRecord({ question: question, detail: inputText }));
    setModal();
  };

  return (
    <>
      <Header></Header>
      <Wrapper>
        <QuestionBox>
          <Date>{question.date}</Date>
          <Question onClick={setModal}>{question.text}</Question>
        </QuestionBox>
        <Modal
          openModal={openModal}
          setModal={setModal}
          title={
            <ModalTitle>
              <Date>{question.date}</Date>
              <ModalQuestion>{question.text}</ModalQuestion>
            </ModalTitle>
          }
          content={
            <ModalContent>
              <ModalCharacter></ModalCharacter>
              <ModalInput value={inputText} onChange={onChange}></ModalInput>
            </ModalContent>
          }
          button={
            <ModalButton onClick={completeRecord}>행복 기록 완료</ModalButton>
          }
        ></Modal>
      </Wrapper>
      <Room></Room>
    </>
  );
};

export default Main;
