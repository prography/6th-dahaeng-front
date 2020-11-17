import React from 'react';
import Responsive from '../../components/common/Responsive';
import waitjoraeng from 'assets/joraeng/wait-joraeng.png';
import styled from 'styled-components';
import Header from '../../components/Header';

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

const Report = () => {
  return (
    <>
      <Header></Header>
      <Responsive>
        <ContentBox>
          <WaitTitle>
            조랭이에게 바라는 점
            <JoraengImg src={waitjoraeng} alt="" />
          </WaitTitle>
          <ReportInput></ReportInput>
          <ReportButton>의견 보내기</ReportButton>
        </ContentBox>
      </Responsive>
    </>
  );
};

export default Report;
