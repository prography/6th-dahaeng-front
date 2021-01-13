import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import FloatingButton from '../../components/MainFloatingButton';
import SubTitle from '../../components/SubTitle';
import NoticeContent from './NoticeContent';

const Wrapper = styled.div`
  padding-top: 4rem;
  height: calc(100vh - 64px);
  overflow: auto;
`;

const Notice = ({ history }) => {
  // const notices = useSelector((state) => state.user.notices);
  // notices 데이터
  const notices = [
    {
      id: 1,
      title: '첫 공지사항',
      created_at: '2020-01-14',
      content: '다행을 이용해주셔 감사합니다!',
    },
    {
      id: 2,
      title: '두번째 공지사항',
      created_at: '2020-01-14',
      content: '두번째 공지사항입니다.',
    },
  ];

  const movePage = (prevPage) => {
    history.push(`/${prevPage}`);
  };

  console.log(notices);

  return (
    <>
      <FloatingButton history={history} />
      <Responsive>
        <SubTitle
          title={'공지사항'}
          back={true}
          backPage={() => movePage('')}
        ></SubTitle>
        <Wrapper>
          {notices
            ? notices.reverse().map((notice) => {
                return (
                  <>
                    <NoticeContent
                      key={notice.id}
                      notice={notice}
                    ></NoticeContent>
                  </>
                );
              })
            : null}
        </Wrapper>
      </Responsive>
    </>
  );
};

export default Notice;
