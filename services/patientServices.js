const { getToken } = require('../utils/functions');

export const getAllPatients = async () => {
  const token = await getToken();
  console.log("token->", token);
  return fetch('https://yachao-clinic-app.herokuapp.com/api/patients', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    }
  );
}