import client from './client';

export const login = ({ email, password }) => {
  client.post(
    'http://ec2-52-79-232-8.ap-northeast-2.compute.amazonaws.com/login/',
    { email: email, password: password },
  );
};

export const sign = ({ email, password }) => {
  client.post(
    'http://ec2-52-79-232-8.ap-northeast-2.compute.amazonaws.com/signup/',
    { profile: { email: email, password: password } },
  );
};

export const getUser = () => client.get('');
