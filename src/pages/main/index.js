import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, getToday } from 'store/box';
import { reminder, getUser } from 'store/user';
import Responsive from '../../components/common/Responsive';
import Moment from 'moment';
import FloatingButton from '../../components/MainFloatingButton';
import Slider from '../../components/Slider';
import { useState } from 'react';
import Room from '../main/Room';

const Date = styled.div`
  font-size: 20px;
  display: inline;
`;

const QuestionBox = styled.div`
  margin: auto auto;
  padding-top: 3vh;
  width: 220px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Question = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.5;
`;

const QuestionHighlight = styled.div`
  font-size: 21px;
  word-break: keep-all;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.thirdColor} 50%
  );
  display: inline;
`;

const Main = ({ history }) => {
  const [inputText, setInputText] = useState('');

  const id = useSelector((state) => state.auth.profile_id);
  const question = useSelector((state) => state.box.question);
  const has_jorang = useSelector((state) => state.auth.has_jorang);
  const colors = useSelector((state) => state.user.colors);
  const hasItems = useSelector((state) => state.user.jorang_items);

  const dispatch = useDispatch();

  useEffect(() => {
    if (has_jorang === false) {
      history.push('/create');
    }
  }, [dispatch, history, has_jorang]);

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    console.log(token);
    console.log(typeof token);
    if (
      token === null ||
      token === 'undefined' ||
      token === '' ||
      token.length <= 0
    ) {
      //release
      history.push('/login');
    }
  }, [token, history]);

  useEffect(() => {
    //dispatch(getUser(id));
    localStorage.getItem('profile') &&
      dispatch(getUser(localStorage.getItem('profile')));
    dispatch(getQuestion());
    dispatch(reminder());
    localStorage.getItem('record_id') &&
      dispatch(getToday(localStorage.getItem('record_id')));
  }, [dispatch, id]);

  //today record
  const record = useSelector((state) => state.box.record);

  useEffect(() => {
    record && setInputText(record.detail);
  }, [record]);

  const navigateRecord = () => {
    history.push('/record');
  };
  return (
    <>
      <Slider history={history} />
      <FloatingButton history={history} />
      <Responsive
        style={{
          paddingTop: '4vh',
        }}
      >
        <QuestionBox>
          <Date>
            {Moment(
              question && question.last_login && question.last_login.dateForm,
            ).format('MM-DD')}
          </Date>
          <Question onClick={navigateRecord}>
            <QuestionHighlight thirdColor={`#${colors && colors[2]}`}>
              {question && question.question}
            </QuestionHighlight>
          </Question>
        </QuestionBox>
      </Responsive>
      <Room closet={false} hasItems={hasItems}></Room>
    </>
  );
};

export default Main;
