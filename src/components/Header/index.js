import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../Slider';
import { getUser } from '../../store/user';

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
  const token = localStorage.getItem('accessToken');

  const moveMain = () => {
    history.push('/');
  };

  const user = useSelector((state) => state.user.user);

  // const [open, setOpen] = useState(false);
  // const anchor = 'left';
  // const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getUser(localStorage.getItem('profile')));
  }, [dispatch, user]);

  useEffect(() => {
    if (!token) {
      //release
      //history.push('/login');
    }
  }, [token, history]);

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);

  return (
    <React.Fragment>
      <HeaderBlock>
        <Wrapper>
          <div className="title" onClick={moveMain}>
            {user.title}
          </div>
        </Wrapper>
      </HeaderBlock>
      
    </React.Fragment>
  );
};

export default withRouter(Header);
