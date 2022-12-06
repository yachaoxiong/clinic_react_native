
import { login, register } from "../auth/auth";
import { getAllPatients, updatePatient, addNewPatient,deletePatient, getPatientHistory, getPatientById, addNewRecord,getAllTestsByPatientId} from "../services/patientServices";
import { setToken, removeToken, getToken, calculateBMI } from "../utils/functions";

const mockPatient = {
  "firstName" : "Lily",
  "lastName" : "Mee",
  "age":28,
  "birthDate": "1994-08-26",
  "address" : "228 t crescent",
  "weight" : 60,
  "height" : 176,
  "gender": "female",
  "email":"Lily2@gmail.com",
  "phone":"223-666-9999",
  "department" : "emergency",
  "status":"normal",
  "doctor" : "635ed207b9036eccbe9d665b"
}

const mockTest = {
  "category":"Blood Pressure",
  "readings":[
      {
          "name":"diatomic",
          "value":60
      },
      {
          "name":"systolic",
          "value":190
      }
  ],
  "isCritical":true
}


// mock functions
jest.mock('../utils/functions', () => {
  return {
    getToken: jest.fn(),
    setToken: jest.fn(),
    removeToken: jest.fn(),
    calculateBMI: jest.fn(),
  };
});


const testUser = {
    "username":"William12",
    "password" : "as123",
    "email":"William2@gmail.com",
    "role":"doctor"
}
let userToken = null;
jest.mock('expo-secure-store', () => {
  require('../utils/functions');
  return {
    getItemAsync: jest.fn(),
    setItemAsync: jest.fn(),
    deleteItemAsync: jest.fn(),
  };
});

describe("register", () => {
  it("should return error if username is taken", async () => {
    const response = await register(testUser.username, testUser.password, testUser.email, testUser.role);
    console.log("response", response)
    expect(response).toBe("error");

  });
});


describe("login", () => {
  it("should return a token and user profile", async () => {
    const response = await login(testUser.username, testUser.password);
    expect(response.token).not.toBeNull();
    userToken = response.token;
  });
  it("should return error", async () => {
    const response = await login(testUser.username, "wrong password");
    expect(response).toBe("error");
  });
});


//utils functions
describe("utils Functions", () => {
  it("should set token", async () => {
    // USE THIS TO MOCK THE FUNCTION
    setToken.mockImplementation(() => {
      return "success";
    });
    
    const response = await setToken(userToken);
    expect(response).toBe("success");

  });

  it("should get token", async () => {
    getToken.mockImplementation(() => {
      return userToken;
    });
    const response = await getToken();
    expect(response).toBe(userToken);
  });

  it("should remove token", async () => {
    removeToken.mockImplementation(() => {
      return "success";
    });
    const response = await removeToken();
    expect(response).toBe("success");
  });


  it("should calculate BMI", () => {
    calculateBMI.mockImplementation((height, weight) => {
          // calculate BMI
      const bmi =  weight / (height / 100) ** 2 

    
      // convert to one decimal place
      const convertedBmi = bmi.toFixed(1);
  
    // set result message
    const result = convertedBmi < 18.5 
      ? 'Underweight'
      : (convertedBmi > 18.5 && convertedBmi <= 24.9) 
      ? 'Normal' 
      : (convertedBmi >= 25 && convertedBmi <= 29.9) 
      ? 'Overweight'
    : 'Obese';
    
        return { bmi: convertedBmi, result };
    })
    const result = calculateBMI(180, 70);
    expect(result.bmi).toBe("21.6");
    expect(result.result).toBe("Normal");
  });
  
})


//services
describe("services", () => {
 
  it("should get all patients", async () => {
    const response = await getAllPatients();
    expect(response).not.toBeNull();
    expect(response).not.toBe("error");
    //not undefined
    expect(response).not.toBeUndefined();
    //should be array
    expect(Array.isArray(response)).toBe(true);
    
  });
  it("should Create a new patient", async () => {
    const response = await addNewPatient(mockPatient)
   
    expect(response).not.toBeNull();
    expect(response).not.toBe("error");
    //not undefined
    expect(response).not.toBeUndefined();
    //should be object
    expect(typeof response).toBe("object");

    expect(response.firstName).toBe(mockPatient.firstName);
    
    // has new _id
    expect(response._id).not.toBeUndefined();

    mockPatient._id = response._id;
  });

  it("should update a patient", async () => {
    mockPatient.firstName = "Lily2";
    const response = await updatePatient(mockPatient)
    expect(response).not.toBeNull();
    expect(response).not.toBe("error");
    //not undefined
    expect(response).not.toBeUndefined();
    //should be object
    expect(typeof response).toBe("object");

    expect(response.firstName).toBe(mockPatient.firstName);
  });
  it("should add a test to a patient and automatically update patient status if it is critical", async () => {
    const response = await addNewRecord(mockPatient._id, mockTest)
    const patient = await getPatientById(mockPatient._id)
    expect(response).not.toBeNull();
    expect(response).not.toBe("error");
    //not undefined
    expect(response).not.toBeUndefined();
    //should be object
    expect(typeof response).toBe("object");
    //should have a id
    expect(response._id).not.toBeUndefined();

    expect(patient.status).toBe("critical");

  })
  it("should get a patient by id", async () => {
    const response = await getPatientById(mockPatient._id)
    expect(response).not.toBeNull();
    expect(response).not.toBe("error");
    //not undefined
    expect(response).not.toBeUndefined();
    //should be object
    expect(typeof response).toBe("object");
    //should have a id
    expect(response._id).not.toBeUndefined();
  })

  it("should get all tests for a patient", async () => {
    const response = await getAllTestsByPatientId(mockPatient._id)
    expect(response).not.toBeNull();
    expect(response).not.toBe("error");
    //not undefined
    expect(response).not.toBeUndefined();
    //should be array
    expect(Array.isArray(response)).toBe(true);
  })

  it("should get the history of a patient", async () => {
    const response = await getPatientHistory(mockPatient._id)
    expect(response).not.toBeNull();
    expect(response).not.toBe("error");
    //not undefined
    expect(response).not.toBeUndefined();
    //should be array
    expect(Array.isArray(response)).toBe(true);
  })
  
  it("should delete a patient", async () => {
    const response = await deletePatient(mockPatient._id)
    //should have a message
    expect(response).not.toBeNull();
    expect(response).not.toBe("error");
    //not undefined
    expect(response).not.toBeUndefined();
    //should be object
    expect(typeof response).toBe("object");
    //should have a message
    expect(response.message).toEqual("Patient successfully deleted!");
  })
});





