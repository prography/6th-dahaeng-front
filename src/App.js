import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from 'pages/main';
import Login from 'pages/login';
import Sign from 'pages/sign';
import Slider from 'components/Slider';
// import Header from 'components/Header';

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Switch>
        <Route path="/" component={Main} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/sign" component={Sign} exact></Route>
        <Route path="/slider" component={Slider} exact></Route>
        {/* <Route path={['/login', 'sign']} component={Login}></Route> */}
        <Route
          render={({ location }) => (
            <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
