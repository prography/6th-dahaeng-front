import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignResponsive from '../../components/common/SignResponsive';
import congratulateJoraeng from 'assets/joraeng/congratulate-joraeng.png';

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
  height: 240px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: auto;
    max-height: 180px;
    width: 300px;
  }
`;
const ButtonBox = styled.div`
  flex: 1;
  margin-left: none;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

const CreateButton = styled.button`
  outline: none;
  background: var(--primary-color);
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: 3rem;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 2rem;
`;

const signComplete = ({ history }) => {
  const createLink = () => {
    history.push('/login');
  };

  return (
    <>
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
    </>
  );
};

export default signComplete;
