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
  flex: 1;
`;
const KeyText = styled.div`
  font-size: 14px;
  color: #4d4d4d;
  margin: 0.2rem 0;
  height: 1rem;
`;
const Input = styled.input`
  width: 100%;
  font-size: 14px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 0.5rem;
  outline: none;
  &:focus {
    border: 1px solid #ff9d73;
  }
  &::placeholder {
    color: #bbbbbb;
  }
`;

const ButtonBox = styled.div`
  flex: 1;
  margin-left: 3rem;
`;

const Button = styled.button`
  outline: none;
  background: #ff9d73;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: 5.8rem;
  width: 100%;
  margin-top: 1.4rem;
`;

const Footer = styled.div`
  display: flex;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9e9e9;
`;

const FooterContent = styled.span`
  font-size: 14px;
  color: #4d4d4d;
  text-decoration: none;
  margin-right: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, status }) => {
  return (
    <Wrapper>
      <form
        onSubmit={onSubmit}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: `${type === 'login' ? 'row' : 'column'}`,
        }}
      >
        <InputBox>
          <KeyText>이메일</KeyText>
          <Input
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChange}
            value={form.email}
          ></Input>
          {status === 'ok' ? null : <div>not ok</div>}
          <KeyText>비밀번호</KeyText>
          <Input
            name="password"
            placeholder="비밀번호를 입력해주세요"
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
        <ButtonBox>
          <Button onClick={onSubmit}>
            내 행복에
            <br /> 로그인
          </Button>
        </ButtonBox>
      </form>
      {type === 'login' && (
        <Footer>
          <FooterContent>아이디/비밀번호찾기</FooterContent>
          <FooterContent>
            <Link
              to="/sign"
              style={{ textDecoration: 'none', color: '4D4D4D' }}
            >
              회원가입
            </Link>
          </FooterContent>
        </Footer>
      )}
    </Wrapper>
  );
};

export default AuthForm;
