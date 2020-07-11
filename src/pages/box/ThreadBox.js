import React, { useState } from 'react';
import styled from 'styled-components';
import Moment from 'moment';

import deleteIcon from '../../assets/icon/deleteicon.png';

const Wrapper = styled.div`
  width: 100%;
  height: 260px;
  margin: 0 auto;
  margin-top: 1.5rem;
  background-color: white;
  box-shadow: var(--card-shadow);
  border-radius: var(--small-border-radius);
  padding: 0.5rem;

  position: relative;
`;

const TitleBox = styled.div`
  width: 100%;
  padding: 1rem;
`;

const Date = styled.div`
  font-size: 18px;
  margin-bottom: 0.5rem;
  flex: 1;
`;

const Question = styled.div`
  font-size: 24px;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > span {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      var(--secondary-color) 40%
    );
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid; */
  padding: 0 1rem 1rem 1rem;
`;

const CharacterBox = styled.div`
  flex: none;
  box-sizing: border-box;
  width: 7rem;
  height: 7rem;
  border: 1px solid #e9e9e9;
  overflow: hidden;
  border-radius: var(--small-border-radius);
`;

const CharacterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = styled.textarea`
  box-sizing: border-box;
  height: 7rem;
  margin-left: 1rem;
  outline: none;
  border: none;
  resize: none;
  flex: 1;

  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 30px,
      #e9e9e9 30px,
      #e9e9e9 31px,
      white 31px
    );
  line-height: 31px;
  padding: 8px;
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

const ThreadBox = ({ record, setModal }) => {
  // todo : 키워드 컬러 바꾸기
  // const keywordValue = input.value;
  // console.log(keywordValue);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <Wrapper>
      <TitleBox>
        <Date>{Moment(record.created_at).format('MM-DD')}</Date>
        <Question>
          <span>{record.question}</span>
        </Question>
      </TitleBox>
      <ContentBox>
        <CharacterBox>
          <CharacterImg src={record.image} alt="" />
        </CharacterBox>
        <Detail disabled value={record.detail} />
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
  );
};

export default ThreadBox;
