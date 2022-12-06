import { setToken, getToken } from '../utils/functions';
import fetch from 'node-fetch';

export const login = ( username, password) => {
  return fetch('https://yachao-clinic-node.herokuapp.com/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
    .then((response) => response.json())
    .then(async (responseJson) => {
      if (responseJson.token) {
        await setToken(responseJson.token);
        return responseJson;
      }
      return "error";
      
    })
    .catch((error) => {
      console.error(error);
      return "error";
    }
  );
}

export const register = (username, password, email, role) => {
  return fetch('https://yachao-clinic-node.herokuapp.com/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      role: role
    })
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.message) {
        return "error";
      }
      return "success";
    })
    .catch((error) => {
      console.error(error);
      return "error";
    }
  );
}


export const getUser = async () => {
  const token = await getToken();
  try {
    const response = await fetch('https://yachao-clinic-node.herokuapp.com/api/auth/getUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    const responseJson = await response.json()
    return responseJson;
  } catch (error) {
    console.log(error);
    return null;
  }
}
