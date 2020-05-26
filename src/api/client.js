import axios from 'axios';

//axios 인스턴스 생성
const client = axios.create();

//API address
client.defaults.baseURL = '';

//header
//client.defaults.headers.commom['Authorization'] = '';

//intercepter
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
