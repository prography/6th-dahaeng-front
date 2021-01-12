import React, { useState } from 'react';
import styled from 'styled-components';
import SubTitle from '../../components/SubTitle';
import Responsive from '../../components/common/Responsive';
import { feedback } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal';

const ContentBox = styled.div`
  margin: 0 auto;
  padding: 4rem 1.5rem 1.5rem 1.5rem;
  height: 400px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
`;

const InfoBox = styled.div`
  padding: 0 2rem 0 1rem;
  margin: 0 auto;
`;

const Info = styled.div`
  font-size: 12px;
  padding-left: 1rem;
  margin: 0.5rem;
  line-height: 1.8;
  word-break: keep-all;
`;

const ReportInputBox = styled.div`
  border: 1px solid #212121;
  margin-top: 1rem;
  text-align: center;
  height: 150px;
`;

const ReportInput = styled.textarea`
  width: 90%;
  height: 80%;
  border: none;
  margin: 15px;
  word-break: keep-all;

  :focus {
    outline: none;
  }
`;

const ReportButton = styled.button`
  outline: none;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: 30px;
  width: 90px;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: ${(props) => props.mainColor};
`;

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
  background: ${(props) => props.mainColor};
  border-radius: 4px;
  outline: none;
`;

const ModalText = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
  color: var(--text-second);
`;

const Feedback = ({ history }) => {
  const dispatch = useDispatch();

  const colors = useSelector((state) => state.user.colors);

  const [inputText, setInputText] = useState('');
  const onTextChange = (e) => {
    setInputText(e.target.value);
  };

  const sendFeedback = () => {
    dispatch(feedback(inputText));
    setInputText('');
    setModal();
  };

  const [openModal, setOpenModal] = useState(false);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  const movePage = (page) => {
    history.push(`/${page}`);
  };

  console.log(`#${colors && colors[0]}`);

  return (
    <>
      <Responsive>
        <SubTitle
          title={'의견 보내기'}
          back={true}
          backPage={() => movePage('setting')}
        />
        <ContentBox>
          <InfoBox>
            <Info>
              다행 서비스를 사용하면서 부족하거나 아쉬운 점을 발견하셨다면,
              망설이지 말고 의견을 보내주세요!
            </Info>
            <Info>소중한 의견으로 더욱 행복한 다행이 됩니다 :)</Info>
          </InfoBox>
          <ReportInputBox>
            <ReportInput
              onChange={onTextChange}
              value={inputText}
            ></ReportInput>
          </ReportInputBox>
          <ReportButton
            onClick={sendFeedback}
            mainColor={`#${colors && colors[0]}`}
          >
            의견 보내기
          </ReportButton>
        </ContentBox>
        <Modal
          className="popup"
          openModal={openModal}
          setModal={setModal}
          title={<ModalTitle>의견이 잘 전달되었어요!</ModalTitle>}
          content={<ModalText>앞으로도 많은 이용부탁드립니다 :)</ModalText>}
          button={
            <ModalButton
              onClick={setModal}
              mainColor={`#${colors && colors[0]}`}
            >
              확인
            </ModalButton>
          }
        />
      </Responsive>
    </>
  );
};

export default Feedback;
