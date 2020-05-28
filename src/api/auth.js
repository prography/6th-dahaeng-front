import client from './client';

export const login = ({ email, password }) => {
  client.post('', { email: email, password: password });
};

export const sign = ({ email, password }) => {
  client.post('', { profile: { email: email, password: password } });
};

export const getUser = () => client.get('');
