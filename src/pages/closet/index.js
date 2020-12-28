import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import ItemContainer from '../../components/ItemContainer';
import { setItems, getCloset } from '../../store/user';
import Modal from '../../components/Modal';
import Room from '../main/Room';
import ItemBox from './ItemBox';
import Responsive from '../../components/common/Responsive';
import SubTitle from '../../components/SubTitle';
import Slider from '../../components/Slider';
import MainJoraeng from '../../components/Joraeng/MainJoraeng';
import ground from 'assets/main/ground.png';

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

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`;
const Character = styled.div`
  min-width: 114px;
  width: 30%;
  z-index: 2;
  margin: 0 auto;
  bottom: -20px;
  position: relative;
`;
const Background = styled.div`
  z-index: 1;
  width: 40%;
  margin: 0 auto;
`;
const BackgroundImg = styled.img`
  width: 100%;
`;

const Closet = ({ history }) => {
  const hasItems = useSelector((state) => state.user.hasItems);
  const user = useSelector((state) => state.user.user);
  const colors = useSelector((state) => state.user.colors);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const setModal = (id) => {
    setOpenModal(!openModal);
  };

  const [applyItems, setApplyItems] = useState({
    // color: `#${
    //   hasItems &&
    //   hasItems.filter(
    //     (item) =>
    //       item.item.item_type === 'jorang_color' && item.is_worn === true,
    //   )[0].item.item_detail
    // }`,
    color: `#${user.jorang_color}`,
    id: -1,

    // background: hasItems.filter(
    //   (item) => item.category === 'color' && item.apply === true,
    // ),
    // item: hasItems.filter(
    //   (item) => item.category === 'color' && item.apply === true,
    // ),
  });
  const applyItem = (applyItem) => {
    if (applyItem.item.item_type === 'jorang_color') {
      setApplyItems({
        color: `#${applyItem.item.item_detail}`,
        id: applyItem.item.id,
      });
    } else {
      // applyItems.append(applyItem);
      // setApplyItems(applyItems);
    }
  };

  const setItem = (item) => {
    dispatch(setItems(item));
    setModal();
    //refresh item list and coin and jorang view
  };

  const indexs = ['jorang_color', 'background', 'item'];
  const [select, setSelect] = useState('jorang_color');
  const selectCategory = (index) => {
    setSelect(index);
  };
  useEffect(() => {
    dispatch(getCloset());
  }, [dispatch]);

  return (
    <>
      <Slider history={history}></Slider>
      <Responsive>
        <SubTitle title={'조랭 옷장'} />
        <SetButton onClick={setModal}>{'착용하기'}</SetButton>
        <Wrapper>
          <Character>
            {/*TODO: Dynamic color binding*/}
            <MainJoraeng
              age={user.jorang_status}
              mainColor={`#${colors && colors[0]}`}
              thirdColor={`#${colors && colors[2]}`}
            />
          </Character>
          <Background>
            <BackgroundImg src={ground} alt=""></BackgroundImg>
          </Background>
        </Wrapper>
        <ContentBox>
          <Modal
            className="popup"
            openModal={openModal}
            setModal={setModal}
            title={<ModalTitle>{'현재 모습을 적용하시겠어요?'}</ModalTitle>}
            button={
              <ModalButtonField>
                <ModalButtonLeft onClick={() => setItem(applyItems.id)}>
                  {'확인'}
                </ModalButtonLeft>
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
                .filter((item) => item.item.item_type === select)
                .map((item) => {
                  return (
                    <ItemBox
                      key={item.item.item_name}
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
