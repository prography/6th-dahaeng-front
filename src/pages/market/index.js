import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import ItemContainer from '../../components/ItemContainer';
import { getItems, buyItems } from '../../store/user';
import Modal from '../../components/Modal';

const ContentBox = styled.div`
  max-width: 1024px;
  max-height: 709px;
  padding-top: 8rem;
  margin: 0 auto;
  text-align: center;
`;

const ShopTitle = styled.div`
  font-size: 24px;
`;

const ModalContent = styled.div`
  font-size: 18px;
`;

const ModalButtonField = styled.div`
  display: flex;
  flex-direction: row;
`;

const ModalButtonLeft = styled.div`
  width: 123px;
  height: 29px;
  border-radius: 4px;
  background: #fb8e5b;
  color: white;
`;

const ModalButtonRight = styled.div`
  width: 123px;
  height: 29px;
  border-radius: 4px;
  background: #fffaf1;
  color: #fb8e5b;
`;

const Market = () => {
  const items = useSelector((state) => state.user.items);
  const indexs = ['color', 'background', 'item'];
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  //나중에 item id값으로 바꿔야할듯?
  const [itemName, setItemName] = useState('');

  const setModal = (name) => {
    setOpenModal(!openModal);
    setItemName(name);
  };

  const buyItem = (item) => {
    dispatch(buyItems(item));
    setModal();
    //refresh item list?
  };

  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);

  return (
    <>
      <Header></Header>
      <ContentBox>
        <Modal
          className="update"
          openModal={openModal}
          setModal={setModal}
          content={
            <ModalContent>{`'${itemName}'을 구매하시겠어요?`}</ModalContent>
          }
          button={
            <ModalButtonField>
              <ModalButtonLeft onClick={buyItem}>{'확인'}</ModalButtonLeft>
              <ModalButtonRight onClick={setModal}>{'취소'}</ModalButtonRight>
            </ModalButtonField>
          }
        ></Modal>
        <ShopTitle>{'조랭 코인샵'}</ShopTitle>
        <ItemContainer
          items={items}
          indexs={indexs}
          setModal={setModal}
        ></ItemContainer>
      </ContentBox>
    </>
  );
};

export default Market;
