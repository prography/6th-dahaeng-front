import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import InfoBox from './info.js';
import menuIcon from '../../assets/icon/menu_icon.png'
import './slider.css'

// 임시 기분표
const emotionArray = [
  '🥳',
  '🥑',
  '🌱',
  '✈️',
  '📚',
  '⛄️',
  '🌟',
  '🌈',
  '🌺',
  '😴'
]

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
  z-index: 1;
  background-color: var(--primary-color);
`;
const DrawerIcon = styled.img`
  width: 18px;
`

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

const DailyRecordBox = styled.div`
  background-color: var(--secondary-color);
  padding: 10px 0;
  flex: 1;
  margin: 1em;
  height: 200px;
  border-radius: 4px;
  
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;
//그날 행복기록에 입력한 카테고리 조랭 출력
const DailyRecord = styled.div`
  // 100/7% ~= 14.2%
  flex: 1 1 14.2%;
  max-width: 14.2%;
  text-align: center;
  padding: 10px;
  font-size: 21px;
  height: 50px;
`;

const LogoutText = styled.div`
  font-size: 14px;
  text-align: center;
  color: var(--text-second);
  margin: 1rem;
`;

const SliderButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: .125s ease-in-out;
  
  &:hover {
    background-color: #fafafa;
  }
`

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
    history.push('/market');
  }

  function navigateDonationPage() {
    history.push('/donation');
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
        {emotionArray.map((text, index) => (
          <DailyRecord key={text}>{text}</DailyRecord>
        ))}
      </DailyRecordBox>

      <List>
        <SliderButton
          onClick={navigateBoxPage}>
          행복보관함
        </SliderButton>
        <SliderButton
          onClick={navigateMarketPage}>
          조랭마켓
        </SliderButton>
        <SliderButton
          onClick={navigateDonationPage}>
          소액기부
        </SliderButton>
      </List>
    </div>
  );

  return (
    <>
      <DrawerOpenBtn onClick={() => setOpen(true)}>
        <DrawerIcon src={menuIcon}/>
      </DrawerOpenBtn>
      <React.Fragment key={anchor}>
        <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
          {list(anchor)}
          <DrawerCloseBtn onClick={() => setOpen(false)}>
            <DrawerIcon src={menuIcon}/>
          </DrawerCloseBtn>
          <Spacer/>
          {/*TODO: 지호야 요거 밑에거 버튼으로 바꾸면 될듯*/}
          <LogoutText>로그아웃</LogoutText>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Slider;
