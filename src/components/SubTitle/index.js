import React from 'react';
import styled from 'styled-components';

const SubTitleBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  margin: 0 auto;
  padding-top: 1rem;
`;

//styled(Responsive) ?
const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
`;

const SubTitle = ({ title }) => {
  return (
    <SubTitleBlock>
      <Wrapper>{title}</Wrapper>
    </SubTitleBlock>
  );
};

export default SubTitle;
