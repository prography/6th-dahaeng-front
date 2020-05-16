import React from 'react';
import styled from 'styled-components';
import Link from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0;
  border: 1px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
`;

const Button = styled.button`
  border: none;
  background: blue;
`;

const Footer = styled.div`
  border: 1px blue;
`;

const textMap = {
  login: '로그인',
  sign: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <Wrapper>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <Input
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        ></Input>
        <Input
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        ></Input>
        {type === 'sign' && (
          <Input
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          ></Input>
        )}
        <Button></Button>
      </form>
      {/* <Footer>
        {type === 'sign' ? (
          <Link to="/sign">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer> */}
    </Wrapper>
  );
};

export default AuthForm;
