const { getToken } = require('../utils/functions');

export const getAllPatients = async () => {
  const token = await getToken();
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

export const updatePatient = async (patient) => {
  const token = await getToken();
  console.log("patient", patient);
  return fetch(`https://yachao-clinic-app.herokuapp.com/api/patients/${patient._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + token
    },
    body: JSON.stringify(patient)
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }
  )
    .catch((error) => {
      console.error(error);
    }
  );
}

export const addNewPatient = async (patient) => {
  const token = await getToken();
  return fetch('https://yachao-clinic-app.herokuapp.com/api/patients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + token
    },
    body: JSON.stringify(patient)
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }
  )
    .catch((error) => {
      console.error(error);
    }
  );
}


export const deletePatient = async (patientId) => {
  const token = await getToken();
  return fetch(`https://yachao-clinic-app.herokuapp.com/api/patients/${patientId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application',
      'authorization': 'Bearer ' + token
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }
  )
    .catch((error) => {
      console.error(error);
    }
  );
}



