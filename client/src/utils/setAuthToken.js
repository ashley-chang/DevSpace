// fn that takes in a token. If existing in local storage, add to headers, else delete from headers.
import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

// when we have a token, send with every request.

export default setAuthToken;
