import React, { useState } from 'react';
import styled from 'styled-components';
import MainJoraeng from '../../components/Joraeng/MainJoraeng';
import { useSelector } from 'react-redux';

//Modal
const Wrapper = styled.div`
  margin: 0 auto;
  height: 350px;
  max-width: 664px;
  position: relative;

  @media screen and (max-width: 480px) {
    height: 220px;
  }
  @media screen and (max-width: 440px) {
    height: 200px;
  }
`;

const Character = styled.button`
  position: absolute;
  right: 100px;
  width: 160px;
  z-index: 2;
  top: 40px;
  @media screen and (max-width: 480px) {
    right: 70px;
    top: 20px;
    width: 100px;
  }
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
  width: 100%;

  @media (min-width: 481px) and (max-width: 520px) {
    bottom: 50px;
  }
  @media screen and (max-width: 380px) {
    bottom: 10px;
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
`;

const Etc = styled.div``;

const EtcImg = styled.img`
  width: 100%;
`;

//hasItems: 서버에서 받아온 실제 착용한 아이템, applyItems: 옷장에서 테스팅해볼 아이템
const Room = ({
  history,
  hasItems,
  applyItems,
  mainColor,
  thirdColor,
  closet,
}) => {
  const user = useSelector((state) => state.user.user);
  const colors = useSelector((state) => state.user.colors);

  return (
    <Wrapper>
      <Character>
        {/*TODO: Dynamic color binding*/}
        <MainJoraeng
          age={user.jorang_status}
          mainColor={
            closet && applyItems ? applyItems.color.detail : colors[0]
            // //`#${
            //   hasItems &&
            //   hasItems
            //     .filter((item) => item.item.item_type === 'jorang_color')
            //     .filter((item) => item.is_worn === true)[0].item.item_detail
            // }`
          }
          thirdColor={
            closet && applyItems ? applyItems.color.detail : colors[2]
          }
        />
      </Character>
      <Background>
        {closet && applyItems ? (
          <BackgroundImg
            src={require(`../../assets/item/background/${
              applyItems && applyItems.background.detail
            }.png`)}
            alt=""
          />
        ) : (
          <BackgroundImg
            src={require(`../../assets/item/background/${
              hasItems && hasItems.background.detail
            }.png`)}
            alt=""
          />
        )}
      </Background>
      <Etc>
        {closet && applyItems ? (
          <EtcImg
            src={require(`../../assets/item/etc/${
              applyItems && applyItems.etc.detail
            }.png`)}
            alt=""
          />
        ) : (
          <EtcImg
            src={require(`../../assets/item/etc/${
              hasItems && hasItems.etc.detail
            }.png`)}
            alt=""
          />
        )}
      </Etc>
    </Wrapper>
  );
};

export default Room;
