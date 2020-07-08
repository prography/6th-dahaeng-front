import React, { useState } from 'react';
import styled from 'styled-components';
import ItemBox from './ItemBox';
import waitjoraeng from 'assets/joraeng/wait-joraeng.png';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  max-height: ${(props) => (props.status === 'market' ? '709px' : '50%')};
  /* display: flex;
  flex-direction: column; */
  height: 100%;
`;

const ButtonWrapper = styled.div`
  height: 34px;
  display: flex;
  flex-direction: row;
`;

const IndexList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Index = styled.div`
  /* width: 78px; */
  min-width: 58px;
  line-height: 34px;
  border-radius: 4px 4px 0 0;
  margin-left: 8px;
  text-align: center;

  cursor: pointer;
`;

const CoinBox = styled.div`
  flex: none;
  margin-right: 8px;
  line-height: 34px;
  color: var(--text-second);
`;

const ItemPage = styled.div`
  width: 100%;
  /* height: ${(props) =>
    props.status === 'market' ? '673px' : 'calc(100%-34px-20px)'}; */
  height: 640px;
  background: var(--light-background);
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
  overflow-y: auto;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const ImgBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
`;

const JoraengImg = styled.img`
  width: 100%;
`;

const WaitComment = styled.div`
  font-size: 14px;
  color: var(--text-second);
  text-align: center;
  padding: 1rem;
`;

const ItemContainer = ({ indexs, itemBoxs, selectCategory, select }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Wrapper>
        <ButtonWrapper>
          <IndexList>
            {indexs &&
              indexs.map((index) => {
                return (
                  <Index
                    key={index}
                    onClick={() => selectCategory(index)}
                    style={{
                      background:
                        select === index
                          ? 'var(--primary-color)'
                          : 'var(--light-background)',
                      color:
                        select === index ? '#ffffff' : 'var(--primary-color)',
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
          <CoinBox>{`${user.coin} 코인`}</CoinBox>
        </ButtonWrapper>
        <ItemPage>
          {select === 'color' ? (
            itemBoxs
          ) : (
            <ImgBox>
              <WaitComment>아직 준비 중입니다!</WaitComment>
              <JoraengImg src={waitjoraeng} alt="" />
            </ImgBox>
          )}
        </ItemPage>
      </Wrapper>
    </>
  );
};
export default ItemContainer;
