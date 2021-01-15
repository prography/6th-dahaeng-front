import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginFormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;

const InputButtonWrapper = styled.div`
  width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 12px;
  height: 36px;
`;

const KeyText = styled.div`
  font-size: 12px;
  flex: 1;
  color: #4d4d4d;
`;

const ErrorMessage = styled.div`
  flex: none;
  font-size: 10px;
  color: #fd5660;
`;

const Input = styled.input`
  width: 100%;
  font-size: 12px;
  border: 1px solid #e9e9e9;
  padding: 0.5rem;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.color};
    color: #4d4d4d;
  }
  &::placeholder {
    color: var(--text-third);
  }
`;

const LoginButton = styled.button`
  outline: none;
  background: ${(props) => props.color};
  font-size: 15px;
  color: white;
  border: none;
  margin-top: 15px;
  width: 100%;
  padding: 12px 0 13px;
  max-height: 2.5rem;
`;

const LoginFooter = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
`;

const FooterContent = styled.span`
  font-size: 14px;
  color: #9f9f9f;
`;

const LoginForm = ({ form, onChange, onSubmit, status, color }) => {
  return (
    <LoginFormWrapper>
      <form onSubmit={onSubmit}>
        <InputButtonWrapper>
          <LabelWrapper>
            <KeyText>이메일</KeyText>
            {status.email === 'empty' ? null : (
              <ErrorMessage>{status.email}</ErrorMessage>
            )}
          </LabelWrapper>
          <Input
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChange}
            value={form.email}
            color={color}
          />
          <LabelWrapper>
            <KeyText>비밀번호</KeyText>
            {status.pwd === 'empty' ? null : (
              <ErrorMessage>{status.pwd}</ErrorMessage>
            )}
          </LabelWrapper>
          <Input
            name="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            onChange={onChange}
            value={form.password}
            color={color}
          />
          <LoginButton onClick={onSubmit} color={color}>
            내 행복에 로그인
          </LoginButton>
        </InputButtonWrapper>
      </form>

      <LoginFooter>
        {/*<FooterContent>아이디/비밀번호찾기</FooterContent>*/}
        <FooterContent>
          <Link
            to={{
              pathname: '/sign',
              state: { color: color },
            }}
          >
            다행에 가입해서 함께 행복을 찾아보세요!
          </Link>
        </FooterContent>
      </LoginFooter>
    </LoginFormWrapper>
  );
};

export default LoginForm;
