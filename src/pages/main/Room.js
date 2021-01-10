import React from 'react';
import styled from 'styled-components';
import MainJoraeng from '../../components/Joraeng/MainJoraeng';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding-top: 4rem;
`;
const Character = styled.div`
  min-width: 114px;
  width: 30%;
  z-index: 2;
  margin: 0 auto;
  bottom: -20px;
  position: relative;
`;
const Background = styled.div`
  z-index: 1;
  width: 40%;
  margin: 0 auto;
`;
const BackgroundImg = styled.img`
  width: 100%;
`;
const Etc = styled.div``;
const EtcImg = styled.img`
  width: 100%;
`;

//hasItems: 서버에서 받아온 실제 착용한 아이템, applyItems: 옷장에서 테스팅해볼 아이템
const Room = ({ hasItems, applyItems, closet }) => {
  const user = useSelector((state) => state.user.user);
  const colors = useSelector((state) => state.user.colors);

  return (
    <Wrapper>
      <Character>
        <MainJoraeng
          age={user.jorang_status}
          mainColor={
            closet && applyItems.length > 0
              ? `#${applyItems.color.detail}`
              : `#${colors[0]}`
          }
          thirdColor={
            closet && applyItems.length > 0
              ? `#${applyItems.color.detail}`
              : `#${colors[2]}`
          }
        />
      </Character>
      <Background>
        {closet && applyItems.length > 0 ? (
          <BackgroundImg
            src={require(`../../assets/item/background/${
              applyItems && applyItems.background.detail
            }.png`)}
            alt=""
          />
        ) : hasItems && hasItems.background ? (
          <BackgroundImg
            src={require(`../../assets/item/background/${hasItems.background.detail}.png`)}
            alt=""
          />
        ) : (
          <BackgroundImg
            src={require(`../../assets/item/background/background-ground.png`)}
            alt=""
          />
        )}
      </Background>
      <Etc>
        {closet && applyItems.length > 0 && applyItems.etc ? (
          <EtcImg
            src={require(`../../assets/item/etc/${
              applyItems && applyItems.etc.detail
            }.png`)}
            alt=""
          />
        ) : hasItems && hasItems.etc ? (
          <EtcImg
            src={require(`../../assets/item/etc/${hasItems.etc.detail}.png`)}
            alt=""
          />
        ) : null}
      </Etc>
    </Wrapper>
  );
};

export default Room;
