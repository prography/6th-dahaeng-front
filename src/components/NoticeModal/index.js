import React, { useState } from 'react';
import styled from 'styled-components';
import closeicon from 'assets/icon/closeicon.png';
import backIcon from 'assets/icon/backicon.png';
import reminderJoraeng from 'assets/joraeng/login-joraeng.png';
import Notice from './Notice';

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
  /* height: 400px; */
  max-width: 768px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: var(--small-border-radius);
  box-shadow: 0px 0px 0px 800px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 2rem;

  overflow: ${(props) => (props.className === 'reminder' ? 'none' : 'auto')};

  height: ${(props) => (props.className === 'reminder' ? 'none' : '400px')};
`;

const ModalTitleWrapper = styled.div`
  padding: 0 1rem 1rem 1rem;
  text-align: center;
`;

const TitleField = styled.div`
  font-size: 18px;
`;

const ReminderField = styled.div`
  background: var(--light-background);
  height: 54px;
  max-width: calc(768px - 2rem);
  padding: 0.5rem;
  display: flex;
  align-items: center;

  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const ReminderImg = styled.img`
  position: absolute;

  max-width: 140px;
  bottom: -11px;
  right: 0;

  @media screen and (max-width: 380px) {
    width: 100px;
    bottom: -7px;
  }
`;

const GoBackButton = styled.button`
  float: left;
  z-index: 5;
  border: none;
  outline: none;
  background: none;

  cursor: pointer;
`;

const GoBackIcon = styled.img`
  width: 7px;
  transform: rotate(180deg);
`;

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

const ModalButton = styled.button`
  box-sizing: border-box;
  float: right;
  margin-top: 1rem;
  border: none;
  color: white;
  height: 2rem;
  padding: 4px 12px;
  background: var(--primary-color);
  border-radius: 4px;
  outline: none;
`;

const ModalQuestionBox = styled.div`
  margin: 0.5rem;
`;

const ModalQuestion = styled.div`
  font-size: 18px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 60%,
    var(--secondary-color) 40%
  );
  display: inline;
`;

const ModalCharacter = styled.div`
  box-sizing: border-box;
  width: 10rem;
  height: 10rem;
  border: 1px solid #e9e9e9;
  margin: 5% auto;
  overflow: hidden;
`;

const ModalCharacterImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Detail = styled.textarea`
  box-sizing: border-box;
  width: calc(100% - 0.5rem);
  margin: 0 auto;
  outline: none;
  border: none;
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
  line-height: 23px;
  padding: 8px;
`;

const NoticeModal = ({
  history,
  openModal,
  setModal,
  reminderInfo,
  title,
  reminder,
  notices,
}) => {
  const [openReminder, setOpenReminder] = useState(false);
  const setReminder = () => {
    if (openModal) {
      setModal();
      setOpenReminder(!openReminder);
    } else {
      setOpenReminder(!openReminder);
    }
  };

  const setNoticeModal = () => {
    setOpenReminder(!openReminder);
    setModal();
  };

  function navigateBoxPage() {
    history.push('/box');
  }

  return (
    <>
      {openModal ? (
        <>
          <ModalOverlay></ModalOverlay>
          <Wrapper>
            <CloseButton onClick={setModal}>
              <CloseIcon src={closeicon} alt="" />
            </CloseButton>
            <ModalTitleWrapper>
              <TitleField>{title}</TitleField>
            </ModalTitleWrapper>
            <ReminderField onClick={setReminder}>
              {reminder}
              <ReminderImg src={reminderJoraeng} alt="" />
            </ReminderField>
            {notices.map((notice) => {
              return (
                <>
                  <Notice key={notice.id} notice={notice}></Notice>
                </>
              );
            })}
          </Wrapper>
        </>
      ) : null}

      {openReminder ? (
        <>
          <ModalOverlay></ModalOverlay>
          <Wrapper className="reminder">
            <GoBackButton onClick={setNoticeModal}>
              <GoBackIcon src={backIcon} alt="" />
            </GoBackButton>
            <CloseButton onClick={setModal}>
              <CloseIcon src={closeicon} alt="" />
            </CloseButton>
            <ModalTitleWrapper>
              <TitleField>{`${reminderInfo[0].created_at}에는 이만큼 행복했어요!`}</TitleField>
            </ModalTitleWrapper>
            <ModalQuestionBox>
              <ModalQuestion> {reminderInfo[0].posts.question}</ModalQuestion>
            </ModalQuestionBox>
            <ModalCharacter>
              <ModalCharacterImage src={reminderInfo[0].posts.image} alt="" />
            </ModalCharacter>
            <Detail disabled value={reminderInfo[0].posts.detail} />
            <ModalButton onClick={navigateBoxPage}>
              행복 더 보러가기
            </ModalButton>
          </Wrapper>
        </>
      ) : null}
    </>
  );
};
export default NoticeModal;
