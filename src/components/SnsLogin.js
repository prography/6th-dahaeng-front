import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../store/auth';
//import { meRequestAction } from '../store/actions/User';

const SnsLogin = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.profile_id);

  const url = window.location.search;
  const searchParams = new URLSearchParams(url);
  const token = searchParams.get('code');

  useEffect(() => {
    const email = '';
    const password = '';
    //dispatch(login({ email, password, sns }));
    localStorage.setItem('record_id', null);
    //dispatch(login(code));
    //dispatch(meRequestAction());
  }, [dispatch]);

  return (
    <div>
      {token ? (
        <Redirect to="/"></Redirect>
      ) : (
        <div className="loading">
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
};

export default SnsLogin;
