import React from 'react';
import loadingjoraeng from 'assets/joraeng/loading-joraeng.png';
import styled, { keyframes } from 'styled-components';

const ContentBox = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 5vh 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 10px;
  }
`;

const WaitTitle = styled.div`
  font-size: 16px;
  margin: 30px;
  flex: 1;
  text-align: center;
`;

const ImgWrapper = styled.div`
  flex: none;
  flex-direction: row;
`;

const spinAnimation = keyframes`
 from {
  transform: rotate(0deg);
  margin-left: -20%;
 }
 to {
   transform: rotate(360deg);
   margin-left: 120%;
 }
`;

const JoraengImg = styled.img`
  max-width: 60px;

  animation-name: ${spinAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

export default function Loading() {
  return (
    <>
      <ContentBox>
        <WaitTitle>{`로  딩  중`}</WaitTitle>
        <ImgWrapper>
          <JoraengImg src={loadingjoraeng} alt="" />
        </ImgWrapper>
      </ContentBox>
    </>
  );
}
