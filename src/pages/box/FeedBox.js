import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'store/user';
import { deleteRecord } from 'store/box';
import placeholderImage from '../../assets/joraeng/thread-placeholder.jpeg';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Moment from 'moment';

import deleteIcon from '../../assets/icon/deleteicon.png';

const Wrapper = styled.div`
  box-shadow: var(--card-shadow);
  border-radius: var(--small-border-radius);
  background-color: #ffffff;

  position: relative;

  flex: 1 1 calc(33.3333% - 20px);
  min-width: 256px;
  max-width: calc(33.3333% - 20px);
  height: 392px;
  margin: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  @media (min-width: 612px) and (max-width: 1024px) {
    max-width: calc(50% - 20px);
  }
  @media (max-width: 612px) {
    max-width: inherit;
  }

  display: flex;
  flex-direction: column;

  cursor: pointer;
  transition: 0.125s ease-in-out;
  &:hover {
    background-color: var(--light-background);
  }
`;

const CharacterBox = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  flex: none;
`;

const CharacterImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

const ContentBox = styled.div`
  display: block;
  max-height: 100%;
`;

const Date = styled.div`
  font-size: 18px;
  padding: 0.5rem 1rem 0;
  flex: none;
`;

const Question = styled.div`
  font-size: 18px;
  padding: 0.5rem 1rem;

  & > span {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      var(--secondary-color) 40%
    );
  }

  flex: none;
`;

const Detail = styled.div`
  flex: 1;
  font-size: 14px;
  padding: 0.5rem 1rem;
  align-items: center;

  word-break: break-all;
  flex: 1;
`;

const DropdownWrapper = styled.div`
  width: 38px;
  border-radius: 4px;

  position: absolute;
  right: 0;
  bottom: 0;
  /* max-width: 96px;
  max-height: 64px; */
`;

const DropdownOpenWrapper = styled.div`
  width: 38px;
  border-radius: 4px;
  background-color: var(--light-background);

  position: absolute;
  right: 0;
  bottom: 0;
  /* max-width: 96px;
  max-height: 64px; */
`;

const DropdownButton = styled.button`
  height: 32px;
  width: 38px;
  padding: 7px 4px 4px 4px;
  background: transparent;

  cursor: pointer;
`;

const DropdownIcon = styled.img`
  height: 14px;
`;

const DropdownList = styled.div`
  position: absolute;
  bottom: -32px;
  right: 0;

  z-index: 2;

  box-shadow: var(--card-shadow);
  border-radius: var(--small-border-radius);
  background-color: #ffffff;
`;

const DropdownOption = styled.button`
  width: 72px;
  height: 32px;
  text-align: center;

  line-height: 24px;
  padding: 4px;
  border: none;
  color: var(--text-second);
  font-size: 14px;

  cursor: pointer;
`;

const checkTitleLength = (text) => {
  if (text.length >= 20) {
    return text.substr(0, 20) + '...';
  } else {
    return text;
  }
};

const checkDetailLength = (text) => {
  if (text.length >= 120) {
    return text.substr(0, 60) + '...';
  } else {
    return text;
  }
};

const FeedBox = ({ record, setModal }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <>
      <Wrapper>
        <CharacterBox>
          <CharacterImg
            alt=""
            src={record.image === null ? placeholderImage : record.image}
          />
        </CharacterBox>
        <ContentBox>
          <Date>{Moment(record.created_at).format('MM-DD')}</Date>
          <Question>{checkTitleLength(record.question)}</Question>
          <Detail>{checkDetailLength(record.detail)}</Detail>
        </ContentBox>
        {openDropdown ? (
          <>
            <DropdownOpenWrapper status={openDropdown}>
              <DropdownButton onClick={toggleDropdown}>
                <DropdownIcon src={deleteIcon} alt="" />
              </DropdownButton>
            </DropdownOpenWrapper>
            <DropdownList>
              <DropdownOption onClick={() => setModal(record.id)}>
                삭제하기
              </DropdownOption>
            </DropdownList>
          </>
        ) : (
          <>
            <DropdownWrapper status={openDropdown}>
              <DropdownButton onClick={toggleDropdown}>
                <DropdownIcon src={deleteIcon} alt="" />
              </DropdownButton>
            </DropdownWrapper>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default FeedBox;
