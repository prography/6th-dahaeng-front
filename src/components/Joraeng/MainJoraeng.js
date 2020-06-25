import React from 'react';
import styled from 'styled-components';
import character from 'assets/joraeng/defaultJoraeng.png';

const CharacterImg = styled.img`
  width: 100%;
`;

const MainJoraeng = ({ color }) => {
  return (
    <>
      안녕하세요! 제 색깔은 {color} 입니다.
      <CharacterImg src={character} alt="" />
    </>
  );
};

export default MainJoraeng
