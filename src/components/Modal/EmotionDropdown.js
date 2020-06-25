import React, { Component, useState } from 'react';
import styled from 'styled-components';

import blueEmotion from '../../assets/joraeng/category-joraeng/category-blue.jpg';
import purpleEmotion from '../../assets/joraeng/category-joraeng/category-purple.jpg';
import redEmotion from '../../assets/joraeng/category-joraeng/category-red.jpg';
import whiteEmotion from '../../assets/joraeng/category-joraeng/category-white.jpg';
import yellowEmotion from '../../assets/joraeng/category-joraeng/category-yellow.jpg';
import downArrow from '../../assets/icon/downarrow.jpg';

const DropdownWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  max-height: 32px;
  overflow: hidden;

  max-height: ${(props) =>
    props.className === 'open-list' ? '193px' : '32px'};
  transition: 0.25s ease-in-out;
`;

const DropdownButton = styled.button`
  width: 48px;
  height: 32px;
  position: relative;
  padding: 4px 12px 4px 4px;
  border: 1px solid var(--text-fourth);
  background: transparent;
  cursor: pointer;
`;

const DropdownTriangle = styled.img`
  position: absolute;
  right: 5px;
  top: 12px;
  width: 7px;
  transform: ${(props) =>
    props.className === 'open-list' ? 'rotate(180deg)' : 'none'};
  transition: 0.25s ease-in-out;
`;

const DropdownList = styled.div`
  border: 1px solid var(--text-fourth);
  border-top: none;
  transition: 0.25s ease-in-out;
`;

const DropdownElement = styled.button`
  width: 48px;
  height: 32px;
  padding: 4px 12px 4px 4px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const DropdownEmotion = styled.img`
  width: 21px;
`;

const EmotionArray = [
  yellowEmotion,
  blueEmotion,
  purpleEmotion,
  redEmotion,
  whiteEmotion,
];

class EmotionDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownState: false,
      dropdownValue: 0,
    };
  }

  toggleDropdown = () => {
    this.setState({
      dropdownState: !this.state.dropdownState,
    });
  };

  updateValue = async (value) => {
    await this.setState({
      dropdownValue: value,
    });
    this.toggleDropdown();
    this.emitStatus();
  };

  emitStatus = () => {
    this.props.updateDropdownValue(this.state.dropdownValue)
  };

  render() {
    return (
      <DropdownWrapper
        className={this.state.dropdownState ? 'open-list' : null}
      >
        <DropdownTriangle
          src={downArrow}
          alt=""
          className={this.state.dropdownState ? 'open-list' : null}
        />
        <DropdownButton onClick={this.toggleDropdown}>
          <DropdownEmotion
            src={EmotionArray[this.state.dropdownValue]}
            alt=""
          />
        </DropdownButton>
        <DropdownList>
          {EmotionArray.map((emotion, index) => (
            <DropdownElement
              key={index}
              onClick={(e) => this.updateValue(index)}
            >
              <DropdownEmotion src={emotion} alt="" />
            </DropdownElement>
          ))}
        </DropdownList>
      </DropdownWrapper>
    );
  }
}

export default EmotionDropdown;
