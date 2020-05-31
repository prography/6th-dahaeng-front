import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0 auto;
  border: 1px;
`;

const InputWrapper = styled.div`
  padding: 30px 0;
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
const CheckboxWrapper = styled.div`
  padding-top: 12px;
  height: 36px;
  text-align: right;

  label {
    cursor: pointer;
  }
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
    border: 1px solid #ff9d73;
    color: #4d4d4d;
  }
  &::placeholder {
    color: #bbbbbb;
  }
`;

const ButtonBox = styled.div`
  flex: 1;
  margin-left: 'none';
  width: '100%';

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Button = styled.button`
  outline: none;
  background: #ff9d73;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  height: '3rem';
  width: 100%;
  margin-top: 1em;
`;

const Checkbox = styled.input`
  &:checked {
    color: #ffffff;
    background: #ff9d73;
  }
`;

const textMap = {
  login: '로그인',
  sign: '회원가입',
};

const AuthForm = ({
  type,
  form,
  onEmailChange,
  onPwChange,
  onPwConfirmChange,
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
          flexDirection: 'column',
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
            <Input
              name="username"
              placeholder="이메일을 입력해주세요"
              onChange={onEmailChange}
              value={form.username}
            ></Input>

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
              onChange={onPwChange}
              value={form.password}
            ></Input>

            <LabelWrapper>
              <KeyText>비밀번호 확인</KeyText>
              {status.pwd_ok === 'empty' ? null : (
                <ErrorMessage>{status.pwd_ok}</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              name="passwordConfirm"
              placeholder="비밀번호 확인할게요"
              type="password"
              onChange={onPwConfirmChange}
              value={form.passwordConfirm}
            ></Input>
          </InputBox>

          {/* 체크박스를 만들어보자 */}
          <CheckboxWrapper>
            <KeyText>
              <Checkbox id="agreeCheck" type="checkbox" />
              <label for="agreeCheck">
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </KeyText>
          </CheckboxWrapper>
        </InputWrapper>

        <ButtonBox>
          <Button sign={type}>회원가입</Button>
        </ButtonBox>
      </form>
    </Wrapper>
  );
};

export default AuthForm;
