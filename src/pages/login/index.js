import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, login } from 'store/auth';
import styled from 'styled-components';
import SignResponsive from '../../components/common/SignResponsive';
import LoginForm from '../../components/AuthForm/LoginForm';
import { withRouter } from 'react-router-dom';

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
`;

const Picture = styled.div`
  display: block;
  margin: 0px auto;
  background: blue;
  width: 400px;
  height: 120px;
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
  font-size: 14px;
  color: #453333;
  border: none;
  border-radius: 63px;
  width: 45%;
`;

const NaverLogin = styled.button`
  float: right;
  outline: none;
  height: 2.5rem;
  background: #4ec867;
  font-size: 14px;
  color: #ffffff;
  border: none;
  border-radius: 63px;
  width: 45%;
`;

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user, hasJorang } = useSelector(
    ({ auth, user }) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: auth.user,
      hasJorang: auth.hasJorang,
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

  const [status, setStatus] = useState({
    email: 'empty',
    pwd: 'empty',
    pwd_ok: 'empty',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    dispatch(initForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('로그인 실패');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      if (!hasJorang) {
        history.push('/create');
      }
      history.push('/');
    } else if (user) {
      console.log('getUser 성공');
      console.log(user);
      history.push('/');
    }
  }, [auth, authError, dispatch, history, user]);

  return (
    <SignResponsive>
      <Title>Da:haeng</Title>
      <SubTitle>나만의 행복 보관함, 다행</SubTitle>
      <Content>
        <div>나만의 소소한 행복을 찾아</div>
        <div>보관하고, 또 다른 행복을 찾자</div>
      </Content>
      <LinkText>더 알아보러 가기</LinkText>
      <Picture />
      <LoginForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        status={status}
      ></LoginForm>
      <SnsBox>
        <KakaoLogin>로그인</KakaoLogin>
        <NaverLogin>로그인</NaverLogin>
      </SnsBox>
    </SignResponsive>
  );
};

export default withRouter(Login);
