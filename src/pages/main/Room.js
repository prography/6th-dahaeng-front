import React from 'react';
import styled from 'styled-components';
import palette from 'styles/palette';

import ground from 'assets/main/ground.png';
import postbox from 'assets/main/notification.png';
import postboxOn from 'assets/main/notificationOn.png';
import closet from 'assets/main/itembox.png';
import character from 'assets/joraeng/defaultJoraeng.png';

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

const CharacterImg = styled.img`
  width: 100%;
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
  return (
    <Wrapper>
      <PostBox>
        <PostBoxImg src={reminders ? postboxOn : postbox} alt="" />
      </PostBox>
      <Character>
        <CharacterImg src={character} alt="" />
      </Character>
      <Closet>
        <ClosetImg src={closet} alt="" />
      </Closet>
      <Background>
        <BackgroundImg src={ground} alt="" />
      </Background>
    </Wrapper>
  );
};

export default Room;
