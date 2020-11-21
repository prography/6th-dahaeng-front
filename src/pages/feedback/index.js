import React, { useState } from 'react';
import Responsive from '../../components/common/Responsive';
import waitjoraeng from 'assets/joraeng/wait-joraeng.png';
import styled from 'styled-components';
import Header from '../../components/Header';
import { feedback } from '../../store/user';
import { useDispatch } from 'react-redux';
import Modal from '../../components/Modal';

const ContentBox = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
`;

const WaitTitle = styled.div`
  font-size: 18px;
  height: 50px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const JoraengImg = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 1rem;
`;

const ReportInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  margin-top: 2rem;
  //margin: 0 auto;
`;

const ReportButton = styled.button`
  outline: none;
  background: var(--primary-color);
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: 30px;
  width: 6rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  margin-bottom: 2rem;
  text-align: center;
`;

const ModalButton = styled.button`
  box-sizing: border-box;
  float: right;
  margin-top: 1rem;
  border: none;
  color: white;
  height: 2rem;
  background: var(--primary-color);
  border-radius: 4px;
  outline: none;
`;

const ModalText = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
  color: var(--text-second);
`;

const Feedback = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');
  const onTextChange = (e) => {
    setInputText(e.target.value);
  };

  const sendFeedback = () => {
    dispatch(feedback(inputText));
    setModal();
  };

  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Header></Header>
      <Responsive>
        <ContentBox>
          <WaitTitle>
            조랭이에게 바라는 점
            <JoraengImg src={waitjoraeng} alt="" />
          </WaitTitle>
          <ReportInput value={inputText} onChange={onTextChange}></ReportInput>
          <ReportButton onClick={sendFeedback}>의견 보내기</ReportButton>
        </ContentBox>
        <Modal
          className="popup"
          openModal={openModal}
          setModal={setModal}
          title={<ModalTitle>의견이 잘 전달되었어요!</ModalTitle>}
          content={<ModalText>앞으로도 많은 이용부탁드립니다 :)</ModalText>}
          button={<ModalButton onClick={setModal}>확인</ModalButton>}
        />
      </Responsive>
    </>
  );
};

export default Feedback;
