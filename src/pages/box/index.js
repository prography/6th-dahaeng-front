import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecords } from 'store/box';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import FeedBox from './FeedBox.js';
import ThreadBox from './ThreadBox.js';
import Header from 'components/Header';
import search from 'assets/search.png';
import feed from 'assets/feed.png';
import thread from 'assets/thread.png';

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
  float: right;
  display: flex;
  flex-direction: row;
  width: 3rem;
`;

const Search = styled.div`
  width: 1rem;
  height: 1rem;
`;

const Feed = styled.div`
  width: 1rem;
  height: 1rem;
`;

const Thread = styled.div`
  width: 1rem;
  height: 1rem;
`;

const Content = styled.div`
  display: ${(props) => (props.sortingType === 'feed' ? 'flex' : 'none')};
  flex-direction: ${(props) => (props.sortingType === 'feed' ? 'row' : 'none')};
  flex-wrap: ${(props) => (props.sortingType === 'feed' ? 'wrap' : 'none')};
`;

const Box = () => {
  const [sortingType, setSortingType] = useState('feed'); //search, feed, thread

  const records = useSelector((state) => state.box.records);
  //const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getRecords(user));
  //   }, [dispatch]);

  return (
    <>
      <Header></Header>
      <Wrapper>
        <SortingBar>
          <SortingBox>
            <Search onClick={() => setSortingType('search')}>
              <img src={search} style={{ width: '1rem', height: '1rem' }}></img>
            </Search>
            <Feed onClick={() => setSortingType('feed')}>
              <img src={feed} style={{ width: '1rem', height: '1rem' }}></img>
            </Feed>
            <Thread onClick={() => setSortingType('thread')}>
              <img src={thread} style={{ width: '1rem', height: '1rem' }}></img>
            </Thread>
          </SortingBox>
        </SortingBar>

        <Content sortingType={'feed'}>
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
