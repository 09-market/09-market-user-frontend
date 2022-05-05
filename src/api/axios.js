import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.36.120.132:8080/api',
  headers: {
    'Content-type': 'application/json',
  },
});

export default instance;
