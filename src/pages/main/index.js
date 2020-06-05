import React, { useState, useEffect } from 'react';
import Room from './Room';
import Header from '../../components/Header';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestion, setRecord, getRecords } from 'store/box';
import Responsive from '../../components/common/Responsive';
import Moment from 'moment';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const QuestionBox = styled.div`
  margin: auto auto;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Date = styled.div`
  font-size: 18px;
`;

const Question = styled.div`
  font-size: 24px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffede5 40%);
`;

const ModalTitle = styled.div``;

const ModalQuestion = styled.div`
  font-size: 18px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffede5 40%);
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
  object-fit: cover;
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
  color: #bbbbbb;
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
  background: #faa084;
  border-radius: 4px;
  outline: none;

  cursor: pointer;
`;

const Main = ({ history }) => {
  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  const user = useSelector((state) => state.auth.user);
  const question = useSelector((state) => state.box.question);

  const [inputText, setInputText] = useState('');
  const onTextChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestion());
  }, [dispatch]);

  const completeRecord = () => {
    const form_data = new FormData();
    form_data.append('detail', inputText);
    form_data.append('emotion', 'HAPPY');
    form_data.append('image', img);

    dispatch(
      // setRecord({ detail: inputText, image: form_data, emotion: 'HAPPY' }),
      setRecord(form_data),
    );
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
        <QuestionBox>
          <Date>
            {Moment(
              question && question.last_login && question.last_login.dateForm,
            ).format('MM-DD')}
          </Date>
          <Question onClick={setModal}>
            {question && question.question}
          </Question>
        </QuestionBox>
        <Modal
          openModal={openModal}
          setModal={setModal}
          title={
            <ModalTitle>
              <Date>
                {Moment(
                  question &&
                    question.last_login &&
                    question.last_login.dateForm,
                ).format('MM-DD')}
              </Date>
              <ModalQuestion>{question && question.question}</ModalQuestion>
            </ModalTitle>
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
        ></Modal>
        <Room></Room>
      </Responsive>
    </>
  );
};

export default Main;
