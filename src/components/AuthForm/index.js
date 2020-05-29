import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0 auto;
  border: 1px;
  width: 30%;
`;

const InputBox = styled.div`
  flex: 3;
`;

const KeyText = styled.span`
  font-size: 14px;
  color: #4d4d4d;
  margin: 0.2rem 0;
  margin-top: 1.4rem;
  height: 1rem;
  float: left;
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
  margin-top: 1.4rem;
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
          {status.email === true ? null : (
            <ErrorMessage style={{ float: 'right' }}>
              이메일 형식이 올바르지 않습니다.
            </ErrorMessage>
          )}
          <Input
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChange}
            value={form.email}
          ></Input>

          <KeyText>비밀번호</KeyText>
          {status.pwd === true ? null : (
            <ErrorMessage style={{ float: 'right' }}>
              비밀번호 형식이 올바르지 않습니다.
            </ErrorMessage>
          )}
          <Input
            name="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            onChange={onChange}
            value={form.password}
          ></Input>}

          {type === 'sign' && (
            <>
              <KeyText>비밀번호 확인</KeyText>
              {status.pwd_ok === true ? null : (
                <ErrorMessage style={{ float: 'right' }}>
                  비밀번호와 일치하지 않습니다.
                </ErrorMessage>
              )}
              <Input
                name="passwordConfirm"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                onChange={onChange}
                value={form.passwordConfirm}
              ></Input>
            </>
          )}
        </InputBox>
<<<<<<< HEAD:src/components/AuthForm/index.js
        <ButtonBox>
          <Button onClick={onSubmit}>
            내 행복에
            <br /> 로그인
          </Button>
=======

        {/* 체크박스를 만들어보자 */}
        {type === 'sign' && (
<<<<<<< HEAD
          <KeyText style={{justifyContent: "flex-end"}}>
=======
          <KeyText>
>>>>>>> sign css
            <Checkbox id="agreeCheck" type="checkbox" />
            개인정보 수집 및 이용에 동의합니다.
          </KeyText>
        )}

        <ButtonBox sign={type}>
          {type === 'login' ? (
            <Button sign={type}>
              내 행복에
              <br /> 로그인
            </Button>
          ) : (
            <Button sign={type}>회원가입</Button>
          )}
>>>>>>> sign css:src/components/AuthForm.js/index.js
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
