import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, initForm, login } from 'store/auth';
import { getUser } from 'store/user';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  width: 90%;
  border: 1px solid;
  margin: 0 auto;
  margin-top: 1.5rem;
`;

const Title = styled.div`
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Date = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  /* border: 1px solid; */
  height: 2rem;
  width: 100%;
`;

const Question = styled.div`
  font-size: 0.8rem;
  /* border: 1px solid; */
  height: 1rem;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid; */
  padding: 1rem;
`;

const Character = styled.div`
  box-sizing: border-box;
  width: 7rem;
  height: 7rem;
  border: 1px solid;
`;

const Detail = styled.div`
  box-sizing: border-box;
  height: 5rem;
  margin-left: 2rem;
  outline: none;
  border: 1px solid;
  flex: 1;
`;

const ThreadBox = ({ record }) => {
  return (
    <Wrapper>
      <Title>
        <Date>{record.question.date}</Date>
        <Question>{record.question.text}</Question>
      </Title>
      <Content>
        <Character></Character>
        <Detail>{record.detail}</Detail>
      </Content>
    </Wrapper>
  );
};

export default ThreadBox;
