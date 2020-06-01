import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';

const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
`;

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

const DailyRecord = styled.div`
  background-color: #ff9d73;
  padding: 30px 0;
  flex: 1;
  margin: 1em;
  height: 200px;
  border-radius: 4px;
`;

const useStyles = makeStyles({
  list: {
    width: 250,
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
  const user = useSelector((state) => state.user.user);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  function navigatePage() {
    console.log('TODO');
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
      <List>
        {/* {['Username 조랭', 'Project name [수정]', 'Happy coin [충전]'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ),
        )} */}
        <ListItem button>
          <ListItemText primary={user.name} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={user.title} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={user.coin} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['출석부'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={'코인100'} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['행복보관함', '조랭 shop', '소액 기부'].map((text, index) => (
          <ListItem button key={text} onClick={navigatePage}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
        </Drawer>
      </React.Fragment>
      <Spacer />
    </>
  );
};

export default Slider;
