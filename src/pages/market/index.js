import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import ItemContainer from '../../components/ItemContainer';
import { getItems, buyItems } from '../../store/user';
import Modal from '../../components/Modal';
import Responsive from '../../components/common/Responsive';
import SubTitle from '../../components/SubTitle';

const ContentBox = styled.div`
  max-width: 1024px;
  max-height: 709px;
  padding-top: 1rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: center;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ModalButtonField = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
`;

const ModalButtonLeft = styled.button`
  box-sizing: border-box;
  flex: 1;
  margin-right: 0.5rem;
  border: none;
  height: 30px;
  border-radius: var(--small-border-radius);
  background: var(--primary-color);
  color: #ffffff;
`;

const ModalButtonRight = styled.button`
  box-sizing: border-box;
  flex: 1;
  margin-left: 0.5rem;
  border: none;
  height: 30px;
  border-radius: 4px;
  background: var(--light-background);
  color: var(--primary-color);
`;

const ModalText = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
  color: var(--text-third);
`;

const Market = () => {
  const items = useSelector((state) => state.user.items);
  const user = useSelector((state) => state.user.user);
  const indexs = ['color', 'background', 'item'];
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  //나중에 item id값으로 바꿔야할듯?
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const setModal = (item) => {
    setOpenModal(!openModal);
    setItemName(item.name);
    setItemPrice(item.price);
  };

  const buyItem = (item) => {
    dispatch(buyItems(item));
    setModal();
    //refresh item list and coin
  };

  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);

  return (
    <>
      <Header />

      <Responsive>
        <SubTitle title={'조랭코인샵'} />
        <ContentBox>
          <Modal
            className="popup"
            openModal={openModal}
            setModal={setModal}
            title={<ModalTitle>{`'${itemName}'을 구매하시겠어요?`}</ModalTitle>}
            content={
              <>
                <ModalText>{`아이템 : ${itemPrice} 코인`}</ModalText>
                <ModalText>{`나의 행복코인 : ${user.coin} 코인`}</ModalText>
              </>
            }
            button={
              <ModalButtonField>
                <ModalButtonLeft onClick={buyItem}>{'확인'}</ModalButtonLeft>
                <ModalButtonRight onClick={setModal}>{'취소'}</ModalButtonRight>
              </ModalButtonField>
            }
          ></Modal>
          <ItemContainer
            items={items}
            indexs={indexs}
            setModal={setModal}
          ></ItemContainer>
        </ContentBox>
      </Responsive>
    </>
  );
};

export default Market;
