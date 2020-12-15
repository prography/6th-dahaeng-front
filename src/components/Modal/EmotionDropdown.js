import React, { Component } from 'react';
import styled from 'styled-components';

import blueEmotion from '../../assets/joraeng/category-joraeng/category-blue.png';
import purpleEmotion from '../../assets/joraeng/category-joraeng/category-purple.png';
import redEmotion from '../../assets/joraeng/category-joraeng/category-red.png';
import greenEmotion from '../../assets/joraeng/category-joraeng/category-green.png';
import yellowEmotion from '../../assets/joraeng/category-joraeng/category-yellow.png';

const DropdownWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 32px;
  overflow: hidden;

  width: ${(props) => (props.className === 'open-list' ? '180px' : '32px')};
  transition: 0.25s ease-in-out;
`;

const DropdownButton = styled.button`
  width: 30px;
  height: 32px;
  position: relative;
  padding: 4px;
  background: transparent;
`;

const DropdownList = styled.div`
  position: relative;
  top: -32px;
  right: -32px;
  height: 32px;
  width: 180px;
  border-top: none;
  transition: 0.25s ease-in-out;
  background: #ffffff;
`;

const DropdownElement = styled.button`
  width: 30px;
  height: 32px;
  padding: 4px;
  border: none;
  background: transparent;
`;

const DropdownEmotion = styled.img`
  width: 23px;
`;

const EmotionArray = [
  yellowEmotion,
  blueEmotion,
  purpleEmotion,
  redEmotion,
  greenEmotion,
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
    this.props.updateDropdownValue(this.state.dropdownValue);
  };

  render() {
    return (
      <DropdownWrapper
        className={this.state.dropdownState ? 'open-list' : null}
      >
        <DropdownButton onClick={this.toggleDropdown}>
          <DropdownEmotion
            src={
              EmotionArray[
                this.props.dropdownState
                  ? this.state.dropdownState
                  : this.state.dropdownValue
              ]
            }
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
