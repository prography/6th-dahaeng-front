import React, { useState, useEffect } from 'react';
import Room from './Room';
import Header from '../../components/Header';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, setRecord } from 'store/box';
import { reminder } from 'store/user';
import Responsive from '../../components/common/Responsive';
import Moment from 'moment';
import EmotionDropdown from '../../components/Modal/EmotionDropdown';

const Date = styled.div`
  font-size: 18px;
  display: inline;
`;

const QuestionBox = styled.div`
  margin: auto auto;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Question = styled.div`
  font-size: 24px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 60%,
    var(--secondary-color) 40%
  );
`;

const ModalTitle = styled.div`
  margin-bottom: 0.2rem;
`;

//감정 카테고리 시도
const ModalCategory = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 0.5rem;
  width: 48px;
  height: 32px;
  vertical-align: middle;
  padding-bottom: 2px;
`;

const DropdownStatusText = styled.span`
  font-size: 14px;
  padding-left: 12px;
  color: var(--text-third);
`;

const ModalQuestion = styled.div`
  font-size: 18px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 60%,
    var(--secondary-color) 40%
  );
  display: inline;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalCharacter = styled.div`
  box-sizing: border-box;
  width: 10rem;
  height: 10rem;
  border: 1px solid #e9e9e9;
  margin: 5% auto;
  overflow: hidden;
`;

const ModalCharacterImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const ModalCharacterDefaultImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin-left: 3rem;
`;

const InputLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  display: inline-block;
  overflow: hidden;
  color: var(--text-second);
  padding: 1rem;
`;

const ModalInput = styled.textarea`
  box-sizing: border-box;
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
      #e9e9e9 30px,
      #e9e9e9 31px,
      white 31px
    );
  line-height: 31px;
  padding: 8px;
`;

const ModalButton = styled.button`
  box-sizing: border-box;
  float: right;
  margin-top: 1rem;
  border: none;
  color: white;
  height: 2rem;
  padding: 4px 12px;
  background: var(--primary-color);
  border-radius: 4px;
  outline: none;
`;

const emotionWord = [
  '따뜻했어요!',
  '평온했어요!',
  '재밌었어요!',
  '두근두근!',
  '몽글몽글!',
];

const Main = ({ history }) => {
  const [openModal, setOpenModal] = useState(false);
  const [dropdownState, setDropdownState] = useState(0);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  const user = useSelector((state) => state.auth.user);
  const question = useSelector((state) => state.box.question);
  const reminders = useSelector((state) => state.user.reminders);
  const has_jorang = useSelector((state) => state.auth.has_jorang);
  const token = useSelector((state) => state.auth.token);

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
  }, [dispatch, history]);

  // const token = localStorage.getItem('accessToken');

  useEffect(() => {
    console.log(token);
    if (!token) {
      // history.push('/login');
    }
  }, [token, history]);

  useEffect(() => {
    dispatch(getQuestion());
    dispatch(reminder());
  }, [dispatch]);

  const completeRecord = () => {
    const form_data = new FormData();
    form_data.append('detail', inputText);
    form_data.append('emotion', 'HAPPY');
    form_data.append('image', img);

    dispatch(setRecord(form_data));
    setModal();
  };

  //사진 업로드 시도!
  //미리보기 ok, 한 번 업로드 후 수정이 안 됨...
  //사진 입력 안 하면 기본 조랭이 저장되어야 함..!
  const [img, setImage] = useState(null);
  const [imgBase64, setImgBase64] = useState(''); //img src에 들어갈 base64 인코딩 값
  const [file, setFile] = useState(null);

  const onImageChange = (e) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      } else {
        setImgBase64('/images/defaultJoraeng.png');
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <Header></Header>
      <Responsive>
        <QuestionBox onClick={setModal}>
          <Date>
            {Moment(
              question && question.last_login && question.last_login.dateForm,
            ).format('MM-DD')}
          </Date>
          <Question>{question && question.question}</Question>
        </QuestionBox>
        <Modal
          className
          openModal={openModal}
          setModal={setModal}
          title={
            <>
              <ModalTitle>
                <Date>
                  {Moment(
                    question &&
                      question.last_login &&
                      question.last_login.dateForm,
                  ).format('MM-DD')}
                </Date>
                <ModalCategory>
                  <EmotionDropdown updateDropdownValue={setDropdownState} />
                </ModalCategory>
                <DropdownStatusText>
                  {emotionWord[dropdownState]}
                </DropdownStatusText>
              </ModalTitle>
              <ModalTitle>
                <ModalQuestion>{question && question.question}</ModalQuestion>
              </ModalTitle>
            </>
          }
          content={
            <ModalContent>
              <ModalCharacter>
                {img !== null ? (
                  <ModalCharacterImage src={imgBase64} alt="" />
                ) : (
                  <InputLabel htmlFor="upload">
                    행복사진을 <br /> 함께 기록해요!
                    <ModalCharacterDefaultImage
                      src="/images/defaultJoraeng.png"
                      alt=""
                    />
                  </InputLabel>
                )}
                <input
                  type="file"
                  id="upload"
                  style={{ display: 'none' }}
                  onChange={onImageChange}
                />
              </ModalCharacter>
              <ModalInput
                value={inputText}
                onChange={onTextChange}
              ></ModalInput>
            </ModalContent>
          }
          button={
            <ModalButton onClick={completeRecord}>행복 기록 완료</ModalButton>
          }
        />
        <Room reminders={reminders}></Room>
      </Responsive>
    </>
  );
};

export default Main;
