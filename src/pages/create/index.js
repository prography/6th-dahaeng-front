import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from 'store/auth';
import styled, { keyframes } from 'styled-components';
import SignResponsive from '../../components/common/SignResponsive';
import createJoraeng from '../../assets/joraeng/create-joraeng.png';

const CreateJoraengContentWrapper = styled.div`
  height: calc(100vh - 75px);
  width: calc(100vw - 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  word-break: keep-all;
  color: #212121;
`;

const Title = styled.div`
  font-size: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Content = styled.div`
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
`;

//왜 이 친구는 이렇게 크게 나오는 부분이지
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  max-height: 180px;
  width: 250px;
`;

const shakeAnimation = keyframes`
 0% { transform: translate(1px, 1px) rotate(0deg); }
 10% { transform: translate(-1px, -2px) rotate(-1deg); }
 20% { transform: translate(-3px, 0px) rotate(1deg); }
 30% { transform: translate(3px, 2px) rotate(0deg); }
 40% { transform: translate(1px, -1px) rotate(1deg); }
 50% { transform: translate(-1px, 2px) rotate(-1deg); }
 60% { transform: translate(-3px, 1px) rotate(0deg); }
 70% { transform: translate(3px, 1px) rotate(-1deg); }
 80% { transform: translate(-1px, -1px) rotate(1deg); }
 90% { transform: translate(1px, 2px) rotate(0deg); }
 100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const JoraengImg = styled.img`
  object-fit: cover;
  height: 130px;
  align-items: center;
  justify-content: center;

  animation: ${shakeAnimation} 1s;
  animation-iteration-count: 2;
`;

const InputBox = styled.div`
  margin: 1rem;
`;

const NicknameInput = styled.input`
  border: none;
  border-bottom: 2px solid #212121;
  text-align: center;
  padding: 4px 8px 6px;
  width: 200px;
`;

const LoginButton = styled.button`
  outline: none;
  background: ${(props) => props.color};
  font-size: 14px;
  color: white;
  border: none;
  height: 2.5rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Create = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const has_jorang = useSelector((state) => state.auth.has_jorang);
  const jorang_color = useSelector((state) => state.user.user.jorang_color);

  // Todo : useLocation.state.color 받아오기
  // console.log(useLocation().state);
  const colorArray = ['#A26C8F', '#F8DB5C', '#FF714D', '#73A38F', '#5CA1D2'];
  const [color, setColor] = useState('');

  useEffect(() => {
    if (has_jorang === true) {
      // history.push('/');
    }
  }, [has_jorang, history]);

  useEffect(() => {
    setColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
  }, []);

  const onChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length >= 8) {
      alert('경고!');
    }
  };

  const onSubmit = () => {
    console.log('submit');
    dispatch(create({ nickname: name, color: 'FFFFFF' }));
    // dispatch(create({ nickname: 'asd', ... }))
    //history.push('/');
  };

  return (
    <>
      <SignResponsive>
        <CreateJoraengContentWrapper>
          <Title>앗 뭐지?!</Title>
          <Content>
            <div>짜잔- 나만의 반려조랭이가 도착했어요!</div>
            <div>이름을 지어주고,</div>
            <div>얼른 조랭이를 만나러 가볼까요?</div>
          </Content>
          <ImageBox>
            <JoraengImg id="joraengImg" src={createJoraeng} alt="" />
          </ImageBox>
          <InputBox>
            <NicknameInput
              value={name}
              onChange={onChange}
              placeholder="조랭이 이름을 지어주세요!"
            />
          </InputBox>
          <Content>
            <div>매일 매일 행복을 기록하면, </div>
            <div>반려조랭이가 무럭무럭 자랍니다</div>
          </Content>
          <LoginButton onClick={onSubmit} color={color}>
            조랭이 만나러 가기
          </LoginButton>
        </CreateJoraengContentWrapper>
      </SignResponsive>
    </>
  );
};

export default Create;
