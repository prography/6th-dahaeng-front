import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../Slider';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 10;
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
    cursor: pointer;
  }
`;

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');

  const moveMain = () => {
    history.push('/');
  };

  // const user = useSelector((state) => state.auth.user);

  // const [open, setOpen] = useState(false);
  // const anchor = 'left';
  // const classes = useStyles();

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [token]);

  return (
    <React.Fragment>
      <HeaderBlock>
        <Wrapper>
          <div className="title" onClick={moveMain}>
            Da:haeng
          </div>
        </Wrapper>
      </HeaderBlock>
      <Slider history={history} />
    </React.Fragment>
  );
};

export default withRouter(Header);
