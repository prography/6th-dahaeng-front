import React from 'react';
import styled from 'styled-components';
import SignResponsive from '../../components/common/SignResponsive';
import authJoraeng from 'assets/joraeng/auth-joraeng.png';

const Title = styled.div`
  font-size: 32px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 15px;
  text-align: center;
  margin-bottom: 5rem;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1rem;
`;
const CongratulateImg = styled.img`
  object-fit: cover;
  height: 240px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: auto;
    max-height: 180px;
    width: 300px;
  }
`;
const ButtonBox = styled.div`
  flex: 1;
  margin-left: none;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
  outline: none;
  background: var(--primary-color);
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: 3rem;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 2rem;
`;

const emailAuth = ({ history }) => {
  const createLink = () => {
    history.push('/login');
  };

  return (
    <>
      <SignResponsive>
        <Title>Da:haeng</Title>
        <ImageBox>
          <CongratulateImg src={authJoraeng} alt="" />
        </ImageBox>
        <SubTitle>
          <div>인증 메일이 전송되었습니다 !</div>
          <div>도착한 메일을 확인하고 인증을 완료해주세요</div>
          <div> 인증은 가입 후 딱 한 번만 해주시면 됩니다</div>
        </SubTitle>
        <LoginButton>로그인하러 가기</LoginButton>
      </SignResponsive>
    </>
  );
};

export default emailAuth;
