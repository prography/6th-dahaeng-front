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
  background-color: ${(props) =>
    props.status === true ? 'var(--light-background)' : '#ffffff'};

  position: relative;

  flex: 1 1 calc(33.3333% - 3rem);
  min-width: 256px;
  max-width: calc(33.3333% - 3rem);
  height: 412px;
  margin: 1.5rem;
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
  overflow: hidden;

  position: absolute;
  right: 0px;
  bottom: 7px;

  /* max-width: 96px;
  max-height: 64px; */
  transition: 0.25s ease-in-out;
`;

const DropdownButton = styled.button`
  height: 32px;
  width: 38px;
  padding: 4px;
  background: transparent;

  cursor: pointer;
`;

const DropdownIcon = styled.img`
  height: 14px;
`;

const DropdownList = styled.div`
  border: 1px solid var(--secondary-color);
  position: absolute;
  bottom: -24px;
  right: -50px;

  transition: 0.25s ease-in-out;
`;

const DropdownOption = styled.button`
  width: 72px;
  height: 32px;
  text-align: center;

  line-height: 24px;
  padding: 4px;
  border: none;
  background: var(--light-background);
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

const FeedBox = ({ record }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const dispatch = useDispatch();

  const Delete = (id) => {
    dispatch(deleteRecord(id));
  };

  return (
    <>
      <Wrapper status={openDropdown}>
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
        <DropdownWrapper>
          <DropdownButton onClick={toggleDropdown}>
            <DropdownIcon src={deleteIcon} alt="" />
          </DropdownButton>
        </DropdownWrapper>
        {openDropdown ? (
          <DropdownList>
            <DropdownOption onClick={Delete(record.id)}>
              삭제하기
            </DropdownOption>
          </DropdownList>
        ) : null}
      </Wrapper>
    </>
  );
};

export default FeedBox;
