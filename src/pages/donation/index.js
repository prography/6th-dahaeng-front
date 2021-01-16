import React from 'react';
import Responsive from '../../components/common/Responsive';
import waitjoraeng from 'assets/joraeng/wait-joraeng.png';
import styled from 'styled-components';
import Slider from '../../components/Slider';

const ContentBox = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 480px;
  margin-top: 2rem;
  padding: 0 2rem;
`;

const TitleText = styled.div`
  font-size: 16px;
  /* margin-bottom: 1rem; */
  text-align: center;
  margin-top: 4vh;
`;

const WaitTitle = styled.div`
  font-size: 14px;
  line-height: 1.4;
  padding-top: 1rem;
`;

const JoraengImgBox = styled.div`
  width: 185px;
  margin: 0 auto;
`;

const JoraengImg = styled.img`
  width: 100%;
`;

const Donation = ({ history }) => {
  return (
    <>
      <Responsive style={{ paddingTop: '4vh' }}>
        <Slider history={history} />
        <TitleText>소액기부</TitleText>
        <ContentBox>
          <JoraengImgBox>
            <JoraengImg src={waitjoraeng} alt="" />
          </JoraengImgBox>
          <WaitTitle>
            아직 준비 중인 서비스입니다.
            <br />
            조랭이가 열심히 준비 중이니 조금 기다려주세요.
          </WaitTitle>
        </ContentBox>
      </Responsive>
    </>
  );
};

export default Donation;
