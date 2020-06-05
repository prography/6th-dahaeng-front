import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'store/user';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import defaultJorang from 'assets/defaultJorang.png';
import Moment from 'moment';

const Wrapper = styled.span`
  width: 33.3%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageBox = styled.span`
  position: relative;
  width: 100%;
  padding-bottom: 70%;
  display: block;
`;

const Content = styled.div`
  padding: 2%;
`;

const Date = styled.div``;

const Question = styled.div``;

const Detail = styled.div``;

const FeedBox = ({ record }) => {
  return (
    <>
      <Wrapper>
        <ImageBox>
          <img
            src={record.image}
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              objectFit: 'scale-down',
              width: '100%',
              height: '100%',
            }}
          ></img>
        </ImageBox>
        <Content>
          <Date>{Moment(record.created_at).format('MM-DD')}</Date>
          <Question>{record.question}</Question>
          <Detail>{record.detail}</Detail>
        </Content>
      </Wrapper>
    </>
  );
};

export default FeedBox;
