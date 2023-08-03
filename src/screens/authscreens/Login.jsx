import {View, Text, TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
import {Input, AuthButton, CommonHeader} from '../../components/Index';
import { loginUser } from '../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  // const handleLogin = async () => {
  //   try {
  //      // Login successful, handle the response accordingly
  //     console.log('Login successful', response);

  //     // Store the JWT token in AsyncStorage
  //     await AsyncStorage.setItem('jwtToken', response.jwt);

  //     Alert.alert('Login Successful', 'You are now logged in.');
  //  const response = await loginUser(identifier, password);
  //     } catch (error) {
  //     // Login failed, handle the error accordingly
  //     console.error('Login failed', error);
  //     Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
  //   }
  // };
  useEffect(() => {
    //Runs only on the first render
getMyStringValue();
getMyObject();

  }, []);
  getMyStringValue = async () => {
    try {
      return await AsyncStorage.getItem('@key')
    } catch(e) {
      // read error
    }
  
    console.log('Done.')
  }
  getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@key')
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
    }
  
    console.log('Done.')
  }
  let data ={
    identifier:identifier,
    password:password,
  }
  console.log(data)
  const handleDataFromChildEmail = (data) => {
    setIdentifier(data);
  };
  console.log(identifier);
  const handleDataFromChildPassword = (data) => {
    setPassword(data);
  };
 console.log(password,"ppp");

  return (
    <>
      <CommonHeader showBackArrow={false} />
      <View style={{flex: 1, padding: 15}}>
        <Input heading={'Username or E-mail'} onDataChanged={handleDataFromChildEmail}/>

        <Input heading={'Password *'} isPassword={true} onDataChanged={handleDataFromChildPassword}/>

        <View style={{marginTop: 20}}>
          <AuthButton
            onPress={() => {loginUser(data) ;     navigation.replace('TabStack')}}
       
            buttonText={'Login'}
            textColor={'#fff'}
          />
          <View style={{marginTop: 15}}>
            <AuthButton
              onPress={() => navigation.navigate('SignUp')}
              buttonText={'Register'}
              textColor={'#000'}
            />
          </View>
          <View style={{height: 40}} />
          <TouchableOpacity
            onPress={() => {
              {navigation.navigate('ResetPassword'); };
            }}
            style={{alignItems: 'center'}}>
            <Text style={{fontFamily:'Poppins-Light'}}>Forgot your Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
