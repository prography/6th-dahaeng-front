import React from 'react';
import styled from 'styled-components';
import noItemJoraeng from 'assets/joraeng/no-item.png';
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
  border: 2px solid #212121;
  border-bottom: none;
  z-index: 3;
  position: relative;
`;

const SelectIndex = styled.div`
  /* width: 78px; */
  width: 54px;
  height: 39px;
  margin-left: ${(props) => {
    if (props.index === 'jorang_color') {
      return '10px';
    } else if (props.index === 'background') {
      return '76px';
    } else {
      return '142px';
    }
  }};
  position: fixed;
  background-color: #ffffff;
  z-index: 1;
`;

const ShopBox = styled.button`
  flex: none;
  margin-right: 8px;
  line-height: 34px;
  color: #212121;
`;

const ItemPage = styled.div`
  width: 100%;
  /* height: ${(props) => (props.status === 'market' ? '640px' : '340px')}; */
  height: calc(100vh - 265px - 128px);
  /* background: var(--light-background); */
  border-radius: 4px;
  border: 2px solid #212121;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
  overflow-y: auto;

  @media screen and (max-width: 360px) {
    padding: 10px;
  }
`;

const JoraengImg = styled.img`
  height: 110px;
  margin: 0 auto;
  margin-top: 6vh;
`;

const ItemContainer = ({
  history,
  status,
  indexs,
  itemBoxs,
  selectCategory,
  select,
}) => {
  const colors = useSelector((state) => state.user.colors);

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
                  <>
                    <Index
                      key={index}
                      onClick={() => selectCategory(index)}
                      style={{
                        color:
                          select === index
                            ? `#${colors && colors[0]}`
                            : `#${colors && colors[2]}`,
                      }}
                    >
                      {index === 'jorang_color'
                        ? '컬러'
                        : index === 'background'
                        ? '배경'
                        : index === 'etc'
                        ? '기타'
                        : null}
                    </Index>
                    {select === index ? <SelectIndex index={index} /> : null}
                  </>
                );
              })}
          </IndexList>
          {status === 'market' ? null : (
            <ShopBox onClick={navigateMarketPage}>{`조랭마켓 >`}</ShopBox>
          )}
        </ButtonWrapper>

        {/* item 없을 때 화면 수정해야 함 */}
        <ItemPage status={status}>
          {!(itemBoxs?.length === 0) ? (
            itemBoxs
          ) : (
            <JoraengImg src={noItemJoraeng} alt="" />
          )}
        </ItemPage>
      </Wrapper>
    </>
  );
};
export default ItemContainer;
