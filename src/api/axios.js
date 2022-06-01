import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.124.248.38:8080/api',
  headers: {
    'Content-type': 'application/json',
  },
});

export default instance;
