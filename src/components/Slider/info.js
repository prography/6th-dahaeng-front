import React, { useEffect } from 'react';
import styled from 'styled-components';
import updateicon from '../../assets/icon/setting.png';
import { useSelector, useDispatch } from 'react-redux';
import SliderJoraeng from '../Joraeng/SliderJoraeng';

const UserTitleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #333333;
  margin: 1rem;
  height: 36px;
`;

const UserTitle = styled.div`
  font-size: 24px;
  flex: none;
  margin-right: 1rem;
  max-width: 250px;
  position: relative;

  &:after {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 10px;
    height: 12px;
    content: ' ';
    background-color: #a26c8f;
    opacity: 0.3;
  }
`;

const UserInfoBtn = styled.button`
  flex: none;
  border: none;
  background: none;
  color: var(--text-second);
  text-decoration: none;
  text-align: left;
  font-size: 12px;
  cursor: pointer;
  padding-right: 5px;
`;

const UpdateIcon = styled.img`
  height: 15px;
`;

//전체 info(사진 + 유저정보) 감싸는 박스
const UserInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 200px;
  padding: 12px 18px 12px 12px;
`;

const UserPictureBox = styled.div`
  flex: none;
  height: 4rem;
  width: 4rem;
  margin-left: 1rem;
  overflow: hidden;
  -webkit-border-radius: 2rem;
  -moz-border-radius: 2rem;
  border-radius: 2rem;
  border: 3px solid #212121;
`;

//유저 정보에 반려 조랭 이미지 넘어오면 여기 img로 바꾸고 src에 리덕스로 연결하면 되려나
//전체 유저 정보 감싸는 박스
const UserTextBox = styled.div`
  flex: 3;
  height: 4rem;
  width: 100%;
`;
//유저 정보 한 줄 감쌈
const UserTextWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
`;
//불러온 유저 정보 부분
const UserInfoText = styled.div`
  font-size: 16px;
  flex: none;
  max-width: 120px;
  text-align: right;
`;

//유저 정보의 종류 나오는 부분
const UserText = styled.div`
  font-size: 14px;
  text-align: left;
  flex: none;
  display: inline;
`;

const ChevronRightInInfo = styled.img`
  height: 12px;
`;

const setCoinModal = (e) => {
  alert('조랭이가 열심히 준비 중입니다!\n그 전까진 열심히 행복을 기록해주세요');
};

const InfoBox = ({ history }) => {
  const user = useSelector((state) => state.user.user);
  const colors = useSelector((state) => state.user.colors);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getUser(localStorage.getItem('profile')));
  }, [dispatch, user]);

  const movePage = (page) => {
    history.push(`/${page}`);
  };

  return (
    <>
      <UserTitleBox>
        {/* title 글자수 제한 있어야 함! 8글자 이내쯤 */}
        <UserTitle>{user.title}</UserTitle>
        <UserInfoBtn
          onClick={() => {
            movePage('setting');
          }}
        >
          <UpdateIcon src={updateicon} alt="" />
        </UserInfoBtn>
      </UserTitleBox>
      <UserInfoBox>
        <UserTextBox>
          <UserTextWrapper>
            <UserInfoText>{user.jorang_nickname}</UserInfoText>
            <UserText>님, 오늘도 행복하세요! </UserText>
            {/* <UserInfoBtn onClick={updateNickname}>[수정]</UserInfoBtn> */}
          </UserTextWrapper>

          <UserTextWrapper>
            <UserText>행복코인:</UserText>
            <UserInfoText>{user.user_coin}</UserInfoText>
            <UserInfoBtn onClick={setCoinModal}>
              <ChevronRightInInfo
                src={require('../../assets/icon/ChevronRight.svg')}
                alt="chevron-right"
              />
            </UserInfoBtn>
          </UserTextWrapper>
        </UserTextBox>

        <UserPictureBox>
          {/*TODO: Dynamic color binding*/}
          <SliderJoraeng
            age={user.jorang_status}
            mainColor={`#${colors && colors[0]}`}
            thirdColor={`#${colors && colors[2]}`}
          />
          {/*<UserPicture alt="joraeng-egg" src={egg} />*/}
        </UserPictureBox>
      </UserInfoBox>
    </>
  );
};

export default InfoBox;
