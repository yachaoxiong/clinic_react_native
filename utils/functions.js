import * as SecureStore from 'expo-secure-store';
//calculate BMI BY WEIGHT(KG) AND HEIGHT(CM)
export const calculateBMI = (weight, height) => {

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
}

export const setToken = async (token) => {
  try {
    await SecureStore.setItemAsync('token', token);
  } catch (error) {
    console.log('Error setting token', error);
  }
}

export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync('token');
    return token;
  } catch (error) {
    console.log('Error getting token', error);
  }
}

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync('token');
  } catch (error) {
    console.log('Error removing token', error);
  }
}


