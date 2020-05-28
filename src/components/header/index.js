import React, { useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

//styled(Responsive)
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

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth);

  useEffect(() => {
    //token이 존재하지 않으면 /login으로 이동
    // if (!token) {
    //   history.push('/login');
    // } else {
    //   console.log('로그인완료');
    // }
  }, []);

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="title">Da:haeng</div>
        </Wrapper>
      </HeaderBlock>
      <Spacer></Spacer>
    </>
    // {/* <Link to="/">메인</Link>
    // <Link to="/login">로그인</Link> */}
  );
};

export default withRouter(Header);
