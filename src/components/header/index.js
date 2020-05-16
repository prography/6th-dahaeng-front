import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <span>
        <Link to="/">메인</Link>
        <Link to="/login">로그인</Link>
      </span>
    </div>
  );
};

export default Header;
