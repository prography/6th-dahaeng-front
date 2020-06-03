import React from 'react';
import Room from './Room';
import Header from '../../components/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      메인 페이지
      <Room></Room>
    </div>

    //충돌난 부분
    // <>
    //   <Header></Header>
    //   <Wrapper>
    //     <QuestionBox>
    //       <Date>{question.date}</Date>
    //       <Question onClick={setModal}>{question.text}</Question>
    //     </QuestionBox>
    //     <Modal
    //       openModal={openModal}
    //       setModal={setModal}
    //       title={
    //         <ModalTitle>
    //           <Date>{question.date}</Date>
    //           <ModalQuestion>{question.text}</ModalQuestion>
    //         </ModalTitle>
    //       }
    //       content={
    //         <ModalContent>
    //           <ModalCharacter></ModalCharacter>
    //           <ModalInput value={inputText} onChange={onChange}></ModalInput>
    //         </ModalContent>
    //       }
    //       button={
    //         <ModalButton onClick={completeRecord}>행복 기록 완료</ModalButton>
    //       }
    //     ></Modal>
    //   </Wrapper>
    //   <Room></Room>
    // </>
  );
};

export default Main;
