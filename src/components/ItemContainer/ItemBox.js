import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 228px;
  height: 229px;
  margin: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  display: flex;
  flex-direction: column;

  cursor: pointer;
  transition: 0.125s ease-in-out;
`;

const ItemImageBox = styled.div`
  height: 134px;
  width: 100%;
  overflow: hidden;
  flex: none;
`;

const ItemImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 134px;
`;

const ItemInfoBox = styled.div`
  display: block;
  width: 100%;
  max-height: 100%;
`;

const ItemName = styled.div`
  font-size: 18px;
  padding: 0.5rem 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemHas = styled.div`
  font-size: 8px;
  border-radius: 11px;
  border: 1px solid red;
  color: red;
  width: 85px;
  height: 15px;
  padding-top: 2px;
  margin-left: 5px;
`;

const ItemPrice = styled.div`
  flex: 1;
  font-size: 14px;
  padding: 0.5rem 1rem;
  text-align: left;
`;

const ItemBox = ({ item }) => {
  return (
    <>
      <Wrapper>
        <ItemImageBox>
          <ItemImage></ItemImage>
        </ItemImageBox>
        <ItemInfoBox>
          <ItemName>
            {item.name}
            {item.has ? <ItemHas>{'이미 가지고 있어요!'}</ItemHas> : null}
          </ItemName>
          <ItemPrice>{`${item.price}코인`}</ItemPrice>
        </ItemInfoBox>
      </Wrapper>
    </>
  );
};
export default ItemBox;