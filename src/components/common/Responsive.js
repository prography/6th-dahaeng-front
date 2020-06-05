import React from 'react';
import styled from 'styled-components';

const Responsive = styled.div`
  /* padding-left: 1rem;
  padding-right: 1rem; */
  max-width: 1024px;
  height: 100%;
  padding: 4rem 20px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    /* max-width: 200px; */
    /* 행복보관함 찌그러진다..! */
  }
`;

// const Responsive = ({ children, ...rest }) => {
//   //propr를 사용할 수 있도록 ...rest 를 사용하여 ResponsiveBlock에게 전달
//   return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
// };

export default Responsive;
