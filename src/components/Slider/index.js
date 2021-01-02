import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import InfoBox from './info.js';
import './slider.css';
import { getRecords } from '../../store/box.js';
import DailyRecord from './dailyrecord.js';
import MenuIcon from '../../assets/icon/MenuIcon.js';

const Spacer = styled.div`
  height: 10rem;
`;

const DrawerIcon = styled.div`
  position: fixed;
  left: 12px;
  top: 18px;
  width: 28px;
`;

const SliderButton = styled.button`
  width: 100%;
  padding: 8px 0;
  font-size: 16px;
  cursor: pointer;
  text-align: left;
  transition: 0.125s ease-in-out;

  &:hover {
    background-color: #fafafa;
  }
`;

const ListBox = styled.div`
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SliderWrapper = styled.div`
  background-color: #fff;
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const SliderCloseButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 24px;
`;

const SliderListElement = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 6px 24px;
  text-align: left;
`;

const Slider = ({ history }) => {
  const [sliderOpenState, setSliderOpenState] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  //TODO: ??? token vs user

  useEffect(() => {
    if (sliderOpenState) {
      dispatch(getRecords());
    }
  }, [sliderOpenState, dispatch]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown'
      // && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setSliderOpenState(open);
  };

  function navigateToBoxPage() {
    history.push('/box');
  }

  function navigateToMarketPage() {
    history.push('/market');
  }

  function navigateToDonationPage() {
    history.push('/donation');
  }

  function navigateToReportPage() {
    history.push('/feedback');
  }

  const SliderList = () => (
    <SliderWrapper id="sliderWrapper">
      <SliderCloseButton
        onClick={() => {
          setSliderOpenState(false);
        }}
      >
        <img
          src={require('../../assets/icon/CloseButton.svg')}
          alt="chevron-right"
        />
      </SliderCloseButton>

      <InfoBox toggleDrawer={toggleDrawer} history={history} />
      {/* 행복 기록시 입력한 카테고리 떠야 함
      행복 기록 안 한 날 표시 어떻게 할지*/}
      <DailyRecord />
      <ListBox>
        <SliderListElement onClick={navigateToBoxPage}>
          <SliderButton>행복보관함</SliderButton>
          <span>
            <img
              src={require('../../assets/icon/ChevronRight.svg')}
              alt="chevron-right"
            />
          </span>
        </SliderListElement>
        <SliderListElement onClick={navigateToMarketPage}>
          <SliderButton>조랭마켓</SliderButton>
          <span>
            <img
              src={require('../../assets/icon/ChevronRight.svg')}
              alt="chevron-right"
            />
          </span>
        </SliderListElement>
        <SliderListElement onClick={navigateToDonationPage}>
          <SliderButton>소액기부</SliderButton>
          <span>
            <img
              src={require('../../assets/icon/ChevronRight.svg')}
              alt="chevron-right"
            />
          </span>
        </SliderListElement>
        <SliderListElement onClick={navigateToReportPage}>
          <SliderButton>의견 보내기</SliderButton>
          <span>
            <img
              src={require('../../assets/icon/ChevronRight.svg')}
              alt="chevron-right"
            />
          </span>
        </SliderListElement>
        {/* <LogoutBtn onClick={() => Trylogout()}>로그아웃</LogoutBtn> */}
      </ListBox>
    </SliderWrapper>
  );

  return (
    <>
      <DrawerIcon onClick={() => setSliderOpenState(true)}>
        <MenuIcon color={`#${user.main_color}`} />
      </DrawerIcon>
      <div>
        {sliderOpenState && <SliderList />}
        <Spacer />
      </div>
    </>
  );
};

export default Slider;
