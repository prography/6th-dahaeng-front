import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from 'pages/main';
import Login from 'pages/login';
import Header from 'components/header';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={Main} exact={true}></Route>
        <Route path="/login" component={Login}></Route>
        {/* <Route path={['/login', 'sign']} component={Login}></Route> */}
        <Route
          render={({ location }) => (
            <div>이 페이지는 존재하지 않습니다:{location.pathname}d</div>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
