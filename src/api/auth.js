import client from './client';

export const login = ({ email, password }) => {
  const headerParams = {
    // 'Access-Control-Allow-Origin': '*',
  };

  client
    .post(
      'http://ec2-52-79-232-8.ap-northeast-2.compute.amazonaws.com/login/',
      { email: email, password: password },
      { headers: headerParams },
    )
    .then((res) => {
      return res;
    });
};

export const sign = ({ email, password }) => {
  const headerParams = {
    // 'Access-Control-Allow-Origin': '*',
  };

  const param = {
    profile: {
      email: email,
      password: password,
    },
  };
  client
    .post(
      'http://ec2-52-79-232-8.ap-northeast-2.compute.amazonaws.com/signup/',
      { param },
      { headers: headerParams },
    )
    .then((res) => {
      return res;
    });
};

export const create = ({ nickname, color }) => {
  const headerParams = {
    // 'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };

  client.post(
    'http://ec2-52-79-232-8.ap-northeast-2.compute.amazonaws.com/jorang_create/',
    { nickname: nickname, color: color },
    { headers: headerParams },
  );
};

export const getUser = () => client.get('');
