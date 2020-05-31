import client from './client';

export const getQuestion = () => {
  client.get('');
};

export const setRecord = ({ question, detail }) => {
  client.post('', { question: question, detail: detail });
};

export const getRecords = ({ user }) => {
  console.log('getRecords');
  client.get('', { user: user });
};

export const getUser = () => client.get('');
