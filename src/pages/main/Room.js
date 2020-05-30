import React from 'react';
import styled from 'styled-components';
import palette from 'styles/palette';

const Wrapper = styled.div``;
const PostBox = styled.div``;

const Character = styled.button`
  border: none;
`;

const Closet = styled.div``;

const Room = () => {
  return (
    <Wrapper>
      <PostBox>
        <Character>
          <Closet></Closet>
        </Character>
      </PostBox>
    </Wrapper>
  );
};

export default Room;
