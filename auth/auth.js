import {setToken, setCurrentUser, getToken } from '../utils/functions';

export const login = ( username, password) => {
  return fetch('https://yachao-clinic-app.herokuapp.com/api/auth/login', {
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
    .then( async (responseJson)=> {
      if (responseJson.token) {
        await setToken(responseJson.token)
        await setCurrentUser(responseJson.user)
      }
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    }
  );
}

export const register = (username, password, email, role) => {
  return fetch('https://yachao-clinic-app.herokuapp.com/api/auth/register', {
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
      return "success";
    })
    .catch((error) => {
      console.error(error);
 
    }
  );
}


export const getUser = async () => {
  const token = await getToken();

  try {
    const response = await fetch('https://yachao-clinic-app.herokuapp.com/api/auth/getUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    const responseJson = await response.text();
    return responseJson;
  } catch (error) {
    console.log(error);
    return null;
  }
}
