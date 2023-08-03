import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React,{useState} from 'react';
import {AuthButton, CommonHeader, Input} from '../../components/Index';
import { registerUser } from '../../config/api';

const SignUp = ({navigation}) => {
  
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const passwordsMatch = password === confirmPassword;
 
  let data ={
    username:username,
    firstName:firstName,
    lastName: lastName,
    email:email,
    password:password
  }
 

 
  const handleDataFromChildUsername = (data) => {
    setUsername(data);
  };
  const handleDataFromChildFirstName = (data) => {
    setFirstName(data);
  };
  const handleDataFromChildLastName = (data) => {
    setLastName(data);
  };
  const handleDataFromChildEmail = (data) => {
    setEmail(data);
  };
  const handleDataFromChildPassword = (data) => {
    setPassword(data);
  };
  const handleDataFromChildConfirmPassword = (data) => {
    setConfirmPassword(data);
  };
  console.log(confirmPassword);

  const handleRegister = (data) => {
   
     registerUser(data);
    
 
    
  };

  
  return (
    <>
      <CommonHeader onPress={() => navigation.goBack()} />
      <View
       
        style={{flex: 1, padding: 15}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input heading={'Username *'} onDataChanged={handleDataFromChildUsername} />
          <Input heading={'First Name'} onDataChanged={handleDataFromChildFirstName}/>
          <Input heading={'Last Name'} onDataChanged={handleDataFromChildLastName}/>
          <Input heading={'E-mail Address'} onDataChanged={handleDataFromChildEmail}/>
          <Input
            heading={'Password *'}
            placeHolderText={'Enter your Password'}
            isPassword={true}
            onDataChanged={handleDataFromChildPassword}
          />
          <Input isPassword={true} heading={'Confirm Password *'} onDataChanged={handleDataFromChildConfirmPassword}/>
          {passwordsMatch ?null: <Text style={{color:'red'}}>password and confirm password are not same</Text>}
          <View style={{marginTop: 20}}>
            <AuthButton
              onPress={() =>{passwordsMatch && handleRegister(data) ;navigation.navigate('Login')}}
              // showToast('hahahahahha')
              buttonText={'Register'}
              textColor={'#ffff'}
            />
            <View style={{marginTop: 15}}>
              <AuthButton
                onPress={() => navigation.navigate('Login')}
                buttonText={'Login'}
                textColor={'#000'}
              />
            </View>
            <View style={{height: 50}} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SignUp;
