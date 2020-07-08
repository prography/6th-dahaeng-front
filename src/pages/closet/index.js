import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import ItemContainer from '../../components/ItemContainer';
import { setItems } from '../../store/user';
import Modal from '../../components/Modal';
import Room from '../main/Room';
import ItemBox from './ItemBox';

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

const SetButton = styled.button`
  width: 86px;
  height: 39px;
  background: #fb8e5b;
  border-radius: 4px;
  color: white;
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
  const hasItems = useSelector((state) => state.user.hasItems);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const setModal = (id) => {
    setOpenModal(!openModal);
  };

  const [applyItems, setApplyItems] = useState(hasItems);
  const applyItem = (applyItem) => {
    setApplyItems({
      color: hasItems.filter((item) => item.id === applyItem.id)[0].color,
    });
  };

  const setItem = (item) => {
    dispatch(setItems(item.id));
    setModal();
    //refresh item list and coin and jorang view
  };

  const indexs = ['color', 'background', 'item'];
  const [select, setSelect] = useState('color');
  const selectCategory = (index) => {
    setSelect(index);
  };
  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);

  //TODO: Room : Itemcontainer  = 1 : 1
  return (
    <>
      <Header></Header>
      <ContentBox>
        <SetButton onClick={setModal}>{'착용하기'}</SetButton>
        <Room history={history} applyItems={applyItems}></Room>
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
          indexs={indexs}
          select={select}
          setModal={setModal}
          selectCategory={selectCategory}
          itemBoxs={
            hasItems &&
            hasItems
              .filter((item) => item.category === select)
              .filter((item) => item.has === true)
              .map((item) => {
                return (
                  <ItemBox
                    key={item.name}
                    item={item}
                    applyItem={applyItem}
                  ></ItemBox>
                );
              })
          }
        ></ItemContainer>
      </ContentBox>
    </>
  );
};

export default Closet;
