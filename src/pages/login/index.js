import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, login } from 'store/auth';
import { getUser } from 'store/user';
import styled from 'styled-components';
import AuthForm from 'components/AuthForm.js';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div``;

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
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
      <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      ></AuthForm>
    </Wrapper>
  );
};

export default withRouter(Login);
