import React from 'react';
import styled from 'styled-components';

const SignFormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
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
const CheckboxWrapper = styled.div`
  padding-top: 12px;
  height: 36px;
  text-align: right;
  font-size: 10px;

  label {
    cursor: pointer;
  }
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
  &.error {
    border: 1px solid #fd5660;
  }
`;

const ButtonBox = styled.div`
  flex: 1;
  margin-left: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Button = styled.button`
  outline: none;
  background: ${(props) => props.color};
  font-size: 14px;
  color: white;
  border: none;
  height: 2.5rem;
  width: 100%;
  margin-top: 1em;
`;

const Checkbox = styled.input`
  &:checked {
    color: #ffffff;
    background: ${(props) => props.color};
  }
`;

//상황별 에러 메시지
const emailStatusEnum = {
  empty: '이메일은 필수 입력 사항입니다!',
  wrong: '이메일을 확인 해 주세요 ',
  valid: 'valid',
};

const pwStatusEnum = {
  empty: '비밀번호는 필수 입력 사항입니다!',
  wrong: '숫자와 영어로 8자 이상 입력해주세요',
  valid: 'valid',
};

const pwConfirmStatusEnum = {
  empty: '비밀번호 확인은 필수 입력 사항입니다!',
  wrong: '비밀번호가 일치하지 않아요!',
  valid: 'valid',
};

// const signLoadig = '처리중입니다.';

const SignAuthForm = ({
  type,
  form,
  onEmailChange,
  onPwChange,
  onPwConfirmChange,
  onSubmit,
  status,
  color,
}) => {
  return (
    <SignFormWrapper>
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
              {status.email !== 'wrong' ? null : (
                <ErrorMessage>{emailStatusEnum[status.email]}</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              name="email"
              placeholder="이메일을 입력해주세요"
              onChange={onEmailChange}
              value={form.email}
              className={status.email === 'wrong' ? 'error' : ''}
              color={color}
              // boolean값으로 받아올 때 왜 안되는지 생각해보기
            ></Input>

            <LabelWrapper>
              <KeyText>비밀번호</KeyText>
              {status.pwd !== 'wrong' ? null : (
                <ErrorMessage>{pwStatusEnum[status.pwd]}</ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              name="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              onChange={onPwChange}
              value={form.password}
              className={status.pwd === 'wrong' ? 'error' : ''}
              color={color}
            ></Input>

            <LabelWrapper>
              <KeyText>비밀번호 확인</KeyText>
              {status.pwd_ok !== 'wrong' ? null : (
                <ErrorMessage>
                  {pwConfirmStatusEnum[status.pwd_ok]}
                </ErrorMessage>
              )}
            </LabelWrapper>
            <Input
              name="passwordConfirm"
              placeholder="비밀번호 확인할게요"
              type="password"
              onChange={onPwConfirmChange}
              value={form.passwordConfirm}
              className={status.pwd_ok === 'wrong' ? 'error' : ''}
              color={color}
            ></Input>
          </InputBox>

          {/* 체크박스를 만들어보자 */}
          <CheckboxWrapper>
            <KeyText>
              <Checkbox id="agreeCheck" type="checkbox" color={color} />
              <label htmlFor="agreeCheck">
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </KeyText>
          </CheckboxWrapper>
        </InputWrapper>

        <ButtonBox>
          <Button color={color}>회원가입 완료</Button>
        </ButtonBox>
      </form>
    </SignFormWrapper>
  );
};

export default SignAuthForm;
