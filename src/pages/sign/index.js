import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, sign } from 'store/auth';
import { getUser } from 'store/user';
import styled from 'styled-components';
import AuthForm from '../../components/AuthForm/index.js';
import { withRouter } from 'react-router-dom';
import { isEmail, isLength, isAlphanumeric } from 'validator';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 32px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 24px;
  margin-top: 2rem;
  text-align: center;
`;

const Sign = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.sign,
    auth: auth.auth,
    authError: auth.authError,
    user: user && user.user,
  }));

  const [status, setStatus] = useState({
    email: false,
    pwd: false,
    pwd_ok: false,
  });

  const validateEmail = (value) => {
    if (!isEmail(value)) {
      status.email = false;
    }
    status.email = true;
  };

  const validatePassword = (value) => {
    if (!isAlphanumeric(value) || !isLength(value, { min: 8 })) {
      status.pwd = false;
    }
    status.pwd = true;
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeForm({
        form: 'sign',
        key: name,
        value,
      }),
    );

    validateEmail(value);
    validatePassword(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(sign({ username, password }));
  };

  useEffect(() => {
    dispatch(initForm('sign'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('회원가입 실패');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
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
      <SubTitle>간단한 회원가입 후 다행과 함께해요!</SubTitle>
      <AuthForm
        type="sign"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        status={status}
      ></AuthForm>
    </Wrapper>
  );
};

export default withRouter(Sign);
