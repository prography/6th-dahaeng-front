import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import InfoBox from './info.js';

const Spacer = styled.div`
  height: 4rem;
`;

const DrawerOpenBtn = styled.button`
  position: absolute;
  left: 0px;
  top: 12px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 0 55% 55% 0;
  z-index: 1;
  background-color: var(--primary-color);
`;

//성환오빠의 슬라이더 버튼 꼼수 쓰기 시도
// const DrawerCloseBtn = styled.button`
//   position: absolute;
//   right: -20px;
//   top: 12px;
//   width: 40px;
//   height: 40px;
//   border: none;
//   z-index: 999999;
//   background-color: var(--primary-color);
// `;

const DrawerBtnBox = styled.div`
  flex: 1;
  margin-right: 3px;
`;

const DrawerBtn = styled.div`
  width: 100%;
  height: 4px;
  background-color: #ffffff;
`;

const DailyRecordBox = styled.div`
  background-color: rgb(255, 157, 115, 0.2);
  padding: 30px 0;
  flex: 1;
  margin: 1em;
  height: 200px;
  border-radius: 4px;
`;

const DailyRecord = styled.div`
  display: inline;
  width: 35px;
  height: 35px;
  margin: 12px;
`;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 300,
  },
});

const Slider = ({ history }) => {
  const [open, setOpen] = useState(false);
  const anchor = 'left';
  const classes = useStyles();

  // const dispatch = useDispatch();
  //TODO: ??? token vs user
  const token = useSelector((state) => state.auth.auth);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  function navigateBoxPage() {
    history.push('/box');
  }

  function navigateMarketPage() {
    history.push('/box');
  }

  function navigateDonationPage() {
    history.push('/box');
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'left',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <InfoBox />
      {/* 행복 기록시 입력한 카테고리 떠야 함 */}
      <DailyRecordBox>
        {['O', 'X'].map((text, index) => (
          <DailyRecord key={text}>{text}</DailyRecord>
        ))}
      </DailyRecordBox>

      <List>
        <ListItem onClick={navigateBoxPage} style={{ cursor: 'pointer' }}>
          <ListItemText primary={'행복보관함'} />
        </ListItem>
        <ListItem onClick={navigateMarketPage} style={{ cursor: 'pointer' }}>
          <ListItemText primary={'조랭마켓'} />
        </ListItem>
        <ListItem onClick={navigateDonationPage} style={{ cursor: 'pointer' }}>
          <ListItemText primary={'소액기부'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <DrawerOpenBtn onClick={() => setOpen(true)}>test</DrawerOpenBtn>
      <React.Fragment key={anchor}>
        <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
          {list(anchor)}
          {/* <DrawerCloseBtn onClick={toggleDrawer(anchor, false)}>
            test
          </DrawerCloseBtn> */}
          <div>로그아웃</div>
        </Drawer>
      </React.Fragment>
      <Spacer />
    </>
  );
};

export default Slider;
