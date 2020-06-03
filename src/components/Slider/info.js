import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const UserTitleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #333333;
  margin: 1rem;
  height: 36px;
`;

const UserTitle = styled.div`
  font-size: 24px;
  flex: 1;
  margin-right: 1rem;
  max-width: 170px;
`;

const UserInfoBtn = styled.button`
  flex: 1;
  border: none;
  background: none;
  color: #bbbbbb;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  margin-left: -8px;
  margin-right: -15px;
`;
//전체 info(사진 + 유저정보) 감싸는 박스
const UserInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 200px;
  padding: 0.5rem;
  height: 5rem;
`;

const UserPictureBox = styled.div`
  flex: none;
  height: 4rem;
  width: 4rem;
  margin-bottom: 1rem;
  border: solid;
  border-radius: 50%;
  overflow: hidden;
`;

//유저 정보에 반려 조랭 이미지 넘어오면 여기 img로 바꾸고 src에 리덕스로 연결하면 되려나
const Picture = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  object-fit: cover;
`;
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
  flex: 1;
`;
//유저 정보의 종류 나오는 부분
//한 줄로 안 맞춰지는 문제 해결해야 해유,,
const UserText = styled.div`
  font-size: 14px;
  text-align: right;
  flex: 1;
  padding-right: 2px;
  padding-top: 2px;
`;

const updateTitle = (e) => {};

const InfoBox = (state) => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <UserTitleBox>
        {/* title 글자수 제한 있어야 함! 8글자 이내쯤 */}
        <UserTitle>{user.title}</UserTitle>
        <UserInfoBtn onClick={updateTitle}>[수정]</UserInfoBtn>
      </UserTitleBox>
      <UserInfoBox>
        <UserPictureBox>
          <Picture></Picture>
        </UserPictureBox>

        <UserTextBox>
          <UserTextWrapper>
            <UserInfoText>{user.name}</UserInfoText>
            <UserText>조랭 </UserText>
            <UserInfoBtn onClick={updateTitle}>[수정]</UserInfoBtn>
          </UserTextWrapper>

          <UserTextWrapper>
            <UserInfoText>{user.coin}</UserInfoText>
            <UserText>코인</UserText>
            <UserInfoBtn>[충전]</UserInfoBtn>
          </UserTextWrapper>
        </UserTextBox>
      </UserInfoBox>
    </>
  );
};

export default InfoBox;
