import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from 'store/user';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import SignResponsive from '../../components/common/SignResponsive';
import defaultJorang from 'assets/defaultJorang.png';
import Header from 'components/Header';

const TextBox = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 5rem;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonBox = styled.div`
  margin-top: 2rem;
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

const Create = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const onSubmit = () => {
    dispatch(create(name, '#ffffff'));

    history.push('/');
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Header></Header>
      <SignResponsive>
        <TextBox>
          <div>짜잔- 나만의 반려조랭이에요</div>
          <div>조랭이의 이름을 지어주세요</div>
        </TextBox>
        <ImageBox>
          <img src={defaultJorang}></img>
        </ImageBox>
        <InputBox>
          <input
            style={{
              border: 'none',
              'border-bottom': '1px solid #bbbbbb',
              padding: '1px',
            }}
            value={name}
            onChange={onChange}
          ></input>
        </InputBox>
        <TextBox>
          <div>매일 매일 행복을 기록하면, </div>
          <div>나의 반려 조랭이가 무럭무럭 자랍니다</div>
        </TextBox>
        <ButtonBox>
          <LoginButton onClick={onSubmit}>
            오늘의 행복 기록하러 가기
          </LoginButton>
        </ButtonBox>
      </SignResponsive>
    </>
  );
};

export default Create;
