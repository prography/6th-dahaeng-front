import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Responsive from '../../components/common/Responsive';
import styled from 'styled-components';
import Header from '../../components/Header';
import ItemContainer from '../../components/ItemContainer';
import { getItems } from '../../store/user';

const ContentBox = styled.div`
  max-width: 1024px;
  max-height: 709px;
  padding-top: 8rem;
  margin: 0 auto;
  /* height: calc(100vh - 10rem - 16px); */

  /* @media screen and (max-width: 480px) {
    padding: 10px;
  } */

  text-align: center;
`;

const ShopTitle = styled.div`
  font-size: 24px;
`;

const Market = () => {
  const items = useSelector((state) => state.user.items);
  const indexs = ['color', 'background', 'item'];

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);

  return (
    <>
      <Header></Header>
      <ContentBox>
        <ShopTitle>{'조랭 코인샵'}</ShopTitle>
        <ItemContainer items={items} indexs={indexs}></ItemContainer>
      </ContentBox>
    </>
  );
};

export default Market;
