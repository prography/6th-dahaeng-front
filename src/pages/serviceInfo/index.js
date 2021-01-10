import React from 'react';
import SignResponsive from '../../components/common/SignResponsive';
import styled from 'styled-components';

const ContentBox = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 480px;
  margin-top: 4rem;
  text-align: center;
`;

const WaitTitle = styled.div`
  font-size: 18px;
  margin: 3rem;
`;
//todo)튜토리얼 넣을 부분
const ServiceInfo = () => {
  return (
    <>
      <SignResponsive>
        <ContentBox>
          <WaitTitle>아직 소개할 준비가 되지 않았어요,,</WaitTitle>
        </ContentBox>
      </SignResponsive>
    </>
  );
};

export default ServiceInfo;
