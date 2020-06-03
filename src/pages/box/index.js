import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecords } from 'store/box';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import FeedBox from './FeedBox.js';
import ThreadBox from './ThreadBox.js';
import Header from 'components/Header';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SortingBar = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  width: 90%;
  /* height: 3rem; */
`;
const SortingBox = styled.div`
  box-sizing: border-box;

  float: right;
  display: flex;
  flex-direction: row;
  width: 3rem;
`;

const Search = styled.div`
  box-sizing: border-box;

  width: 1rem;
  height: 1rem;
  background: red;
`;

const Feed = styled.div`
  box-sizing: border-box;

  width: 1rem;
  height: 1rem;
  background: orange;
`;

const Thread = styled.div`
  box-sizing: border-box;

  width: 1rem;
  height: 1rem;
  background: yellow;
`;

const Content = styled.div``;

const Box = () => {
  const [sortingType, setSortingType] = useState('thread'); //search, feed, thread

  const records = useSelector((state) => state.box.records);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecords(user));
  }, [dispatch]);

  return (
    <>
      <Header></Header>
      <Wrapper>
        <SortingBar>
          <SortingBox>
            <Search onClick={() => setSortingType('search')}></Search>
            <Feed onClick={() => setSortingType('feed')}></Feed>
            <Thread onClick={() => setSortingType('thread')}></Thread>
          </SortingBox>
        </SortingBar>

        <Content>
          {sortingType === 'thread' ? (
            records.map((record) => {
              return <ThreadBox record={record}></ThreadBox>;
            })
          ) : sortingType === 'feed' ? (
            records.map((record) => {
              return <FeedBox record={record}></FeedBox>;
            })
          ) : (
            <Search></Search>
          )}
        </Content>
      </Wrapper>
    </>
  );
};

export default Box;
