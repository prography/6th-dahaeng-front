import React, { useState } from 'react';
import styled from 'styled-components';
import palette from 'styles/palette';
import ground from 'assets/main/ground.jpg';
import postbox from 'assets/main/notification.png';
import postboxOn from 'assets/main/notificationOn.png';
import closet from 'assets/main/itembox.png';
import character from 'assets/joraeng/defaultJoraeng.png';
import Moment from 'moment';
import Modal from '../../components/Modal';
import MainJoraeng from '../../components/Joraeng/MainJoraeng';

//Modal
const Date = styled.div`
  font-size: 18px;
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
  overflow: hidden;
`;

const ModalCharacterImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const ModalCharacterDefaultImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin-left: 3rem;
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

//Modal
const Wrapper = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 664px;
  position: relative;

  @media screen and (max-width: 480px) {
    height: 220px;
  }
  @media screen and (max-width: 440px) {
    height: 200px;
  }
`;

const PostBox = styled.button`
  position: absolute;
  width: 90px;
  top: 80px;
  left: 120px;
  z-index: 2;
  @media screen and (max-width: 664px) {
    top: 100px;
    left: 60px;
  }
  @media screen and (max-width: 480px) {
    width: 50px;
    top: 60px;
    left: 20px;
  }
`;

const PostBoxImg = styled.img`
  width: 100%;
`;

const Character = styled.button`
  position: absolute;
  right: 100px;
  width: 160px;
  z-index: 2;
  top: 40px;
  @media screen and (max-width: 480px) {
    right: 70px;
    top: 20px;
    width: 100px;
  }
`;

const Closet = styled.button`
  position: absolute;
  width: 60px;
  top: 140px;
  right: 70px;
  z-index: 3;
  @media screen and (max-width: 480px) {
    width: 50px;
    top: 80px;
    right: 50px;
  }
`;

const ClosetImg = styled.img`
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
  width: 100%;

  @media (min-width: 481px) and (max-width: 520px) {
    bottom: 50px;
  }
  @media screen and (max-width: 380px) {
    bottom: 10px;
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
`;

const Room = ({ reminders }) => {
  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Wrapper>
      <PostBox>
        {reminders ? (
          <PostBoxImg onClick={setModal} src={postboxOn} alt="" />
        ) : (
          <PostBoxImg src={postbox} alt="" />
        )}
      </PostBox>
      <Character>
        {/*TODO: Dynamic color binding*/}
        <MainJoraeng color="#ffe884"/>
      </Character>
      <Closet>
        <ClosetImg src={closet} alt="" />
      </Closet>
      <Background>
        <BackgroundImg src={ground} alt="" />
      </Background>
      <Modal
        openModal={openModal}
        setModal={setModal}
        title={
          <ModalTitle>
            <Date>
              {Moment(
                reminders &&
                  reminders.created_at &&
                  reminders.created_at.dateForm,
              ).format('MM-DD')}
            </Date>
            <ModalQuestion>
              {reminders && reminders.posts && reminders.posts.question}
            </ModalQuestion>
          </ModalTitle>
        }
        content={
          <ModalContent>
            <ModalCharacter>
              {reminders &&
              reminders.posts &&
              reminders.posts.image !== null ? (
                <ModalCharacterImage
                  src={reminders && reminders.posts.image}
                  alt=""
                />
              ) : (
                <ModalCharacterDefaultImage
                  src="/images/defaultJoraeng.png"
                  alt=""
                />
              )}
            </ModalCharacter>
            <ModalInput></ModalInput>
          </ModalContent>
        }
      ></Modal>
    </Wrapper>
  );
};

export default Room;
