import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Slider from '../Slider';

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

const Header = ({ history }) => {
  //
  // useEffect(() => {
  //   if (!token) {
  //     history.push('/login');
  //   }
  // }, []);

  // const toggleDrawer = (anchor, open) => (event) => {
  //   setOpen(open);
  // };

  // useEffect(() => {}, [open]);

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="title">Da:haeng</div>
        </Wrapper>
      </HeaderBlock>
      <Slider history={history} />
    </>
  );
};

export default withRouter(Header);
