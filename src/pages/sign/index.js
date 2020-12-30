import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, sign } from 'store/auth';
import styled from 'styled-components';
import SignAuthForm from '../../components/AuthForm/sign.js';
import { withRouter } from 'react-router-dom';
import { isEmail, isLength, isAlphanumeric } from 'validator';
import SignResponsive from '../../components/common/SignResponsive';
import Modal from '../../components/Modal';

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
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
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

const Sign = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.sign,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const [status, setStatus] = useState({
    email: 'empty',
    pwd: 'empty',
    pwd_ok: 'empty',
  });

  const [firstClick, setFirstClick] = useState(true);

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

  // 아래와 같은 형태로 각 form에 대해서 검증하능 방법을 바꾸세요
  // email.StatusEnum[validateEmail('my-email')]
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
      email: validateEmail(value),
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
      pwd: validatePassword(value),
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

    return setStatus({
      ...status,
      pwd_ok: validatePwConfirm(value),
    });
  };

  //제출시 이벤트
  const onSubmit = (e) => {
    //console.log(firstClick);
    e.preventDefault();

    const { email, password, passwordConfirm } = form;
    console.log(passwordConfirm);
    //입력창 모두 valid 아닐 때 alert
    if (
      !(
        status.email === 'valid' &&
        status.pwd === 'valid' &&
        status.pwd_ok === 'valid'
      )
    ) {
      alert('입력을 확인해주세요!');
    } else {
      setFirstClick(false);
      dispatch(sign({ email, password }));
    }
  };

  useEffect(() => {
    dispatch(initForm('sign'));
  }, [dispatch]);

  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
    if (openModal) {
      history.push('/login');
    }
  };

  useEffect(() => {
    if (authError) {
      // if (authError.includes('already exists')) {
      //   console.log('이미 존재하는 회원');
      //   setModal();
      //   return;
      // }
      console.log(authError);
      if (!firstClick) {
        history.push('/emailAuth');
      }
      console.log('회원가입 실패');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      history.push('/emailAuth');
    }
  }, [auth, authError, dispatch, history]);

  // useEffect(() => {
  //   if (user) {
  //     console.log('getUser 성공');
  //     console.log(user);
  //     history.push('/');
  //   }
  // }, [history, user]);

  return (
    <SignResponsive>
      <Title>Da:haeng</Title>
      <SubTitle>간단한 회원가입 후 다행과 함께해요!</SubTitle>
      <SignAuthForm
        type="sign"
        form={form}
        onEmailChange={onEmailChange}
        onPwChange={onPwChange}
        onPwConfirmChange={onPwConfirmChange}
        onSubmit={onSubmit}
        status={status}
      ></SignAuthForm>
      <Modal
        className="popup"
        openModal={openModal}
        setModal={setModal}
        title={<ModalTitle>이미 존재하는 회원입니다.</ModalTitle>}
        content={<ModalText>로그인하러 가볼까요?</ModalText>}
        button={<ModalButton onClick={setModal}>확인</ModalButton>}
      />
    </SignResponsive>
  );
};

export default withRouter(Sign);
