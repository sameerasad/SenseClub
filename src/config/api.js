// api.js

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

setObjectValue = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('key', jsonValue)
  } catch(e) {
    // save error
  }

  console.log('Done.')
}
setStringValue = async (value) => {
  try {
    await AsyncStorage.setItem('key', value)
  } catch(e) {
    // save error
  }

  console.log('Done.')
}
// Create an Axios instance with the base URL of your Strapi backend
const api = axios.create({
    baseURL: 'http://192.168.0.145:8080',
  });

// Add an interceptor to automatically set the JWT token in the Authorization header for authenticated requests
api.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromStorage(); // Implement this function to get the token from AsyncStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Implement this function to get the token from AsyncStorage
const getTokenFromStorage = async () => {
  try {
    const token = await AsyncStorage.getItem('jwtToken');
    console.log(token);
    return token;
  } catch (error) {
    console.error('Error retrieving token from AsyncStorage:', error);
    return null;
  }
};

// Define your API functions here

// Function to register a new user
export const registerUser = async (data) => {
    try {
      const response = await api.post('/api/auth/local/register/',data);
      getTokenFromStorage();
      console.log(response.data.jwt);
    } catch (error) {
      console.log(error.response.data.error);
      // alert(error.response.data.error.message);
     

      
      
    }
  };
  
// Function to log in a user
export const loginUser = async (data) => {
    try {
      const response = await api.post('/api/auth/local/', data);
      console.log(response.data);
      setStringValue(response.data.jwt);
      setObjectValue(response.data.user);
      return response.data;
    } catch (error) {
        console.log(error);
    }
  };
  export const requestResetPassword = async (data) => {
    try {
      const response = await api.post('/api/auth/forgot-password',data);
   
      console.log(response.data);
      return response.data;
    } catch (error) {
        console.log(error);
    }
  };
  
  export const resetPasswordWithOTP = async (data) => {
    try {
      console.log(data);
      const response = await api.post('/api/auth/reset-password',data);
      console.log(response.data);
      return response.data;
    } catch (error) {
        console.log(error,"hihihiih");
    }
  };