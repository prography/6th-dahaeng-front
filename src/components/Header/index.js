import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

//styled(Responsive) ?
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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth);
  //const user = useSelector((state) => state.user.user);

  const [open, setOpen] = useState(false);
  const anchor = 'left';
  const classes = useStyles();

  // useEffect(() => {
  //   if (!token) {
  //     history.push('/login');
  //   }
  // }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    setOpen(open);
  };

  const list = (anchor) => (
    <Responsive>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'left',
        })}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {['Username 조랭', 'Project name [수정]', 'Happy coin [충전]'].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            ),
          )}
        </List>
        <Divider/>
        <List>
          {['출석부'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {['행복보관함', '조랭 shop', '소액 기부'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
      </div>
    </Responsive>
  );

  // useEffect(() => {}, [open]);

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <div className="title">Da:haeng</div>
        </Wrapper>
      </HeaderBlock>
      <React.Fragment key={anchor}>
        <Drawer
          anchor={anchor}
          open={open}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
      <Spacer></Spacer>
    </>
  );
};

export default withRouter(Header);
