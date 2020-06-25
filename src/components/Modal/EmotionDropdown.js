import React, { Component } from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  max-height: 32px;
  overflow: hidden;

  max-height: ${(props) =>
    props.className === 'open-list' ? '193px' : '32px'};
  transition: 0.25s ease-in-out;
`;

const DropdownButton = styled.button`
  width: 42px;
  height: 32px;
  padding: 4px;
  border: 1px solid var(--text-fourth);
  background: transparent;
  cursor: pointer;
`;

const DropdownList = styled.div`
  border: 1px solid var(--text-fourth);
  border-top: none;
  transition: 0.25s ease-in-out;
`;

const DropdownElement = styled.button`
  width: 42px;
  height: 32px;
  padding: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const EmotionArray = [1, 2, 3, 4, 5];

class EmotionDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownState: false,
      dropdownValue: '바보',
    };
  }

  toggleDropdown = () => {
    this.setState({
      dropdownState: !this.state.dropdownState,
    });
  };

  render() {
    return (
      <DropdownWrapper
        className={this.state.dropdownState ? 'open-list' : null}
      >
        <DropdownButton onClick={this.toggleDropdown}>뇸</DropdownButton>
        <DropdownList>
          {EmotionArray.map((emotion, index) => (
            <DropdownElement key={index}>{emotion}</DropdownElement>
          ))}
        </DropdownList>
      </DropdownWrapper>
    );
  }
}

export default EmotionDropdown;
