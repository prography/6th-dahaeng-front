import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import './MainFloatingButton.css';

const FloatingButton = ({ history }) => {
  const [buttonOpenStatus, updateButtonOpenStatus] = useState(false);

  const toggleFloatingButtonStatus = () => {
    updateButtonOpenStatus(!buttonOpenStatus);
  };

  useEffect(() => {
    if (buttonOpenStatus) {
      anime({
        targets: '.floatingButton__subButton',
        translateY: anime.stagger([-65, -195]),
        opacity: [0, 1],
        duration: anime.stagger([400, 800]),
      });
    } else {
      anime({
        targets: '.floatingButton__subButton',
        translateY: 0,
        opacity: 0,
        duration: anime.stagger([400, 800]),
      });
    }
  }, [buttonOpenStatus]);

  function navigateClosetPage() {
    history.push('/closet');
  }

  // function navigateNoticePage() {
  //   history.push('/notice');
  // }

  function navigateMainPage() {
    history.push('/');
  }

  return (
    <React.Fragment>
      <div
        className="floatingButton__mainButton"
        onClick={() => {
          toggleFloatingButtonStatus();
        }}
      >
        <img
          alt="floating button icon"
          className="buttonImage"
          src={require('./floating-icon.png')}
        />
      </div>
      <div
        className="floatingButton__subButton"
        id="floatingButton1"
        onClick={navigateMainPage}
      >
        <img
          alt="floating button icon"
          className="buttonImage"
          src={require('./floating-home.png')}
        />
      </div>
      <div
        className="floatingButton__subButton"
        id="floatingButton2"
        onClick={navigateClosetPage}
      >
        <img
          alt="floating button icon"
          className="buttonImage"
          src={require('./floating-closet.png')}
        />
      </div>
      <div className="floatingButton__subButton" id="floatingButton3">
        <img
          alt="floating button icon"
          className="buttonImage"
          src={require('./floating-notice.png')}
        />
      </div>
    </React.Fragment>
  );
};

export default FloatingButton;
