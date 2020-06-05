import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignResponsive from '../../components/common/SignResponsive';
import congratulateJoraeng from 'assets/joraeng/congratulateJoraeng.png';

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
  padding: 1rem;
`;
const CongratulateImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const ButtonBox = styled.div`
  flex: 1;
  margin-left: 'none';
  width: '100%';
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CreateButton = styled.button`
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

const signComplete = ({ history }) => {
  const createLink = () => {
    history.push('/create');
  };

  return (
    <SignResponsive>
      <Title>Da:haeng</Title>
      <SubTitle>
        <div>회원 가입이 완료되었습니다 !</div>
        <div>다행과 함께 행복을 차근차근 모아보세요 :)</div>
      </SubTitle>
      <ImageBox>
        <CongratulateImg src={congratulateJoraeng} alt="" />
      </ImageBox>
      <ButtonBox>
        <CreateButton onClick={createLink}>행복 기록하러 가기</CreateButton>
      </ButtonBox>
    </SignResponsive>
  );
};

export default signComplete;
