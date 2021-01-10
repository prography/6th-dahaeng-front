import React, { useState } from 'react';
import styled from 'styled-components';
import Moment from 'moment';

import placeholderImage from '../../assets/joraeng/thread-placeholder.png';
import deleteIcon from '../../assets/icon/deleteicon.png';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 1.5rem;
  background-color: white;
  box-shadow: var(--card-shadow);
  border: 3px solid #212121;
  padding: 0.5rem;

  position: relative;
`;

const TitleBox = styled.div`
  width: 100%;
  padding: 1rem 1rem 0 1rem;
`;

const Date = styled.div`
  font-size: 18px;
  margin-bottom: 0.5rem;
  flex: 1;
`;

const Question = styled.div`
  font-size: 18px;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > span {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 50%,
      ${(props) => props.thirdColor} 50%
    );
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
`;

const CharacterBox = styled.div`
  box-sizing: border-box;
  text-align: center;
  margin: 5% auto;
  border: 2px solid #212121;
  width: 7rem;
  height: 7rem;
  overflow: hidden;
`;

const CharacterImg = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = styled.textarea`
  box-sizing: border-box;
  height: 7rem;
  outline: none;
  border: none;
  resize: none;

  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(
      white,
      white 30px,
      #212121 31px,
      #212121 31px,
      white 32px
    );
  line-height: 31px;
  padding: 8px 10px;
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
  background-color: #ffffff;

  position: absolute;
  right: 0;
  bottom: 0;
`;

const DropdownButton = styled.button`
  height: 32px;
  width: 38px;
  padding: 7px 4px 4px 4px;
  background: transparent;
`;

const DropdownIcon = styled.img`
  height: 14px;
`;

const DropdownList = styled.div`
  position: absolute;
  bottom: -28px;
  right: 0;

  z-index: 2;

  box-shadow: var(--card-shadow);
  background-color: #ffffff;
`;

const DropdownOption = styled.button`
  width: 72px;
  height: 32px;
  text-align: center;

  line-height: 24px;
  padding: 4px;
  border: none;
  color: #212121;
  font-size: 14px;
`;

const ThreadBox = ({ record, setModal }) => {
  // todo : 키워드 컬러 바꾸기
  // const keywordValue = input.value;
  // console.log(keywordValue);
  const [openDropdown, setOpenDropdown] = useState(false);

  const colors = useSelector((state) => state.user.colors);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <Wrapper>
      <TitleBox>
        <Date>{Moment(record.created_at).format('MM-DD')}</Date>
        <Question>
          <span thirdColor={`#${colors && colors[2]}`}>{record.question}</span>
        </Question>
      </TitleBox>
      <ContentBox>
        <CharacterBox>
          <CharacterImg
            src={record.image === null ? placeholderImage : record.image}
            alt=""
          />
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
