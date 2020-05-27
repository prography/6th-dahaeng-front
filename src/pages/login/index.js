import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, login } from 'store/auth';
import { getUser } from 'store/user';
import styled from 'styled-components';
import AuthForm from 'components/AuthForm.js';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 32px;
  margin-top: 2rem;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 24px;
  margin-top: 2rem;
  text-align: center;
`;

const Content = styled.div`
  font-size: 18px;
  margin-top: 1rem;
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
  margin-bottom: 1rem;
  background: blue;
  width: 409px;
  height: 125px;
`;

const SnsBox = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px;
  width: 30%;
`;

const KakaoLogin = styled.button`
  float: left;
  outline: none;
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
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user && user.user,
  }));

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

  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = form;
    dispatch(login(username, password));
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
      dispatch(getUser());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('getUser 성공');
      console.log(user);
      history.push('/');
    }
  }, [history, user]);

  return (
    <Wrapper>
      <Title>Da:haeng</Title>
      <SubTitle>나만의 행복 보관함, 다행</SubTitle>
      <Content>
        <div>나만의 소소한 행복을 찾아</div>
        <div>보관하고, 또 다른 행복을 찾자</div>
      </Content>
      <LinkText>더 알아보러 가기</LinkText>
      <Picture />
      <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      ></AuthForm>
      <SnsBox>
        <KakaoLogin>로그인</KakaoLogin>
        <NaverLogin>로그인</NaverLogin>
      </SnsBox>
    </Wrapper>
  );
};

export default withRouter(Login);
