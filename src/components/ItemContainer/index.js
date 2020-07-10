import React, { useState } from 'react';
import styled from 'styled-components';
import waitJoraeng from 'assets/joraeng/wait-joraeng.png';
import noItemJoraeng from 'assets/joraeng/no-item-joraeng.png';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  max-height: 709px;
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

const ShopBox = styled.button`
  flex: none;
  margin-right: 8px;
  line-height: 34px;
  color: var(--text-second);
`;

const ItemPage = styled.div`
  width: 100%;
  height: ${(props) => (props.status === 'market' ? '640px' : '340px')};
  /* height: 640px; */
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
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;

const JoraengImg = styled.img`
  width: 150px;
  margin: 0 auto;
`;

const WaitComment = styled.div`
  font-size: 14px;
  color: var(--text-second);
  padding: 1rem;
`;

const ItemContainer = ({
  history,
  status,
  indexs,
  itemBoxs,
  selectCategory,
  select,
}) => {
  const user = useSelector((state) => state.user.user);

  function navigateMarketPage() {
    history.push('/market');
  }

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
                    {index === 'jorang_color'
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
          {status === 'market' ? (
            <CoinBox>{`${user.coin} 코인`}</CoinBox>
          ) : (
            <ShopBox onClick={navigateMarketPage}>{`조랭마켓 >`}</ShopBox>
          )}
        </ButtonWrapper>

        {/* item 없을 때 화면 수정해야 함 */}
        <ItemPage status={status}>
          {select === 'jorang_color' ? (
            itemBoxs
          ) : (
            <ImgBox>
              {status === 'market' ? (
                <>
                  <WaitComment>아직 준비 중입니다!</WaitComment>
                  <JoraengImg src={waitJoraeng} alt="" />
                </>
              ) : (
                <>
                  <WaitComment>아이템이 하나도 없어요...</WaitComment>
                  <JoraengImg src={noItemJoraeng} alt="" />
                </>
              )}
            </ImgBox>
          )}
        </ItemPage>
      </Wrapper>
    </>
  );
};
export default ItemContainer;
