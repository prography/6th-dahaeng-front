import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0 auto;
  border: 1px;
`;

const InputWrapper = styled.div`
  padding: 30px 0;
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
  margin-left: ${(props) => (props.sign === 'sign' ? 'none' : '3rem')};
  width: ${(props) => (props.sign === 'sign' ? '100%' : '120px')};

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
  height: ${(props) => (props.sign === 'sign' ? '3rem' : '5.8rem')};
  width: 100%;
  margin-top: 1em;
`;

const Checkbox = styled.input`
  &:checked {
    color: #ffffff;
    background: #ff9d73;
  }
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

const textMap = {
  login: '로그인',
  sign: '회원가입',
};

const AuthForm = ({
  type,
  form,
  onChange,
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
          flexDirection: `${type === 'login' ? 'row' : 'column'}`,
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

          {/* 로그인창일 때와 회원가입창일 때 onChange 함수 차이 생김 */}
          {type === 'login' && (
            <>
              <Input
                name="username"
                placeholder="이메일을 입력해주세요"
                onChange={onChange}
                value={form.username}
              ></Input>
            </>
          )}
          {type === 'sign' && (
            <>
              <Input
                name="username"
                placeholder="이메일을 입력해주세요"
                onChange={onEmailChange}
                value={form.username}
              ></Input>
            </>
          )}

          <LabelWrapper>
            <KeyText>비밀번호</KeyText>
            {status.pwd === 'empty' ? null : (
              <ErrorMessage>{status.pwd}</ErrorMessage>
            )}
          </LabelWrapper>
          {type === 'login' && (
            <>
              <Input
                name="password"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                onChange={onChange}
                value={form.password}
              ></Input>
            </>
          )}
          {type === 'sign' && (
            <>
              <Input
                name="password"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                onChange={onPwChange}
                value={form.password}
              ></Input>
            </>
          )}

          {type === 'sign' && (
            <>
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
            </>
          )}
        </InputBox>

        {/* 체크박스를 만들어보자 */}
        {type === 'sign' && (
          <CheckboxWrapper>
            <KeyText>
              <Checkbox id="agreeCheck" type="checkbox" />
              <label for="agreeCheck">
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </KeyText>
          </CheckboxWrapper>
        )}
      </InputWrapper>

        <ButtonBox sign={type}>
          {type === 'login' ? (
            <Button sign={type} onClick={onSubmit}>
              내 행복에
              <br /> 로그인
            </Button>
          ) : (
            <Button sign={type}>회원가입</Button>
          )}
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
