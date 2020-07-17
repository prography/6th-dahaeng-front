import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import ReactGA from 'react-ga';
import Loading from './loading';

const Main = lazy(() => import('./pages/main'));
const Login = lazy(() => import('./pages/login'));
const Sign = lazy(() => import('./pages/sign'));
const SignComplete = lazy(() => import('./pages/signComplete'));
const Create = lazy(() => import('./pages/create'));
const Box = lazy(() => import('./pages/box'));
const Market = lazy(() => import('./pages/market'));
const Closet = lazy(() => import('./pages/closet'));
const Donation = lazy(() => import('./pages/donation'));

ReactGA.initialize('UA-17294375-01');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/sign" component={Sign} exact></Route>
          <Route path="/signComplete" component={SignComplete} exact></Route>
          <Route path="/create" component={Create} exact></Route>
          <Route path="/box" component={Box} exact></Route>
          <Route path="/donation" component={Donation} exact></Route>
          <Route path="/market" component={Market} exact></Route>
          <Route path="/closet" component={Closet} exact></Route>
          {/* <Route path={['/login', 'sign']} component={Login}></Route> */}
          <Route
            render={({ location }) => (
              <div>이 페이지는 존재하지 않습니다:{location.pathname}</div>
            )}
          ></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
