import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'store/user';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import defaultJoraeng from 'assets/joraeng/defaultJoraeng.png';
import { Input } from '@material-ui/core';

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  margin: 1rem 0.5rem 0rem 0.5rem;
  background-color: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);

  /* @media (max-width: 1024px) {
    width: 40%;
  } */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WrapperBox = styled.div`
  position: relative;
  padding-top: 70%;

  display: flex;
  flex-direction: column;
`;

const CharacterBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70%;

  border-style: none;
  overflow: hidden;
`;

const CharacterImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  display: block;
  max-height: 100%;
`;

const Date = styled.div`
  font-size: 18px;
  margin: 0.5rem;
`;

const Question = styled.div`
  font-size: 18px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffede5 40%);
  display: inline;
  margin: 0.5rem;

  word-break: break-all;
`;

const Detail = styled.div`
  font-size: 14px;
  margin: 0.5rem;
  align-items: center;

  word-break: break-all;
`;

const checkTitleLength = (text) => {
  if (text.length >= 20) {
    return text.substr(0, 20) + '...';
  } else {
    return text;
  }
};

const checkDetailLength = (text) => {
  if (text.length >= 60) {
    return text.substr(0, 60) + '...';
  } else {
    return text;
  }
};

const FeedBox = ({ record }) => {
  return (
    <>
      <Wrapper>
        <WrapperBox>
          <CharacterBox>
            <CharacterImg alt="" src={defaultJoraeng} />
          </CharacterBox>
          <ContentBox>
            <Date>{record.question.date}</Date>
            <Question>{checkTitleLength(record.question.text)}</Question>
            <Detail>{checkDetailLength(record.detail)}</Detail>
          </ContentBox>
        </WrapperBox>
      </Wrapper>
    </>
  );
};

export default FeedBox;
