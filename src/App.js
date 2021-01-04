import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import ReactGA from 'react-ga';
import Loading from './loading';

const Main = lazy(() => import('./pages/main'));
const Record = lazy(() => import('./pages/record'));
const Login = lazy(() => import('./pages/login'));
const Sign = lazy(() => import('./pages/sign'));
const SignComplete = lazy(() => import('./pages/signComplete'));
const EmailAuth = lazy(() => import('./pages/emailAuth'));
const Create = lazy(() => import('./pages/create'));
const Box = lazy(() => import('./pages/box'));
const Market = lazy(() => import('./pages/market'));
const Closet = lazy(() => import('./pages/closet'));
const Donation = lazy(() => import('./pages/donation'));
const ServiceInfo = lazy(() => import('./pages/serviceInfo'));
const Feedback = lazy(() => import('./pages/feedback'));
const SnsLogin = lazy(() => import('./components/SnsLogin.js'));
const Setting = lazy(() => import('./pages/setting'));

ReactGA.initialize('UA-17294375-01');
ReactGA.pageview(window.location.pathname + window.location.search);

const RNListener = () => {
  /** react native 환경에서만 가능 */
  let token = '';
  const listener = (event) => {
    token = event.data;
    //alert(token);
    localStorage.setItem('firebase', token);
  };

  // if (window.ReactNativeWebView) {
  //   /** ios */
  //   alert('ios');
  //   window.addEventListener('message', listener);
  //   localStorage.setItem('firebase', token);
  // }
  // if (document.ReactNativeWebView) {
  //   alert('android');
  //   document.addEventListener('message', listener);
  //   localStorage.setItem('firebase', token);
  // }
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    //alert('mobile');
    document.addEventListener('message', listener);
    window.addEventListener('message', listener);
  }
  return token;
};

function App() {
  return (
    <BrowserRouter>
      <RNListener></RNListener>
      {/* <Header></Header> */}
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/record" component={Record} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/sign" component={Sign} exact></Route>
          <Route path="/signComplete" component={SignComplete} exact></Route>
          <Route path="/emailAuth" component={EmailAuth} exact></Route>
          <Route path="/create" component={Create} exact></Route>
          <Route path="/box" component={Box} exact></Route>
          <Route path="/donation" component={Donation} exact></Route>
          <Route path="/market" component={Market} exact></Route>
          <Route path="/closet" component={Closet} exact></Route>
          <Route path="/serviceInfo" component={ServiceInfo} exact></Route>
          <Route path="/feedback" component={Feedback} exact></Route>
          <Route path="/setting" component={Setting} exact></Route>
          <Route
            path="/social/kakao_login_callback"
            component={SnsLogin}
          ></Route>
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
