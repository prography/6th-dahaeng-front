import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm } from 'store/auth';
import styled from 'styled-components';
import AuthForm from '../../components/AuthForm.js/index.js';

const Wrapper = styled.div``;

const Sign = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.sign }));

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
  };

  useEffect(() => {
    dispatch(initForm('sign'));
  }, [dispatch]);

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

export default Sign;
