import React from 'react';
import styled from 'styled-components';
import palette from 'styles/palette';

import ground from 'assets/main/ground.png';
import postbox from 'assets/main/notification.png';
import closet from 'assets/main/itembox.png';
import character from 'assets/joraeng/defaultJoraeng.png';

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostBox = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;

const PostBoxImg = styled.img``;

const Character = styled.div`
  position: absolute;
  top: 40px;
`;

const CharacterImg = styled.img``;

const Closet = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
`;

const ClosetImg = styled.img``;

const Background = styled.div`
  position: relative;
`;

const BackgroundImg = styled.img``;

const Room = () => {
  return (
    <Wrapper>
      <PostBox>
        <PostBoxImg src={postbox} alt="" />
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
