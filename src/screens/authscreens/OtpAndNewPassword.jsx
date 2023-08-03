import {View, Text} from 'react-native';
import React,{useState,useRef} from 'react';
import {CommonText} from '../../components/Index';
import {Input, AuthButton, CommonHeader} from '../../components/Index';
import OTPTextInput from 'react-native-otp-textinput';
import { resetPasswordWithOTP } from '../../config/api';

const OtpAndNewPassword = ({navigation}) => {
  const [otp, setOTP] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordsMatch = password === confirmPassword;

  
  // const handleResetPasswordWithOTP = async () => {
  //   try {
  //     const response = await resetPasswordWithOTP(otp, password, confirmPassword);
  //     // Password reset with OTP successful, handle the response accordingly
  //     console.log('Password reset with OTP successful', response);
  //     Alert.alert('Password Reset Successful', 'You can now log in with your new password.');
  //   } catch (error) {
  //     // Password reset with OTP failed, handle the error accordingly
  //     console.error('Password reset with OTP failed', error);
  //     Alert.alert('Password Reset Failed', 'Failed to reset password. Please try again.');
  //   }
  // };
  
  const handleDataFromChildPassword = (data) => {
    setPassword(data);
  };
  const handleDataFromChildConfirmPassword = (data) => {
    setConfirmPassword(data);
  };
  
  let data={
    code:otp,
    password:password,
    passwordConfirmation:confirmPassword,
  }
  
  return (
    <>
      <CommonHeader onPress={() => navigation.goBack()} />
      <View style={{padding: 15, flex: 1}}>
        <CommonText text={'Enter the six digit OTP'} />
        <OTPTextInput inputCount={4} tintColor={'#b59f84'} width={40}  handleTextChange={(e)=>setOTP('e')}
       ></OTPTextInput>
      

        <Input heading={'Password'} isPassword={true} onDataChanged={handleDataFromChildPassword}/>
        <Input heading={'Confirm Password'} isPassword={true} onDataChanged={handleDataFromChildConfirmPassword}/>
        {passwordsMatch ?null: <Text style={{color:'red'}}>password and confirm password are not same</Text>}
        <View style={{marginTop: 20}}>
          <AuthButton
            onPress={() => {passwordsMatch &&resetPasswordWithOTP(data)}}
            // navigation.navigate('Login');
            buttonText={'Submit'}
            textColor={'#FFFF'}
          />
        </View>
      </View>
    </>
  );
};

export default OtpAndNewPassword;
