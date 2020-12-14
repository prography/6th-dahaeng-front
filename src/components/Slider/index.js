import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import { logout } from 'store/auth';
import { useDispatch, useSelector } from 'react-redux';
import InfoBox from './info.js';

import menuIcon from '../../assets/icon/menu_icon.png';
import './slider.css';
import { getRecords } from '../../store/box.js';
import DailyRecord from './dailyrecord.js';
import { Link } from 'react-router-dom';
import MenuIcon from '../../assets/icon/MenuIcon.js';

const Spacer = styled.div`
  height: 10rem;
`;

const DrawerOpenBtn = styled.button`
  position: fixed;
  left: 0px;
  top: 12px;
  width: 40px;
  height: 40px;
  padding: 3px 8px 0 0;
  border: none;
  border-radius: 0 50% 50% 0;
  z-index: 10;
  background-color: var(--primary-color);
`;
const DrawerIcon = styled.div`
  width: 18px;
`;

// 성환오빠의 슬라이더 버튼 꼼수 쓰기 시도
const DrawerCloseBtn = styled.button`
  position: absolute;
  right: -40px;
  top: 12px;
  width: 40px;
  height: 40px;
  border-radius: 0 50% 50% 0;
  padding: 3px 8px 0 0;
  border: none;
  background-color: var(--primary-color);
`;

const LogoutBtn = styled.button`
  font-size: 14px;
  text-align: center;
  width: 90%;
  color: var(--text-second);
  margin: 1rem;
  padding-top: 2rem;
  border: none;
  text-decoration: none;
`;

const SliderButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
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

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
});

const Slider = ({ history }) => {
  const [open, setOpen] = useState(false);
  const anchor = 'left';
  const classes = useStyles();

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  //TODO: ??? token vs user

  useEffect(() => {
    if (open) {
      dispatch(getRecords());
    }
  }, [open, dispatch]);

  // const records = useSelector((state) => state.box.records);

  const Trylogout = () => {
    dispatch(logout());
    history.push('/login');

    localStorage.setItem('accessToken', '');
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown'
      // && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  function navigateBoxPage() {
    history.push('/box');
  }

  function navigateMarketPage() {
    history.push('/market');
  }

  function navigateDonationPage() {
    history.push('/donation');
  }

  function navigateReportPage() {
    history.push('/feedback');
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'left',
      })}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <InfoBox toggleDrawer={toggleDrawer} history={history} />
      {/* 행복 기록시 입력한 카테고리 떠야 함 
      행복 기록 안 한 날 표시 어떻게 할지*/}
      <DailyRecord />
      <ListBox>
        <List>
          <SliderButton onClick={navigateBoxPage}>행복보관함</SliderButton>
          <SliderButton onClick={navigateMarketPage}>조랭마켓</SliderButton>
          <SliderButton onClick={navigateDonationPage}>소액기부</SliderButton>
          <SliderButton onClick={navigateReportPage}>의견 보내기</SliderButton>
        </List>
        {/* <LogoutBtn onClick={() => Trylogout()}>로그아웃</LogoutBtn> */}
      </ListBox>
    </div>
  );

  return (
    <>
      <DrawerOpenBtn onClick={() => setOpen(true)}>
        <DrawerIcon>
          <MenuIcon color={`#${user.main_color}`} />
        </DrawerIcon>
      </DrawerOpenBtn>
      <React.Fragment key={anchor}>
        <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
          {list(anchor)}
          <DrawerCloseBtn onClick={() => setOpen(false)}>
            <DrawerIcon src={menuIcon} />
          </DrawerCloseBtn>
          <Spacer />
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Slider;
