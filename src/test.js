import axios from './axios';

axios
  .get('/user?id = 12345')
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });

console.log('hallo!');
