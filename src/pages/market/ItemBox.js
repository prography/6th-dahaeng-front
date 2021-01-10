import React from 'react';
import styled from 'styled-components';
import JoraengColor from '../../components/ItemContainer/Joraengcolor';

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: var(--small-border-radius);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  /* width: 228px; */
  flex: 1 1 calc(33.3333% - 40px);
  min-width: 210px;
  max-width: calc(33.3333% - 40px);
  height: 260px;
  margin: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  @media (min-width: 612px) and (max-width: 1024px) {
    max-width: calc(50% - 40px);
  }
  @media (max-width: 612px) {
    max-width: inherit;
  }

  display: flex;
  flex-direction: column;

  cursor: ${(props) => (props.className === 'hasItem' ? '' : 'pointer')};
  transition: 0.125s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.className === 'hasItem' ? '' : 'rgba(0, 0, 0, 0.2)'};
  }
`;

const ItemImageBox = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemInfoBox = styled.div`
  display: block;
  width: 100%;
  max-height: 100px;
`;

const ItemName = styled.div`
  font-size: 18px;
  padding: 0.5rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemHas = styled.div`
  font-size: 8px;
  border-radius: 15px;
  border: 1px solid var(--text-red);
  color: var(--text-red);
  width: 95px;
  height: 15px;
  line-height: 10px;
  padding: 2px;
  margin-left: 0.5rem;
`;

const ItemPrice = styled.div`
  flex: 1;
  font-size: 14px;
  padding: 0.5rem 1rem;
  text-align: left;
`;

const ItemBox = ({ item, item_has, setModal, item_type }) => {
  return (
    <>
      {item_has ? (
        <Wrapper className="hasItem">
          <ItemImageBox>
            <JoraengColor color={`#${item.item_detail}`}></JoraengColor>
          </ItemImageBox>

          <ItemInfoBox>
            <ItemName>
              {item.item_name}
              <ItemHas>{'이미 가지고 있어요!'}</ItemHas>
            </ItemName>
            <ItemPrice>{`${item.item_price} 코인`}</ItemPrice>
          </ItemInfoBox>
        </Wrapper>
      ) : (
        <Wrapper onClick={() => setModal(item)}>
          <ItemImageBox>
            <JoraengColor color={`#${item.item_detail}`}></JoraengColor>
          </ItemImageBox>
          <ItemInfoBox>
            <ItemName>{item.item_name}</ItemName>
            <ItemPrice>{`${item.item_price} 코인`}</ItemPrice>
          </ItemInfoBox>
        </Wrapper>
      )}
    </>
  );
};
export default ItemBox;
