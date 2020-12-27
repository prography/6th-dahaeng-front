import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, login } from 'store/auth';
import styled from 'styled-components';
import LoginForm from '../../components/AuthForm/LoginForm';
import { withRouter } from 'react-router-dom';
import SignResponsive from '../../components/common/SignResponsive';
import Modal from '../../components/Modal';

import loginJoraeng from 'assets/joraeng/login-joraeng.png';
import KakaoLogo from 'assets/logo/kakao-logo.png';
import NaverLogo from 'assets/logo/naver-logo.png';

const Title = styled.div`
  font-size: 32px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 24px;
  text-align: center;
`;

const Content = styled.div`
  font-size: 18px;
  margin-top: rem;
  text-align: center;
`;

const LinkText = styled.div`
  font-size: 12px;
  margin-top: 1rem;
  text-align: center;
  cursor: pointer;

  & > span {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      var(--secondary-color) 40%
    );
  }
`;

const PictureBox = styled.div`
  margin: 0px auto;
  width: 90%;
`;

const LoginImg = styled.img`
  width: 100%;
  object-fit: cover;
  align-items: center;
  justify-content: center;
`;

const SnsBox = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px;
`;

const KakaoLogin = styled.button`
  float: left;
  height: 2.5rem;
  background: #fbde6f;
  border: none;
  border-radius: 63px;
  width: 45%;

  display: flex;
  align-items: center;
  padding: 0 56px;

  @media screen and (max-width: 480px) {
    padding: 0 32px;
  }
`;

const KakaoLogoImg = styled.img`
  width: 23px;
  flex: none;
  margin-bottom: 2px;
`;

const KakaoLabel = styled.div`
  font-size: 14px;
  color: #453333;
  flex: 1;
  text-align: right;
  margin-right: 5px;
`;

const NaverLogin = styled.button`
  float: right;
  outline: none;
  height: 2.5rem;
  background: #4ec867;
  border: none;
  border-radius: 63px;
  width: 45%;

  display: flex;
  align-items: center;
  padding: 0 56px;

  @media screen and (max-width: 480px) {
    padding: 0 32px;
  }
`;

const NaverLogoImg = styled.img`
  width: 20px;
  flex: none;
  margin-bottom: 2px;
`;

const NaverLabel = styled.div`
  font-size: 14px;
  color: #ffffff;
  flex: 1;
  text-align: right;
  margin-right: 5px;
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
  height: 2rem;
  background: var(--primary-color);
  border-radius: 4px;
  outline: none;
`;

const ModalText = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
  color: var(--text-second);
`;

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user, has_jorang, token } = useSelector(
    ({ auth, user }) => ({
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
  }, [auth, authError, dispatch, history, user, has_jorang, token]);

  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  const moveServiceInfo = () => {
    history.push('/serviceInfo');
  };

  return (
    <SignResponsive>
      <Title>Da:haeng</Title>
      <SubTitle>나만의 행복 보관함, 다행</SubTitle>
      <Content>
        <div>나만의 소소한 행복을 찾아</div>
        <div>보관하고, 또 다른 행복을 찾자</div>
      </Content>
      <LinkText onClick={moveServiceInfo}>
        <span>'다행, 더 알아보러가기'</span>
      </LinkText>
      <PictureBox>
        <LoginImg src={loginJoraeng} alt="" />
      </PictureBox>
      <LoginForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        status={status}
      ></LoginForm>
      <SnsBox>
        <KakaoLogin onClick={() => snsLogin('kakao')}>
          <KakaoLogoImg src={KakaoLogo} alt=""></KakaoLogoImg>
          <KakaoLabel>로그인</KakaoLabel>
        </KakaoLogin>
        <NaverLogin onClick={() => snsLogin('naver')}>
          <NaverLogoImg src={NaverLogo} alt=""></NaverLogoImg>
          <NaverLabel>로그인</NaverLabel>
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
        button={<ModalButton onClick={setModal}>확인</ModalButton>}
      />
    </SignResponsive>
  );
};

export default withRouter(Login);
