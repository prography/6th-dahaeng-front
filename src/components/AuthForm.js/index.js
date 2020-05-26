import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0 auto;
  border: 1px;
  width: 30%;
`;

const InputBox = styled.div`
  flex: 3;
`;
const KeyText = styled.div`
  font-size: 10px;
  margin: 0.2rem 0;
`;
const Input = styled.input`
  width: 100%;
  font-size: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  outline: none;
  &:focus {
    border: 1px solid orange;
  }
`;

const Button = styled.button`
  flex: 1;
  outline: none;
  background: orange;
  font-size: 12px;
  color: white;
  margin-left: 3rem;
  height: 5rem;
  margin-top: 1.2rem;
`;

const Footer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const FooterContent = styled.span`
  font-size: 10px;
  text-decoration: none;
`;

const textMap = {
  login: '로그인',
  sign: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <Wrapper>
      <form onSubmit={onSubmit} style={{ width: '100%', display: 'flex' }}>
        <InputBox>
          <KeyText>아이디</KeyText>
          <Input
            name="username"
            placeholder="아이디"
            onChange={onChange}
            value={form.username}
          ></Input>
          <KeyText>비밀번호</KeyText>
          <Input
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          ></Input>

          {type === 'sign' && (
            <>
              <KeyText>비밀번호 확인</KeyText>
              <Input
                placeholder="비밀번호 확인"
                type="password"
                onChange={onChange}
                value={form.passwordConfirm}
              ></Input>
            </>
          )}
        </InputBox>
        <Button>내 행복에 로그인</Button>
      </form>
      {type === 'login' && (
        <Footer>
          <FooterContent>아이디/비밀번호찾기</FooterContent>
          <FooterContent>
            <Link to="/sign">회원가입</Link>
          </FooterContent>
        </Footer>
      )}
    </Wrapper>
  );
};

export default AuthForm;
