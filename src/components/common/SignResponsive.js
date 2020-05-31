import React from 'react';
import styled from 'styled-components';

const SignResponsive = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 5vh 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export default SignResponsive;
