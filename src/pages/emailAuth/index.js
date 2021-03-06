import React from 'react';
import styled from 'styled-components';
import SignResponsive from '../../components/common/SignResponsive';
import authJoraeng from 'assets/joraeng/auth-joraeng.png';

import useLocalStorage from '../../util/useLocalStorage';

const EmailAuthContentWrapper = styled.div`
  height: calc(100vh - 75px);
  width: calc(100vw - 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  word-break: keep-all;
  color: #212121;
`;

const Title = styled.div`
  font-size: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Content = styled.div`
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  max-height: 180px;
  width: 300px;
`;

const EmailJoraengImg = styled.img`
  object-fit: contain;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.button`
  outline: none;
  background: ${(props) => props.color};
  font-size: 14px;
  color: white;
  border: none;
  height: 2.5rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const EmailAuth = ({ history }) => {
  const moveLogin = () => {
    history.push('/login');
  };

  const [randomColor, setRandomColor] = useLocalStorage('randomColor', []);

  return (
    <>
      <SignResponsive>
        <EmailAuthContentWrapper>
          <Title>Da:haeng</Title>
          <ImageBox>
            <EmailJoraengImg src={authJoraeng} alt="" />
          </ImageBox>
          <Content>
            <div>인증 메일이 전송되었습니다 !</div>
            <div>도착한 메일을 확인하고 인증을 완료해주세요</div>
            <div> 인증은 가입 후 딱 한 번만 해주시면 됩니다</div>
          </Content>
          <LoginButton onClick={moveLogin} color={randomColor}>
            로그인하러 가기
          </LoginButton>
        </EmailAuthContentWrapper>
      </SignResponsive>
    </>
  );
};

export default EmailAuth;
