import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecords } from 'store/box';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import FeedBox from './FeedBox.js';
import ThreadBox from './ThreadBox.js';
import Header from 'components/Header';
import search from 'assets/icon/search.png';
import feed from 'assets/icon/feed.png';
import thread from 'assets/icon/thread.png';
import Responsive from '../../components/common/Responsive.js';

const SortingBar = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 100%;
  height: 2rem;
`;

const SortingBox = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
`;

const Search = styled.div`
  width: 1.5rem;
  height: 1rem;
`;

const Feed = styled.div`
  width: 1.5rem;
  height: 1rem;
`;

const Thread = styled.div`
  width: 1.5rem;
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
      <Responsive style={{ color: '#333333' }}>
        <SortingBar>
          <SortingBox>
            <Search onClick={() => setSortingType('search')}>
              <img
                alt=""
                src={search}
                style={{
                  width: '1rem',
                  height: '1rem',
                  objectFit: 'scale-down',
                }}
              ></img>
            </Search>
            <Feed onClick={() => setSortingType('feed')}>
              <img
                alt=""
                src={feed}
                style={{
                  width: '1rem',
                  height: '1rem',
                  objectFit: 'scale-down',
                }}
              ></img>
            </Feed>
            <Thread onClick={() => setSortingType('thread')}>
              <img
                alt=""
                src={thread}
                style={{
                  width: '1rem',
                  height: '1rem',
                  objectFit: 'scale-down',
                }}
              ></img>
            </Thread>
          </SortingBox>
        </SortingBar>

        <Content sortingType={'feed'}>
          {sortingType === 'thread' ? (
            records.map((record, index) => {
              return <ThreadBox record={record} key={index}></ThreadBox>;
            })
          ) : sortingType === 'feed' ? (
            records.map((record, index) => {
              return <FeedBox record={record} key={index}></FeedBox>;
            })
          ) : (
            <Search></Search>
          )}
        </Content>
      </Responsive>
    </>
  );
};

export default Box;
