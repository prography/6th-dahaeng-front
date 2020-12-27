import React from 'react';
import styled from 'styled-components';

const SubTitleBlock = styled.div`
  /* position: fixed; */
  width: 100%;
  background: white;
  margin: 0 auto;
  //padding-top: 1rem;
`;

//styled(Responsive) ?
const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.div`
  font-size: 1.125rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  margin: 0 auto;
`;

const SubTitle = ({ title }) => {
  return (
    <SubTitleBlock>
      <Wrapper>
        <TitleText>{title}</TitleText>
      </Wrapper>
    </SubTitleBlock>
  );
};

export default SubTitle;
