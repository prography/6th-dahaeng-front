import React, { useState } from 'react';
import styled from 'styled-components';

import backIcon from 'assets/icon/backicon.png';

const NoticeField = styled.div`
  height: 54px;
  max-width: calc(768px - 2rem);
  padding: 0.5rem;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
`;

const NoticeTitle = styled.div`
  /* width: 100%; */
  padding-left: 1rem;
  padding-right: 1rem;
  flex: 1;
`;

const NoticeDate = styled.div`
  flex: none;
  font-size: 12px;
  color: var(--text-third);

  padding-right: 2rem;
`;

const NoticeButton = styled.button`
  position: absolute;
  right: 5px;
  padding-top: 6px;
`;

const NoticeIcon = styled.img`
  width: 8px;

  transform: ${(props) =>
    props.className === 'open-content' ? 'rotate(270deg)' : 'rotate(90deg)'};
  transition: 0.25s ease-in-out;
`;

const NoticeContentField = styled.div`
  min-height: 200px;
  max-width: calc(768px - 2rem - 70px);
`;

const NoticeContent = styled.div`
  font-size: 14px;
  margin: 1.5rem 2rem;
`;

const Notice = ({ key, notice }) => {
  const [openNotice, setOpenNotice] = useState(false);
  const setNotice = () => {
    setOpenNotice(!openNotice);
  };

  return (
    <>
      <NoticeField>
        <NoticeTitle>{notice.title}</NoticeTitle>
        <NoticeDate>{notice.created_at}</NoticeDate>
        <NoticeButton onClick={setNotice}>
          <NoticeIcon
            className={openNotice ? 'open-content' : null}
            src={backIcon}
            alt=""
          />
        </NoticeButton>
      </NoticeField>
      {openNotice ? (
        <NoticeContentField>
          <NoticeContent>{notice.content}</NoticeContent>
        </NoticeContentField>
      ) : null}
    </>
  );
};

export default Notice;
