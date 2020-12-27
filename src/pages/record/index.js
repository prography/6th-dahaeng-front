import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reminder, getUser } from 'store/user';
import { getQuestion, getToday } from 'store/box';

import Moment from 'moment';

import styled from 'styled-components';
import EmoticonDropdown from '../../components/Modal/EmotionDropdown';
import Responsive from '../../components/common/Responsive';
import TitleText from '../../components/common/TitleText';
import { modifyRecord, setRecord } from '../../store/box';
import Modal from '../../components/Modal';

import closeicon from 'assets/icon/closeicon.png';
import defaultJoraeng from 'assets/joraeng/default-joraeng.png';

const RecordWrapper = styled.div`
  max-width: 768px;
  min-height: 400px;
  padding: 1.5rem;
`;

const Wrapper = styled.div`
  border: 2px solid #212121;
  padding: 1rem;
`;

const CloseButton = styled.button`
  position: fixed;
  right: 12px;
  border: none;
  outline: none;
  background: none;
`;

const CloseIcon = styled.img`
  width: 11px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 0.2rem;
`;

const Date = styled.div`
  font-size: 18px;
  display: inline;
`;

//감정 카테고리 시도
const Category = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 0.5rem;
  margin-bottom: 4px;
  width: 48px;
  height: 32px;
  vertical-align: middle;
  padding-bottom: 2px;
`;

const Question = styled.div`
  font-size: 18px;
  word-break: keep-all;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    ${(props) => props.thirdColor} 50%
  );
  display: inline;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Character = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 10rem;
  height: 10rem;
  border: 2px solid #212121;
  margin: 5% auto;
  overflow: hidden;
`;

const CharacterImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const CharacterDefaultImage = styled.img`
  padding: 1.5rem;
  height: 100%;
`;

const RecordInput = styled.textarea`
  box-sizing: border-box;
  min-height: 100px;
  width: 100%;
  margin: 0 auto;
  border: none;
  outline: none;
  resize: none;

  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 30px,
      #212121 31px,
      #212121 31px,
      white 32px
    );
  line-height: 31px;
  padding: 8px 10px;
`;

const RecordButton = styled.button`
  box-sizing: border-box;
  float: right;
  margin-top: 1rem;
  border: none;
  color: white;
  height: 2rem;
  padding: 4px 12px;
  background: ${(props) => props.mainColor};
  border-radius: 4px;
  outline: none;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ModalText = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
  color: var(--text-second);
`;

const emotionWordEn = ['WARM', 'TOUCHED', 'FUN', 'HAPPY', 'EXTRA'];

const Record = ({ history }) => {
  const [recordComplete, setRecordComplete] = useState(false);
  const [openCoinModal, setOpenCoinModal] = useState(false);
  //const [openNoticeModal, setOpenNoticeModal] = useState(false);

  const [dropdownState, setDropdownState] = useState(0);

  const setCoinModal = () => {
    console.log(recordComplete);
    if (recordComplete) {
      history.push('/');
      setOpenCoinModal(!openCoinModal);
    } else {
      setOpenCoinModal(!openCoinModal);
    }
  };

  const id = useSelector((state) => state.auth.profile_id);
  const user = useSelector((state) => state.user.user);
  const question = useSelector((state) => state.box.question);
  const has_jorang = useSelector((state) => state.auth.has_jorang);
  // const token = useSelector((state) => state.auth.token);

  const [inputText, setInputText] = useState('');
  const onTextChange = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (has_jorang === false) {
      history.push('/create');
    }
  }, [dispatch, history, has_jorang]);

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    console.log(token);
    console.log(typeof token);
    if (
      token === null ||
      token === 'undefined' ||
      token === '' ||
      token.length <= 0
    ) {
      //release
      history.push('/login');
    }
  }, [token, history]);

  useEffect(() => {
    //dispatch(getUser(id));
    localStorage.getItem('profile') &&
      dispatch(getUser(localStorage.getItem('profile')));
    dispatch(getQuestion());
    dispatch(reminder());
    localStorage.getItem('record_id') &&
      dispatch(getToday(localStorage.getItem('record_id')));
  }, [dispatch, id]);

  //today record
  const record = useSelector((state) => state.box.record);

  useEffect(() => {
    record && setInputText(record.detail);
  }, [record]);

  const modify = () => {
    const form_data = new FormData();
    form_data.append('detail', inputText);
    form_data.append('emotion', emotionWordEn[dropdownState]);
    img && form_data.append('image', img);

    dispatch(modifyRecord(form_data, record.id));
  };

  const completeRecord = () => {
    const form_data = new FormData();
    form_data.append('detail', inputText);
    console.log();
    form_data.append('emotion', emotionWordEn[dropdownState]);
    img && form_data.append('image', img);

    dispatch(setRecord(form_data));
    setCoinModal();
    setRecordComplete(true);
    localStorage.getItem('profile') &&
      dispatch(getUser(localStorage.getItem('profile')));
  };
  const coin = useSelector((state) => state.box.coin);
  const continuity = useSelector((state) => state.box.continuity);
  const reward_of_today = useSelector((state) => state.box.reward_of_today);

  //사진 업로드 시도!
  //미리보기 ok, 한 번 업로드 후 수정이 안 됨...
  //사진 입력 안 하면 기본 조랭이 저장되어야 함..!
  const [img, setImage] = useState(null);
  const [imgBase64, setImgBase64] = useState(''); //img src에 들어갈 base64 인코딩 값

  const onImageChange = (e) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
      // else {
      //   setImgBase64('/images/defaultJoraeng.png');
      // }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };
  return (
    <>
      <Responsive>
        <TitleText>
          오늘의 행복 기록
          <CloseButton>
            <CloseIcon src={closeicon} />
          </CloseButton>
        </TitleText>

        <RecordWrapper>
          <Wrapper>
            <TitleWrapper>
              <Date>
                {Moment(
                  question &&
                    question.last_login &&
                    question.last_login.dateForm,
                ).format('MM-DD')}
              </Date>
              <Category>
                <EmoticonDropdown
                  updateDropdownValue={setDropdownState}
                  dropdownState={
                    record &&
                    emotionWordEn.findIndex((e) => e === record.emotion)
                  }
                />
              </Category>
            </TitleWrapper>
            <TitleWrapper>
              <Question thirdColor={`#${user.third_color}`}>
                {question && question.question}
              </Question>
            </TitleWrapper>

            <Content>
              <Character>
                {img !== null ? (
                  <CharacterImage src={imgBase64} alt="" />
                ) : record && record.image ? (
                  <CharacterDefaultImage src={record.image} alt="" />
                ) : (
                  <CharacterDefaultImage src={defaultJoraeng} alt="" />
                )}
                <input
                  type="file"
                  id="upload"
                  style={{ display: 'none' }}
                  onChange={onImageChange}
                />
              </Character>
              <RecordInput
                value={inputText}
                onChange={onTextChange}
              ></RecordInput>
            </Content>
          </Wrapper>

          {record ? (
            <RecordButton mainColor={`#${user.main_color}`} onClick={modify}>
              기록 수정하기
            </RecordButton>
          ) : (
            <RecordButton
              mainColor={`#${user.main_color}`}
              onClick={completeRecord}
            >
              저장하기
            </RecordButton>
          )}
        </RecordWrapper>
      </Responsive>

      {/* 코인 주기 팝업 */}
      <Modal
        className="popup"
        openModal={openCoinModal}
        setModal={setCoinModal}
        title={
          <>
            {continuity === 7 || 17 || 27 || 30 ? (
              <ModalTitle>
                <ModalTitle>{`우와, ${continuity}일 연속으로 행복을 기록했어요!`}</ModalTitle>
              </ModalTitle>
            ) : (
              <ModalTitle>{`${continuity}일 째 행복을 기록했어요!`}</ModalTitle>
            )}
          </>
        }
        content={
          <>
            <ModalText>{`짜잔- 오늘은 ${reward_of_today}코인을 받아서`}</ModalText>
            <ModalText>{`총 나의 행복코인이 ${coin}이 되었습니다 :)`}</ModalText>
          </>
        }
        button={
          <RecordButton
            mainColor={`#${user.main_color}`}
            onClick={() => {
              setCoinModal();
            }}
          >
            확인
          </RecordButton>
        }
      ></Modal>
    </>
  );
};

export default Record;
