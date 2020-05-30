import client from './client';

export const getQuestion = () => {
  client.get('');
};

export const setRecord = ({ question, detail }) => {
  client.post('', { question: question, detail: detail });
};

// export const getRecords = ({ email, password }) => {
//   client.post('', { profile: { email: email, password: password } });
// };

export const getUser = () => client.get('');
