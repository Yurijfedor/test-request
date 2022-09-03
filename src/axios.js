import axios from 'axios';

const instance = axios.create({
  baseURL: 'http//jsonplaceholder.tipycode.com',
});

export default instance;
