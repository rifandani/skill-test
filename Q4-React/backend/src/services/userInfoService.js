const axios = require('axios');
const { config } = require('../config');

function getUserInfo(token) {
  return axios({
    method: 'get',
    url: `${config.apiUrl}/user`, // from /users
    headers: {
      Authorization: 'token ' + token,
    },
  });
  // .then((response) => {
  //   return response.data;
  // });
}

module.exports = { getUserInfo };
