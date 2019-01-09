require('dotenv').config();
const axios = require('axios');


const reply = (text) => {
  // console.log(id);
  let channel = 'testing';
  let token = process.env.TOKEN;
  console.log(token);
  const uri = 'https://slack.com/api/chat.postMessage?' +
  `token=${token}&` +
  `channel=${channel}&` +
  `text=${text}&` +
  'pretty=1';
  return axios.post(uri)

};

module.exports = reply;
