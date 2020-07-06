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
  /* background: #fffaf1; */
  /* color: #fb8e5b; */
  /* background: ${(props) => (props.select ? '#fb8e5b' : '#fffaf1')};
  color: ${(props) => (props.select ? '#fffaf1' : '#fb8e5b')}; */
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
  const [select, setSelect] = useState('컬러');

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
                  {index}
                </Index>
              );
            })}
        </IndexList>
        <ItemPage>
          {items &&
            items.map((item) => {
              return <ItemBox key={item.name} item={item}></ItemBox>;
            })}
        </ItemPage>
      </Wrapper>
    </>
  );
};
export default ItemContainer;
