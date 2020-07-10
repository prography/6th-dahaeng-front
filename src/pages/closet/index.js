import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import ItemContainer from '../../components/ItemContainer';
import { setItems } from '../../store/user';
import Modal from '../../components/Modal';
import Room from '../main/Room';
import ItemBox from './ItemBox';
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

const SetButton = styled.button`
  width: 64px;
  height: 30px;
  float: right;
  background: var(--primary-color);
  border-radius: 4px;
  color: #ffffff;
`;

const RoomWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  margin-top: 2rem;
  margin-bottom: 2rem;
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

const Closet = ({ history }) => {
  const hasItems = useSelector((state) => state.user.hasItems);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const setModal = (id) => {
    setOpenModal(!openModal);
  };

  const [applyItems, setApplyItems] = useState({
    color: hasItems.filter(
      (item) => item.item_type === 'jorang_color' && item.is_worn === true,
    )[0].item_detail,

    // background: hasItems.filter(
    //   (item) => item.category === 'color' && item.apply === true,
    // ),
    // item: hasItems.filter(
    //   (item) => item.category === 'color' && item.apply === true,
    // ),
  });
  const applyItem = (applyItem) => {
    if (applyItem.item_type === 'jorang_color') {
      setApplyItems({
        color: applyItem.item_detail,
      });
    } else {
      // applyItems.append(applyItem);
      // setApplyItems(applyItems);
    }
  };

  const setItem = (item) => {
    dispatch(setItems(item.id));
    setModal();
    //refresh item list and coin and jorang view
  };

  const indexs = ['jorang_color', 'background', 'item'];
  const [select, setSelect] = useState('jorang_color');
  const selectCategory = (index) => {
    setSelect(index);
  };
  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);

  //TODO: Room : Itemcontainer  = 1 : 1
  return (
    <>
      <Header />

      <Responsive>
        <SubTitle title={'조랭 옷장'} />
        <SetButton onClick={setModal}>{'착용하기'}</SetButton>
        <RoomWrapper>
          <Room history={history} applyItems={applyItems} />
        </RoomWrapper>
        <ContentBox>
          <Modal
            className="popup"
            openModal={openModal}
            setModal={setModal}
            title={<ModalTitle>{'현재 모습을 적용하시겠어요?'}</ModalTitle>}
            button={
              <ModalButtonField>
                <ModalButtonLeft onClick={setItem}>{'확인'}</ModalButtonLeft>
                <ModalButtonRight onClick={setModal}>{'취소'}</ModalButtonRight>
              </ModalButtonField>
            }
          ></Modal>
          <ItemContainer
            history={history}
            status="closet"
            indexs={indexs}
            select={select}
            setModal={setModal}
            selectCategory={selectCategory}
            itemBoxs={
              hasItems &&
              hasItems
                .filter((item) => item.item_type === select)
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
      </Responsive>
    </>
  );
};

export default Closet;
