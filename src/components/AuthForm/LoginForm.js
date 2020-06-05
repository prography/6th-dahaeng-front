import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0 auto;
  border: 1px;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const InputBox = styled.div`
  flex: 3;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 12px;
  height: 36px;
`;

const KeyText = styled.div`
  font-size: 14px;
  flex: 1;
  color: #4d4d4d;
`;

const ErrorMessage = styled.div`
  flex: none;
  font-size: 12px;
  color: #fd5660;
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 0.5rem;
  outline: none;

  &:focus {
    border: 1px solid var(--primary-color);
    color: #4d4d4d;
  }
  &::placeholder {
    color: var(--text-second);
  }
`;

const ButtonBox = styled.div`
  margin-left: 1rem;
  width: 120px;
  flex: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Button = styled.button`
  outline: none;
  background: var(--primary-color);
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: 108px;
  width: 100%;
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

const LoginForm = ({
  form,
  onChange,
  onSubmit,
  status,
}) => {
  return (
    <Wrapper>
      <form
        onSubmit={onSubmit}
        style={{
          width: '100%',
          display: 'flex',
        }}
      >
        <InputWrapper>
        <InputBox>
          <LabelWrapper>
            <KeyText>이메일</KeyText>
            {status.email === 'empty' ? null : (
              <ErrorMessage>{status.email}</ErrorMessage>
            )}
          </LabelWrapper>
            <>
              <Input
                name="email"
                placeholder="이메일을 입력해주세요"
                onChange={onChange}
                value={form.email}
              ></Input>
            </>
          <LabelWrapper>
            <KeyText>비밀번호</KeyText>
            {status.pwd === 'empty' ? null : (
              <ErrorMessage>{status.pwd}</ErrorMessage>
            )}
          </LabelWrapper>
            <>
              <Input
                name="password"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                onChange={onChange}
                value={form.password}
              ></Input>
            </>
        </InputBox>
      </InputWrapper>

        <ButtonBox>
            <Button onClick={onSubmit}>
              내 행복에
              <br /> 로그인
            </Button>
        </ButtonBox>
      </form>

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
    </Wrapper>
  );
};

export default LoginForm;
