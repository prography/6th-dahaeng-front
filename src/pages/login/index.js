import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, login } from 'store/auth';
import styled from 'styled-components';
import LoginForm from '../../components/AuthForm/LoginForm';
import { withRouter } from 'react-router-dom';
import SignResponsive from '../../components/common/SignResponsive';
import Modal from '../../components/Modal';

import KakaoLogo from 'assets/logo/kakao-logo.png';
import NaverLogo from 'assets/logo/naver.svg';

const LoginContentWrapper = styled.div`
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
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
`;

const SnsBox = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 42px 9px;
`;

const KakaoLogin = styled.button`
  flex: 1;
  text-align: center;
  border: none;
  border-radius: 63px;
`;

const KakaoLogoImgWrapper = styled.div`
  width: 42px;
  height: 42px;
  background: #fbde6f;
  margin: 0 auto 6px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
`;

const KakaoLogoImg = styled.img`
  width: 23px;
`;

const SNSLabel = styled.div`
  font-size: 14px;
  color: #4d4d4d;
  flex: 1;
  text-align: center;
  margin-right: 5px;
`;

const NaverLogin = styled.button`
  flex: 1;
  text-align: center;
  border: none;
  border-radius: 63px;
`;

const NaverLogoImgWrapper = styled.div`
  width: 42px;
  height: 42px;
  margin: 0 auto 6px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
`;

const NaverLogoImg = styled.img`
  width: 42px;
  height: 42px;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  margin-bottom: 2rem;
  text-align: center;
`;

const ModalButton = styled.button`
  box-sizing: border-box;
  float: right;
  margin-top: 1rem;
  border: none;
  color: white;
  height: 1.5rem;
  background: ${(props) => props.color};
  outline: none;
`;

const ModalText = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
  color: var(--text-second);
  line-height: 1.5rem;
`;

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user, has_jorang, token } = useSelector(
    ({ auth, _ }) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: auth.user,
      has_jorang: auth.has_jorang,
      token: auth.token,
    }),
  );

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeForm({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const [status] = useState({
    email: 'empty',
    pwd: 'empty',
    pwd_ok: 'empty',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;
    const sns = 'none';
    dispatch(login({ email, password, sns }));
    localStorage.setItem('record_id', null);
  };

  const snsLogin = (sns) => {
    const email = '';
    const password = '';
    dispatch(login({ email, password, sns }));
    localStorage.setItem('record_id', null);
    //window.location.href = 'https://www.dahaengback.shop/social/kakao_login/';
  };

  useEffect(() => {
    dispatch(initForm('login'));
  }, [dispatch]);

  const [openModal, setOpenModal] = useState(false);

  const setModal = useCallback(() => {
    setOpenModal(!openModal);
  }, []);

  useEffect(() => {
    if (authError === '유효하지않은 계정입니다.') {
      console.log('회원가입 필요');
      setModal();
    } else if (
      authError ===
      '활성화 되지 않은 계정입니다. 메일을 확인하고, 본인인증을 해주세요.'
    ) {
      console.log('이메일 인증 필요');
      history.push('/emailAuth');
      //setModal();
      return;
    } else if (authError === 'JWT token 생성에 실패하였습니다.') {
      setModal();
    }
    if (token) {
      console.log('로그인 성공');
      console.log('has_jorang: ', has_jorang);
      history.push('/');
    }
    // } else if (user) {
    //   console.log('getUser 성공');
    //   console.log(user);
    //   history.push('/');
    // }
  }, [auth, authError, dispatch, history, user, has_jorang, token, setModal]);

  // 로그인, 회원가입 랜덤 컬러
  const [color, setColor] = useState('');
  const colorArray = ['#A26C8F', '#F8DB5C', '#FF714D', '#73A38F', '#5CA1D2'];
  const randomItem = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };

  useEffect(() => {
    setColor(randomItem());
  }, []);

  return (
    <SignResponsive>
      <LoginContentWrapper>
        <Title>DA:HAENG</Title>
        <Content>
          <div>나만의 소소한 행복을 찾아</div>
          <div>보관하고, 또 다른 행복을 찾자</div>
        </Content>
        {/*<LinkText onClick={moveServiceInfo}>*/}
        {/*  <span>'다행, 더 알아보러가기'</span>*/}
        {/*</LinkText>*/}
        {/*<PictureBox>*/}
        {/*  <LoginImg src={loginJoraeng} alt=""/>*/}
        {/*</PictureBox>*/}
        <LoginForm
          form={form}
          onChange={onChange}
          onSubmit={onSubmit}
          status={status}
          color={color}
        />
        <SnsBox>
          <KakaoLogin onClick={() => snsLogin('kakao')}>
            <KakaoLogoImgWrapper>
              <KakaoLogoImg src={KakaoLogo} alt="" />
            </KakaoLogoImgWrapper>
            <SNSLabel>
              카카오로
              <br />
              로그인하기
            </SNSLabel>
          </KakaoLogin>
          <NaverLogin onClick={() => snsLogin('naver')}>
            <NaverLogoImgWrapper>
              <NaverLogoImg src={NaverLogo} alt="" />
            </NaverLogoImgWrapper>
            <SNSLabel>
              네이버로
              <br />
              로그인하기
            </SNSLabel>
          </NaverLogin>
        </SnsBox>

        <Modal
          className="popup"
          openModal={openModal}
          setModal={setModal}
          title={
            <ModalTitle>
              {authError === '유효하지않은 계정입니다.'
                ? '회원가입되지 않은 계정입니다.'
                : '아이디 혹은 비밀번호가 일치하지 않습니다.'}
            </ModalTitle>
          }
          content={
            <ModalText>
              {authError === '유효하지않은 계정입니다.'
                ? '회원 가입페이지로 이동해 회원가입을 완료해주세요!'
                : '다시 입력해주세요'}
            </ModalText>
          }
          button={
            <ModalButton onClick={setModal} color={color}>
              확인
            </ModalButton>
          }
        />
      </LoginContentWrapper>
    </SignResponsive>
  );
};

export default withRouter(Login);
