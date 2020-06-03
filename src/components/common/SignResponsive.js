import React from 'react';
import styled from 'styled-components';

const SignResponsive = styled.div`
  max-width: 480px;
  padding: 5vh 20px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 10px;
  }
`;

export default SignResponsive;
