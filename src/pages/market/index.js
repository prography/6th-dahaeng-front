import React from 'react';
import Responsive from '../../components/common/Responsive';
import waitjoraeng from 'assets/joraeng/wait-joraeng.jpg';
import styled from 'styled-components';
import Header from '../../components/Header';

const ContentBox = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 480px;
  margin-top: 4rem;
`;

const WaitTitle = styled.div`
  font-size: 18px;
`;
const JoraengImg = styled.img`
  width: 100%;
`;

const Market = () => {
  return (
    <>
      <Header></Header>
      <Responsive>
        <ContentBox>
          <WaitTitle>아직 조랭이가 열일중!</WaitTitle>
          <JoraengImg src={waitjoraeng} alt="" />
        </ContentBox>
      </Responsive>
    </>
  );
};

export default Market;
