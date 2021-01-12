import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ItemContainer from '../../components/ItemContainer';
import { getItems, buyItems, getUser } from '../../store/user';
import Modal from '../../components/Modal';
import Responsive from '../../components/common/Responsive';
import SubTitle from '../../components/SubTitle';
import ItemBox from './ItemBox';
import Slider from '../../components/Slider';
import Room from '../main/Room';

const ContentBox = styled.div`
  max-width: 1024px;
  max-height: 709px;
  padding: 0rem 1rem;
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
  color: white;
`;

const ModalButtonRight = styled.button`
  box-sizing: border-box;
  flex: 1;
  margin-left: 0.5rem;
  border: none;
  height: 30px;
`;

const ModalText = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
`;

const CoinBox = styled.div`
  float: right;
  line-height: 34px;
  color: #212121;
<<<<<<< HEAD
  padding: 4rem 1rem 1rem 1rem;
=======
  padding-top: 4rem;
>>>>>>> a133b9dd0adaa0b5dae7e508659cd944653762e4
`;

const Market = ({ history }) => {
  const allItems = useSelector((state) => state.user.allItems);
  const hasItems = useSelector((state) => state.user.user.jorang_items);
  const user = useSelector((state) => state.user.user);
  const colors = useSelector((state) => state.user.colors);
  const buy_success = useSelector((state) => state.user.buy_success);
  const buyError = useSelector((state) => state.user.buyError);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [openBuySuccessModal, setOpenBuySuccessModal] = useState(false);
  const [openBuyFailModal, setOpenBuyFailModal] = useState(false);

  const [wantItem, setWantItem] = useState(null);

  const setModal = (item) => {
    setOpenModal(!openModal);
    setWantItem(item);
  };

  const setBuySuccessModal = (item) => {
    if (openModal) {
      setModal();
      setOpenBuySuccessModal(!openBuySuccessModal);
    } else {
      setOpenBuySuccessModal(!openBuySuccessModal);
    }
  };

  const setBuyFailModal = (item) => {
    if (openModal) {
      setModal();
      setOpenBuyFailModal(!openBuyFailModal);
    } else {
      setOpenBuyFailModal(!openBuyFailModal);
    }
  };

  //todo: 코인 충전 기능
  const setCoinChargeModal = (e) => {
    alert(
      '조랭이가 열심히 준비 중입니다!\n그 전까진 열심히 행복을 기록해주세요',
    );
  };

  const buyItem = (item) => {
    dispatch(buyItems(item));
    setModal();
    //refresh item list and coin
    //구매 성공 -> 구매 완료 팝업/ 구매 실패 -> 구매 실패 팝업
    // if (buy_success) {
    //   setBuySuccessModal();
    // } else {
    //   setBuyFailModal();
    // }
    //setBuyFailModal();
  };

  useEffect(() => {
    if (!buy_success && buyError.includes('코인이 부족합니다.')) {
      setBuyFailModal();
    } else if (buy_success) {
      setBuySuccessModal();
    }
  }, [buy_success, buyError]);

  const indexs = ['jorang_color', 'background', 'etc'];
  const [select, setSelect] = useState('jorang_color');
  const selectCategory = (index) => {
    setSelect(index);
  };

  useEffect(() => {
    dispatch(getUser(localStorage.getItem('profile')));
    dispatch(getItems());
  }, [dispatch, buy_success]);

  function navigateMarketPage() {
    history.push('/closet');
  }

  return (
    <>
      <Responsive style={{ paddingTop: '4vh' }}>
        <SubTitle title={'조랭 마켓'} />
        <Slider history={history} />
        <CoinBox>{`${user.user_coin} 코인`}</CoinBox>
        <Room closet={false} hasItems={hasItems}></Room>
        <ContentBox>
          <Modal
            className="popup"
            openModal={openModal}
            setModal={setModal}
            title={
              <ModalTitle>{`'${
                wantItem && wantItem.item_name
              }'을 구매하시겠어요?`}</ModalTitle>
            }
            content={
              <>
                <ModalText>{`아이템 : ${
                  wantItem && wantItem.item_price
                } 코인`}</ModalText>
                <ModalText>{`나의 행복코인 : ${
                  user && user.user_coin
                } 코인`}</ModalText>
              </>
            }
            button={
              <ModalButtonField>
                <ModalButtonLeft
                  style={{ background: `#${colors && colors[0]}` }}
                  onClick={() => buyItem(wantItem && wantItem.id)}
                >
                  {'확인'}
                </ModalButtonLeft>
                <ModalButtonRight
                  style={{
                    background: `#${colors && colors[2]}`,
                    color: `#${colors && colors[0]}`,
                  }}
                  onClick={setModal}
                >
                  {'취소'}
                </ModalButtonRight>
              </ModalButtonField>
            }
          ></Modal>

          {/* 구매성공팝업 */}
          <Modal
            className="popup"
            openModal={openBuySuccessModal}
            setModal={setBuySuccessModal}
            title={
              <ModalTitle>{`성공적으로 구매가 완료되었습니다!`}</ModalTitle>
            }
            content={
              <>
                <ModalText>{`조랭옷장에서 착용할 수 있습니다 :)`}</ModalText>
              </>
            }
            button={
              <ModalButtonField>
                <ModalButtonLeft
                  onClick={setBuySuccessModal}
                  style={{ background: `#${colors && colors[0]}` }}
                >
                  {'확인'}
                </ModalButtonLeft>
                <ModalButtonRight
                  onClick={navigateMarketPage}
                  style={{
                    background: `#${colors && colors[2]}`,
                    color: `#${colors && colors[0]}`,
                  }}
                >
                  {'적용하러가기'}
                </ModalButtonRight>
              </ModalButtonField>
            }
          ></Modal>

          {/* 구매실패팝업 */}
          <Modal
            className="popup"
            openModal={openBuyFailModal}
            setModal={setBuyFailModal}
            title={<ModalTitle>{`구매에 실패했습니다!`}</ModalTitle>}
            content={
              <>
                <ModalText>{`행복코인이 충분한지 확인해주세요 :(`}</ModalText>
              </>
            }
            button={
              <ModalButtonField>
                <ModalButtonLeft
                  onClick={setBuyFailModal}
                  style={{ background: `#${colors && colors[0]}` }}
                >
                  {'확인'}
                </ModalButtonLeft>
                <ModalButtonRight
                  onClick={setCoinChargeModal}
                  style={{
                    background: `#${colors && colors[2]}`,
                    color: `#${colors && colors[0]}`,
                  }}
                >
                  {'충전하기'}
                </ModalButtonRight>
              </ModalButtonField>
            }
          ></Modal>

          <ItemContainer
            status="market"
            indexs={indexs}
            select={select}
            setModal={setModal}
            selectCategory={selectCategory}
            itemBoxs={
              allItems &&
              allItems.not_had_items &&
              allItems.not_had_items
                .filter((item) => item.item_type === select)
                .map((item) => {
                  return (
                    <ItemBox
                      key={item.name}
                      item_has={false}
                      item={item}
                      setModal={setModal}
                    ></ItemBox>
                  );
                })
                .concat(
                  allItems &&
                    allItems.had_items
                      .filter((item) => item.item_type === select)
                      .map((item) => {
                        return (
                          <ItemBox
                            key={item.name}
                            item_has={true}
                            item={item}
                            setModal={setModal}
                          ></ItemBox>
                        );
                      }),
                )
            }
          ></ItemContainer>
        </ContentBox>
      </Responsive>
    </>
  );
};

export default Market;
