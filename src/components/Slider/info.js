import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const UserTitleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  height: 6rem;
`;

const UserPictureBox = styled.div`
  flex: none;
  height: 5rem;
  width: 5rem;
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

const UserTextBox = styled.div`
  flex: 2;
  height: 5rem;
  width: 100%;
`;

const UserTextWrapper = styled.div`
  height: 50%;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const UserInfoText = styled.div`
  width: 100%;
  font-size: 18px;
  padding: 0.5rem;
  flex: 1;
`;

const UserText = styled.div`
  font-size: 14px;
  text-align: left;
  flex: 1;
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
            <UserText>조랭</UserText>
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
