import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, sign } from 'store/auth';
import { getUser } from 'store/user';
import styled from 'styled-components';
import AuthForm from '../../components/AuthForm/index.js';
import { withRouter } from 'react-router-dom';
import { isEmail, isLength, isAlphanumeric } from 'validator';
import SignResponsive from '../../components/common/SignResponsive';
import TitleText from '../../components/common/TitleText';

const SubTitle = styled.div`
  font-size: 24px;
  margin-top: 2rem;
  text-align: center;
  
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
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

  //상황별 에러 메시지
  const emailStatusEnum = {
    empty: '이메일은 필수 입력 사항입니다!',
    wrong: '이메일을 확인 해 주세요 🤫',
    valid: false,
  };

  const pwStatusEnum = {
    empty: '비밀번호는 필수 입력 사항입니다!',
    wrong: '비밀번호는 숫자와 영어 8자 이상으로 만들어주세요 : )',
    valid: false,
  };

  const pwConfirmStatusEnum = {
    empty: '비밀번호 확인은 필수 입력 사항입니다!',
    wrong: '어라, 비밀번호와 다른 것 같아요',
    valid: false,
  };

  // 이메일, 비밀번호, 비밀번호 확인 유효성 검사
  const validateEmail = (value) => {
    if (value.trim() === '') {
      return 'empty';
    }
    if (!isEmail(value)) {
      return 'wrong';
    }
    return 'valid';
    // enum
  };

  const validatePassword = (value) => {
    if (value.trim() === '') {
      return 'empty';
    }
    if (!isAlphanumeric(value) || !isLength(value, { min: 8 })) {
      return 'wrong';
    }
    return 'valid';
  };

  const validatePwConfirm = (value) => {
    const { password } = form;

    console.log(value);
    if (value.trim() === '') {
      return 'empty';
    }
    if (value !== password) {
      return 'wrong';
    }
    return 'valid';
  };

  //입력시 이벤트
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

    return setStatus({
      ...status,
      pwd: pwStatusEnum[validatePassword(value)],
    });
  };

  const onPwConfirmChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeForm({
        form: 'sign',
        key: name,
        value,
      }),
    );

    console.log(validatePwConfirm(value));
    return setStatus({
      ...status,
      pwd_ok: pwConfirmStatusEnum[validatePwConfirm(value)],
    });
  };

  //제출시 이벤트
  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password, passwordConfirm } = form;

    //입력창 모두 valid 아닐 때 alert
    if (
      !(
        status.email === 'valid' &&
        status.pwd === 'valid' &&
        status.pwd_ok === 'valid'
      )
    ) {
      alert('입력을 확인해주세요!');
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
    <SignResponsive>
      <TitleText>Da:haeng</TitleText>
      <SubTitle>간단한 회원가입 후 다행과 함께해요!</SubTitle>
      <AuthForm
        type="sign"
        form={form}
        onEmailChange={onEmailChange}
        onPwChange={onPwChange}
        onPwConfirmChange={onPwConfirmChange}
        onSubmit={onSubmit}
        status={status}
      ></AuthForm>
    </SignResponsive>
  );
};

export default withRouter(Sign);
