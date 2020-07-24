import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import updateicon from '../../assets/icon/updateicon.png';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, getUser } from '../../store/user';
import Modal from '../../components/Modal';
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
  flex: 2;
  margin-right: 1rem;
  max-width: 250px;
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
  padding: 0.5rem;
  height: 5rem;
`;

const UserPictureBox = styled.div`
  flex: none;
  height: 4rem;
  width: 4rem;
  margin-left: 1rem;
  overflow: hidden;
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
  padding: 2px 2px 0 5px;
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

  &::placeholder {
    font-size: 12px;
    color: var(--text-third);
  }
`;

const ModalTextBox = styled.div`
  display: flex;
  flex: 3;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 10%;
  align-items: center;
`;

const ModalText = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
  color: var(--text-second);
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

const InfoBox = ({ toggleDrawer, history }) => {
  const user = useSelector((state) => state.user.user);

  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const setUpdateModal = () => {
    if (openModal) {
      setOpenModal(!openModal);
      setOpenUpdateModal(!openUpdateModal);
    }
  };

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
    dispatch(getUser());
  }, [dispatch, user]);

  const completeUpdate = () => {
    //console.log(inputTitle, inputNickname);
    dispatch(
      setUser(inputNickname, inputTitle, localStorage.getItem('profile')),
    );
    setOpenUpdateModal(false);
    //window.location.reload(false);
  };

  return (
    <>
      <UserTitleBox>
        {/* title 글자수 제한 있어야 함! 8글자 이내쯤 */}
        <UserTitle>{user.persoonal_title}</UserTitle>
        <UserInfoBtn onClick={setModal}>
          <UpdateIcon src={updateicon} alt="" />
        </UserInfoBtn>
      </UserTitleBox>
      <UserInfoBox>
        <UserPictureBox>
          {/*TODO: Dynamic color binding*/}
          <SliderJoraeng
            age={user.jorang_status}
            color={`#${user.jorang_color}`}
          />
          {/*<UserPicture alt="joraeng-egg" src={egg} />*/}
        </UserPictureBox>

        <UserTextBox>
          <UserTextWrapper>
            <UserInfoText>{user.jorang_nickname}</UserInfoText>
            <UserText>조랭 </UserText>
            {/* <UserInfoBtn onClick={updateNickname}>[수정]</UserInfoBtn> */}
          </UserTextWrapper>

          <UserTextWrapper>
            <UserInfoText>{user.user_coin}</UserInfoText>
            <UserText>코인</UserText>
            <UserInfoBtn onClick={setCoinModal}>[충전]</UserInfoBtn>
          </UserTextWrapper>
        </UserTextBox>
      </UserInfoBox>

      <Modal
        className="popup"
        openModal={openModal}
        setModal={setModal}
        title={<ModalTitle>조랭 정보 수정</ModalTitle>}
        content={
          <ModalBox>
            <ModalTextBox>
              <ModalInput
                placeholder="나만의 다행 서비스 이름"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
              />
            </ModalTextBox>
            <ModalTextBox>
              <ModalInput
                placeholder="나만의 조랭닉네임"
                value={inputNickname}
                onChange={(e) => setInputNickname(e.target.value)}
              />
              <UserText>조랭</UserText>
            </ModalTextBox>
          </ModalBox>
        }
        button={<ModalButton onClick={setUpdateModal}>수정 완료</ModalButton>}
      />

      <Modal
        className="popup"
        openModal={openUpdateModal}
        setModal={setUpdateModal}
        title={<ModalTitle>정보 수정이 완료되었습니다!</ModalTitle>}
        content={
          <ModalText>{`'${inputTitle}', '${inputNickname}'(으)로 변경했어요!`}</ModalText>
        }
        button={<ModalButton onClick={completeUpdate}>확인</ModalButton>}
      />
    </>
  );
};

export default InfoBox;
