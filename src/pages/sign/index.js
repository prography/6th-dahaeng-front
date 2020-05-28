import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, sign } from 'store/auth';
import { getUser } from 'store/user';
import styled from 'styled-components';
import AuthForm from '../../components/AuthForm/index.js';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 50px;
  margin-top: 2rem;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 20px;
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

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeForm({
        form: 'sign',
        key: name,
        value,
      }),
    );
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
      ></AuthForm>
    </Wrapper>
  );
};

export default withRouter(Sign);
