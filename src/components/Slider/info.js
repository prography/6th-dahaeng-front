import React, { useState } from 'react';
import styled from 'styled-components';
import egg from '../../assets/joraeng/egg/purpleegg.png';
import updateicon from '../../assets/icon/updateicon.png';
import { useSelector } from 'react-redux';

import Modal from '../../components/Modal';

const UserTitleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #333333;
  margin: 1rem;
  height: 36px;
`;

const UserTitle = styled.div`
  font-size: 24px;
  flex: 2;
  margin-right: 1rem;
  max-width: 170px;
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
  padding: 0.5rem;
  height: 5rem;
`;

const UserPictureBox = styled.div`
  flex: none;
  height: 4rem;
  margin-left: 1rem;
  overflow: hidden;
`;

//유저 정보에 반려 조랭 이미지 넘어오면 여기 img로 바꾸고 src에 리덕스로 연결하면 되려나
const UserPicture = styled.img`
  height: 100%;
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
  flex: none;
  width: 64px;
  text-align: right;
`;

//유저 정보의 종류 나오는 부분
const UserText = styled.div`
  font-size: 14px;
  text-align: left;
  flex: none;
  display: inline;
  padding: 2px 2px 0 8px;
`;

// 수정 모달 디자인
const ModalTitle = styled.div`
  font-size: 18px;
  margin-bottom: 2rem;
  text-align: center;
`;

const ModalButton = styled.button`
  box-sizing: border-box;
  float: right;
  margin-top: 1rem;
  border: none;
  color: white;
  height: 2rem;
  background: var(--primary-color);
  border-radius: 4px;
  outline: none;
`;

const ModalInput = styled.input`
  box-sizing: border-box;
  flex: 2;
  border: none;
  border-bottom: 1px solid var(--text-fourth);
  outline: none;
  resize: none;
  text-align: center;

  line-height: 20px;
  padding: 6px;
`;

const ModalTextBox = styled.div`
  display: flex;
  flex: 3;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 10%;
  align-items: center;
`;

const ModalBox = styled.div`
  flex: 3;
  height: 4rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const setCoinModal = (e) => {
  alert('조랭이가 열심히 준비 중입니다!\n그 전까진 열심히 행복을 기록해주세요');
};

const InfoBox = () => {
  const user = useSelector((state) => state.user.user);

  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  //TODO : 개인정보 수정
  const [inputText, setInputText] = useState('');
  const onTextChange = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);
  };

  const completeUpdate = () => {
    setModal();
  };

  return (
    <>
      <UserTitleBox>
        {/* title 글자수 제한 있어야 함! 8글자 이내쯤 */}
        <UserTitle>{user.title}</UserTitle>
        <UserInfoBtn onClick={setModal}>
          <UpdateIcon src={updateicon} alt="" />
        </UserInfoBtn>
      </UserTitleBox>
      <UserInfoBox>
        <UserPictureBox>
          <UserPicture alt="joraeng-egg" src={egg} />
        </UserPictureBox>

        <UserTextBox>
          <UserTextWrapper>
            <UserInfoText>{user.name}</UserInfoText>
            <UserText>조랭 </UserText>
            {/* <UserInfoBtn onClick={updateNickname}>[수정]</UserInfoBtn> */}
          </UserTextWrapper>

          <UserTextWrapper>
            <UserInfoText>{user.coin}</UserInfoText>
            <UserText>코인</UserText>
            <UserInfoBtn onClick={setCoinModal}>[충전]</UserInfoBtn>
          </UserTextWrapper>
        </UserTextBox>
      </UserInfoBox>

      <Modal
        className="update"
        openModal={openModal}
        setModal={setModal}
        title={<ModalTitle>조랭 정보 수정</ModalTitle>}
        content={
          <ModalBox>
            <ModalTextBox>
              <ModalInput value={user.title} onChange={onTextChange} />
            </ModalTextBox>
            <ModalTextBox>
              <ModalInput value={user.name} onChange={onTextChange} />
              <UserText>조랭</UserText>
            </ModalTextBox>
          </ModalBox>
        }
        button={<ModalButton onClick={completeUpdate}>수정 완료</ModalButton>}
      />
    </>
  );
};

export default InfoBox;
