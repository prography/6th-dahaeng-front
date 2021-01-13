import React from 'react';
import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import FloatingButton from '../../components/MainFloatingButton';
import SubTitle from '../../components/SubTitle';

const Notice = ({ history }) => {
  const movePage = (prevPage) => {
    history.push(`/${prevPage}`);
  };

  return (
    <>
      <FloatingButton history={history} />
      <Responsive>
        <SubTitle
          title={'공지사항'}
          back={true}
          backPage={() => movePage('')}
        ></SubTitle>
      </Responsive>
    </>
  );
};

export default Notice;
