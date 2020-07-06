import React from 'react';
import Responsive from '../../components/common/Responsive';
import styled from 'styled-components';
import Header from '../../components/Header';
import ItemContainer from '../../components/ItemContainer';

const ContentBox = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 480px;
  margin-top: 4rem;
  text-align: center;
`;

const ShopTitle = styled.div`
  font-size: 24px;
`;

const Market = () => {
  return (
    <>
      <Header></Header>
      <Responsive>
        <ContentBox>
          <ShopTitle>{'조랭 코인샵'}</ShopTitle>
          <ItemContainer></ItemContainer>
        </ContentBox>
      </Responsive>
    </>
  );
};

export default Market;
