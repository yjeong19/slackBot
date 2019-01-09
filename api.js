const axios = require('axios');
require('dotenv').config();


const reply = (text) => {
  console.log('line 5 helpers: ', text);
  let channel = 'testing';
  let token = 'xoxb-407552542260-520440810311-S7DiYTLXBGhWp3OACze4svDs';
  const uri = 'https://slack.com/api/chat.postMessage?' +
  `token=${token}&` +
  `channel=${channel}&` +
  `text=${text}&` +
  'pretty=1';
  // console.log(token);
  return axios.post(uri)
};

module.exports = reply;
