import React, { useState } from 'react';
import styled from 'styled-components';
import ItemBox from './ItemBox';

const Wrapper = styled.div`
  max-height: 709px;
  border: 1px solid black;
`;

const IndexList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 34px;
  /* height: 36px; */
`;

const Index = styled.div`
  cursor: pointer;
`;

const ItemPage = styled.div`
  width: 100%;
  height: 640px;
  background: #fffaf1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
  overflow-y: auto;
`;

const ItemContainer = ({ items, indexs }) => {
  const [select, setSelect] = useState('color');

  const selectCategory = (index) => {
    setSelect(index);
  };

  return (
    <>
      <Wrapper>
        <IndexList>
          {indexs &&
            indexs.map((index) => {
              return (
                <Index
                  key={index}
                  onClick={() => selectCategory(index)}
                  style={{
                    background: select === index ? '#fb8e5b' : '#fffaf1',
                  }}
                >
                  {index === 'color'
                    ? '컬러'
                    : index === 'background'
                    ? '배경'
                    : index === 'item'
                    ? '아이템'
                    : null}
                </Index>
              );
            })}
        </IndexList>
        <ItemPage>
          {items &&
            items
              .filter((item) => item.category === select)
              .map((item) => {
                return <ItemBox key={item.name} item={item}></ItemBox>;
              })}
        </ItemPage>
      </Wrapper>
    </>
  );
};
export default ItemContainer;
