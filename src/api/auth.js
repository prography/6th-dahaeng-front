import client from './client';

export const login = ({ username, password }) => {
  client.post('', { username, password });
};

export const sign = ({ username, password }) => {
  client.post('', { username, password });
};

export const refresh = () => client.get('');
