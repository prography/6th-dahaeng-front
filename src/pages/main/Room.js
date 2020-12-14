import React, { useState } from 'react';
import styled from 'styled-components';
import ground from 'assets/main/ground.png';
import NoticeModal from '../../components/NoticeModal';
import MainJoraeng from '../../components/Joraeng/MainJoraeng';
import { useSelector } from 'react-redux';

//Modal

const ModalTitle = styled.div``;

const Reminder = styled.div`
  width: 100%;
  text-align: center;
  z-index: 2;
`;

//Modal
const Wrapper = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 664px;
  position: relative;

  @media screen and (max-width: 480px) {
    height: 220px;
  }
  @media screen and (max-width: 440px) {
    height: 200px;
  }
`;

const PostBox = styled.button`
  position: absolute;
  width: 90px;
  top: 80px;
  left: 120px;
  z-index: 2;
  @media screen and (max-width: 664px) {
    top: 100px;
    left: 60px;
  }
  @media screen and (max-width: 480px) {
    width: 50px;
    top: 70px;
    left: 20px;
  }
`;

const PostBoxImg = styled.img`
  width: 100%;
`;

const Character = styled.button`
  position: absolute;
  right: 100px;
  width: 160px;
  z-index: 2;
  top: 40px;
  @media screen and (max-width: 480px) {
    right: 70px;
    top: 20px;
    width: 100px;
  }
`;

const Closet = styled.button`
  position: absolute;
  width: 60px;
  top: 145px;
  right: 70px;
  z-index: 3;
  @media screen and (max-width: 480px) {
    width: 50px;
    top: 80px;
    right: 50px;
  }
`;

const ClosetImg = styled.img`
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
  width: 100%;

  @media (min-width: 481px) and (max-width: 520px) {
    bottom: 50px;
  }
  @media screen and (max-width: 380px) {
    bottom: 10px;
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
`;

//hasItems: 서버에서 받아온 실제 착용한 아이템, applyItems: 옷장에서 테스팅해볼 아이템
const Room = ({
  notice,
  reminder,
  history,
  hasItems,
  applyItems,
  mainColor,
  thirdColor,
}) => {
  const user = useSelector((state) => state.user.user);
  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  const moveCloset = () => {
    history.push('/closet');
  };

  const moveMain = () => {
    history.push('/');
  };

  const ReminderDate = reminder && reminder[0] && reminder[0].created_at;

  return (
    <Wrapper>
      {/* <PostBox>
        {notice ? (
          <PostBoxImg onClick={setModal} src={postboxOn} alt="" />
        ) : (
          <PostBoxImg onClick={setModal} src={postbox} alt="" />
        )}
      </PostBox> */}
      <Character onClick={moveMain}>
        {/*TODO: Dynamic color binding*/}
        <MainJoraeng
          age={user.jorang_status}
          mainColor={
            applyItems !== null ? applyItems.color : mainColor
            // //`#${
            //   hasItems &&
            //   hasItems
            //     .filter((item) => item.item.item_type === 'jorang_color')
            //     .filter((item) => item.is_worn === true)[0].item.item_detail
            // }`
          }
          thirdColor={applyItems !== null ? applyItems.color : thirdColor}
        />
      </Character>
      <Closet onClick={moveCloset}>
        {/* <ClosetImg src={closet} alt="" /> */}
      </Closet>
      <Background>
        <BackgroundImg src={ground} alt="" />
      </Background>

      <NoticeModal
        history={history}
        openModal={openModal}
        setModal={setModal}
        reminderInfo={reminder}
        notices={notice}
        title={<ModalTitle>{'공지사항'}</ModalTitle>}
        // notice={notice.map((notice) => {
        //   return <Notice>{notice.title}</Notice>;
        // })
        reminderContent={
          ReminderDate ? (
            <Reminder>{`${ReminderDate.slice(0, 4)}년 ${ReminderDate.slice(
              5,
              7,
            )}월 ${ReminderDate.slice(
              8,
              10,
            )}일, 나는 이렇게 많이 행복했었네요! 함께 볼까요?`}</Reminder>
          ) : null
        }
      ></NoticeModal>
    </Wrapper>
  );
};

export default Room;
