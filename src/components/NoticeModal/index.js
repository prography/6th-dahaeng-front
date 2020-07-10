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
  height: 400px;
  max-width: 768px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: var(--small-border-radius);
  box-shadow: 0px 0px 0px 800px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 2rem;

  overflow: auto;
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
// const NoticeWrapper = styled.div``;

// const NoticeField = styled.div`
//   height: 54px;
//   max-width: calc(768px - 2rem);
//   padding: 0.5rem;
//   border-bottom: 1px solid #e9e9e9;
//   display: flex;
//   flex-direction: row;
//   align-items: center;

//   position: relative;
// `;

// const Notice = styled.div`
//   /* width: 100%; */
//   padding-left: 1rem;
//   padding-right: 1rem;
//   flex: 1;
// `;

// const NoticeDate = styled.div`
//   flex: none;
//   font-size: 12px;
//   color: var(--text-third);

//   padding-right: 2rem;
// `;

// const NoticeButton = styled.button`
//   position: absolute;
//   right: 5px;
//   padding-top: 6px;
// `;

// const NoticeIcon = styled.img`
//   width: 8px;

//   transform: ${(props) =>
//     props.className === 'open-content' ? 'rotate(270deg)' : 'rotate(90deg)'};
//   transition: 0.25s ease-in-out;
// `;

// const NoticeContentField = styled.div`
//   min-height: 200px;
//   max-width: calc(768px - 2rem - 70px);
// `;

// const NoticeContent = styled.div`
//   font-size: 14px;
//   margin: 1.5rem 2rem;
// `;

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

const NoticeModal = ({
  openModal,
  setModal,
  reminderInfo,
  title,
  reminder,
  notices,
}) => {
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
            <ReminderField onClick={setModal}>
              {reminder}
              <ReminderImg src={reminderJoraeng} alt="" />
            </ReminderField>
            {notices.map((notice) => {
              return (
                <>
                  <Notice key={notice.id} notice={notice}>
                    {/* <NoticeField>
                      <Notice>{notice.title}</Notice>
                      <NoticeDate>{notice.created_at}</NoticeDate>
                      <NoticeButton onClick={setNotice()}>
                        <NoticeIcon
                          className={openNotice ? 'open-content' : null}
                          src={backIcon}
                          alt=""
                        />
                      </NoticeButton>
                    </NoticeField>
                    {openNotice ? (
                      <NoticeContentField>
                        <NoticeContent>{notice.content}</NoticeContent>
                      </NoticeContentField>
                    ) : null} */}
                  </Notice>
                </>
              );
            })}
          </Wrapper>
        </>
      ) : null}
    </>
  );
};
export default NoticeModal;
