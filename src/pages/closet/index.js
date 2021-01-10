import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ItemContainer from '../../components/ItemContainer';
import { setItems, getCloset } from '../../store/user';
import Modal from '../../components/Modal';
import Room from '../main/Room';
import ItemBox from './ItemBox';
import Responsive from '../../components/common/Responsive';
import SubTitle from '../../components/SubTitle';
import Slider from '../../components/Slider';

const ContentBox = styled.div`
  max-width: 1024px;
  max-height: 709px;
  padding-top: 1rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: center;
`;

const ApplyBox = styled.div`
  padding-right: 1rem;
  line-height: 34px;
  color: var(--text-second);
  padding-top: 4rem;
`;
const ApplyImg = styled.img`
  width: 5%;
  float: right;
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
  const colors = useSelector((state) => state.user.colors);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const setModal = (id) => {
    setOpenModal(!openModal);
  };
  // {
  //   color: `#${user.jorang_color}`,
  //   id: -1,
  // }
  const [applyItems, setApplyItems] = useState([]);
  const applyItem = (applyItem) => {
    setApplyItems({
      item_type: applyItem.item.item_type,
      item_detail: applyItem.item.item_detail,
      id: applyItem.item.id,
    });
  };

  const setItem = (item) => {
    dispatch(setItems(item));
    setModal();
    //refresh item list and coin and jorang view
  };

  const indexs = ['jorang_color', 'background', 'etc'];
  const [select, setSelect] = useState('jorang_color');
  const selectCategory = (index) => {
    setSelect(index);
  };
  useEffect(() => {
    dispatch(getCloset());
  }, [dispatch]);

  return (
    <>
      <Responsive>
        <SubTitle title={'조랭 옷장'} />
        <Slider history={history} />
        <ApplyBox onClick={setModal}>
          <ApplyImg src={require(`../../assets/icon/save-icon.png`)} alt="" />
        </ApplyBox>
        <Room closet={true} hasItems={hasItems} applyItems={applyItems}></Room>
        <ContentBox>
          <Modal
            className="popup"
            openModal={openModal}
            setModal={setModal}
            title={<ModalTitle>{'현재 모습을 적용하시겠어요?'}</ModalTitle>}
            button={
              <ModalButtonField>
                <ModalButtonLeft
                  onClick={() => setItem(applyItems.id)}
                  style={{ background: `#${colors && colors[0]}` }}
                >
                  {'확인'}
                </ModalButtonLeft>
                <ModalButtonRight
                  onClick={setModal}
                  style={{
                    background: `#${colors && colors[2]}`,
                    color: `#${colors && colors[0]}`,
                  }}
                >
                  {'취소'}
                </ModalButtonRight>
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
