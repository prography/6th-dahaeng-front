import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, sign } from 'store/auth';
import { getUser } from 'store/user';
import styled from 'styled-components';
import SignAuthForm from '../../components/AuthForm/sign.js';
import { withRouter, Link } from 'react-router-dom';
import { isEmail, isLength, isAlphanumeric } from 'validator';
import SignResponsive from '../../components/common/SignResponsive';
import defaultJorang from 'assets/defaultJorang.png';

const Title = styled.div`
  font-size: 32px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 15px;
  text-align: center;
  margin-bottom: 5rem;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ButtonBox = styled.div`
  flex: 1;
  margin-left: 'none';
  width: '100%';
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
  outline: none;
  background: #ff9d73;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: 3rem;
  width: 100%;
  margin-top: 1em;
`;

const signComplete = () => {
  return (
    <SignResponsive>
      <Title>Da:haeng</Title>
      <SubTitle>
        <div>회원 가입이 완료되었습니다 !</div>
        <div>다행과 함께 행복을 차근차근 모아보세요 :)</div>
      </SubTitle>
      <ImageBox>
        <img src={defaultJorang}></img>
      </ImageBox>
      <ButtonBox>
        <Link to="/create">
          <LoginButton>행복 기록하러 가기</LoginButton>
        </Link>
      </ButtonBox>
    </SignResponsive>
  );
};

export default signComplete;
