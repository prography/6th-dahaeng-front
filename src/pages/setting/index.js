import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, getUser } from '../../store/user';
import SubTitle from '../../components/SubTitle';
import Responsive from '../../components/common/Responsive';

const Wrapper = styled.div``;

const BackButton = styled.div``;

const SettingBox = styled.div`
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
`;

const SettingTitle = styled.div`
  font-size: 12px;
  padding-bottom: 0.7rem;
`;

const SettingInput = styled.input`
  font-size: 16px;
  border: none;
  padding-bottom: 1rem;
  padding-left: 0;
`;

const ButtonBox = styled.div`
  flex: none;
  width: 100%;
`;
const SettingButton = styled.button`
  color: white;
  width: 39px;
  height: 20px;
  border-radius: none;
  float: right;
`;

const SettingService = styled.div``;

const Setting = ({ history }) => {
  const user = useSelector((state) => state.user.user);
  const colors = useSelector((state) => state.user.colors);

  //TODO : 개인정보 수정
  const [inputTitle, setInputTitle] = useState('');
  const [inputNickname, setInputNickname] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    setInputTitle(user ? user.title : '');
  }, [user]);

  useEffect(() => {
    setInputNickname(user ? user.jorang_nickname : '');
  }, [user]);

  useEffect(() => {
    dispatch(getUser(localStorage.getItem('profile')));
  }, [dispatch]);

  const completeUpdate = () => {
    dispatch(
      setUser(inputNickname, inputTitle, localStorage.getItem('profile')),
    );
  };

  const movePage = (page) => {
    history.push(`/${page}`);
  };

  return (
    <Responsive>
      <SubTitle
        title={'설정'}
        back={true}
        backPage={() => movePage('')}
      ></SubTitle>
      <Wrapper>
        <SettingBox>
          <SettingTitle style={{ color: `#${colors && colors[0]}` }}>
            개인 정보 설정
          </SettingTitle>
          <SettingInput
            value={user.jorang_nickname}
            placeholder="조랭 이름"
          ></SettingInput>
          <SettingInput
            value={user.title}
            placeholder="서비스 이름"
          ></SettingInput>
          <ButtonBox>
            <SettingButton style={{ background: `#${colors && colors[0]}` }}>
              변경
            </SettingButton>
          </ButtonBox>
        </SettingBox>
        <SettingBox>
          <SettingTitle style={{ color: `#${colors && colors[0]}` }}>
            서비스 관련
          </SettingTitle>
          <SettingService onClick={() => movePage('feedback')}>
            의견 보내기
          </SettingService>
        </SettingBox>
      </Wrapper>
    </Responsive>
  );
};

export default Setting;
