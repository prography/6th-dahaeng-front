import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, login } from 'store/auth';
import { getUser } from 'store/user';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 1.5rem;
  background-color: white;
  box-shadow: var(--card-shadow);
  border-radius: var(--border-radius);
  padding: 0.5rem;
`;

const TitleBox = styled.div`
  width: 100%;
  padding: 1rem;
`;

const Date = styled.div`
  font-size: 18px;
  margin-bottom: 0.5rem;
  flex: 1;
`;

const Question = styled.div`
  font-size: 24px;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap ;
  
  & > span{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffede5 40%);
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid; */
  padding: 0 1rem 1rem 1rem;
`;

const CharacterBox = styled.div`
  flex: none;
  box-sizing: border-box;
  width: 7rem;
  height: 7rem;
  border: 1px solid #e9e9e9;
  overflow: hidden;
  border-radius: var(--small-border-radius);
`;

const CharacterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = styled.textarea`
  box-sizing: border-box;
  height: 7rem;
  margin-left: 1rem;
  outline: none;
  border: none;
  resize: none;
  flex: 1;

  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 30px,
      #e9e9e9 30px,
      #e9e9e9 31px,
      white 31px
    );
  line-height: 31px;
  padding: 8px;
`;

const ThreadBox = ({ record }) => {
  return (
    <Wrapper>
      <TitleBox>
        <Date>{record.question.date}</Date>
        <Question><span>{record.question.text}</span></Question>
      </TitleBox>
      <ContentBox>
        <CharacterBox>
          <CharacterImg src={record.img} alt="" />
        </CharacterBox>
        <Detail disabled value={record.detail} />
      </ContentBox>
    </Wrapper>
  );
};

export default ThreadBox;
