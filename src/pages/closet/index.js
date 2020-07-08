import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import ItemContainer from '../../components/ItemContainer';
import { setItems } from '../../store/user';
import Modal from '../../components/Modal';
import Room from '../main/Room';

const ContentBox = styled.div`
  max-width: 1024px;
  max-height: calc(100% - 4rem);
  padding-top: 8rem;
  margin: 0 auto;
  text-align: center;
`;

const ClosetTitle = styled.div`
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

const Closet = ({ history }) => {
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

  const setItem = (item) => {
    dispatch(setItems(item));
    setModal();
    //refresh item list and coin
  };

  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);

  //TODO: Room : Itemcontainer  = 1 : 1
  return (
    <>
      <Header></Header>
      <ContentBox>
        <Room history={history}></Room>
        <Modal
          className="update"
          openModal={openModal}
          setModal={setModal}
          content={<ModalContent>{'현재 모습을 저장할까요?'}</ModalContent>}
          button={
            <ModalButtonField>
              <ModalButtonLeft onClick={setItem}>{'확인'}</ModalButtonLeft>
              <ModalButtonRight onClick={setModal}>{'취소'}</ModalButtonRight>
            </ModalButtonField>
          }
        ></Modal>
        <ClosetTitle>{'조랭옷장'}</ClosetTitle>
        <ItemContainer
          items={items}
          indexs={indexs}
          setModal={setModal}
          status={'closet'}
        ></ItemContainer>
      </ContentBox>
    </>
  );
};

export default Closet;
