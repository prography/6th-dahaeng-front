import React, { useState, useEffect } from 'react';
import Room from './Room';
import Header from '../../components/Header';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, setRecord, getRecords } from 'store/box';
import Responsive from '../../components/common/Responsive';

const QuestionBox = styled.div`
  margin: auto auto;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Date = styled.div`
  font-size: 18px;
`;

const Question = styled.div`
  font-size: 24px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffede5 40%);
`;

const ModalTitle = styled.div``;

const ModalQuestion = styled.div`
  font-size: 18px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffede5 40%);
  display: inline;
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
  border: 1px solid #e9e9e9;
  margin: 5% auto;
`;

const InputLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  display: inline-block;
  overflow: hidden;
  color: #bbbbbb;
  padding: 1rem;
`;

const ModalInput = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  border: none;
  outline: none;
  resize: none;

  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 30px,
      #e9e9e9 30px,
      #e9e9e9 31px,
      white 31px
    );
  line-height: 31px;
  padding: 8px;
`;

const ModalButton = styled.button`
  box-sizing: border-box;
  float: right;
  margin-top: 1rem;
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
      <Responsive>
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
              <ModalCharacter>
                <InputLabel htmlFor="upload">
                  행복사진을 <br /> 함께 기록해요!
                </InputLabel>
                <input type="file" id="upload" style={{ display: 'none' }} />
              </ModalCharacter>
              <ModalInput value={inputText} onChange={onChange}></ModalInput>
            </ModalContent>
          }
          button={
            <ModalButton onClick={completeRecord}>행복 기록 완료</ModalButton>
          }
        ></Modal>
        <Room></Room>
      </Responsive>
    </>
  );
};

export default Main;
