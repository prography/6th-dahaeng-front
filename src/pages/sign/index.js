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
    email: 'empty',
    pwd: 'empty',
    pwd_ok: 'empty',
  });

  const emailStatusEnum = {
    empty: '이메일은 필수 입력 사항입니다!',
    wrong: '이메일을 똑바로 입력했는지 한번 확인 해 주세요 :)',
    valid: false,
  };

  const pwStatusEnum = {
    empty: '비밀번호는 필수 입력 사항입니다!',
    wrong: '비밀번호를 똑바로 입력했는지 한번 확인 해 주세요 :)',
    valid: false,
  };

  const validateEmail = (value) => {
    if (value === '') {
      return 'empty';
    }
    if (!isEmail(value)) {
      status.email = 'wrong';
    }
    status.email = 'valid';
    // enum
  };

  // 아래와 같은 형태로 각 form에 대해서 검증하능 방법을 바꾸세요
  // email.StatusEnum[validateEmail('my-email')]

  const validatePassword = (value) => {
    if (value === '') {
      return 'empty';
    }
    if (!isAlphanumeric(value) || !isLength(value, { min: 8 })) {
      return 'wrong';
    }
    return 'valid';
  };

  // const onChange = (e) => {
  //   const { value, name } = e.target;

  //   dispatch(
  //     changeForm({
  //       form: 'sign',
  //       key: name,
  //       value,
  //     }),
  //   );

  //   validateEmail(value);
  //   validatePassword(value);
  // };

  const onEmailChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeForm({
        form: 'sign',
        key: name,
        value,
      }),
    );

    return setStatus({
      ...status,
      email: emailStatusEnum[validateEmail(value)],
    });
  };

  const onPwChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeForm({
        form: 'sign',
        key: name,
        value,
      }),
    );

    return pwStatusEnum[validatePassword(value)];
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
        onEmailChange={onEmailChange}
        onPwChange={onPwChange}
        onSubmit={onSubmit}
        status={status}
      ></AuthForm>
    </Wrapper>
  );
};

export default withRouter(Sign);
