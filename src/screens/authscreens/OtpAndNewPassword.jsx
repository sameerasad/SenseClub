import {View, Text} from 'react-native';
import React from 'react';
import {CommonText} from '../../components/Index';
import {Input, AuthButton, CommonHeader} from '../../components/Index';
import OTPTextInput from 'react-native-otp-textinput';

const OtpAndNewPassword = ({navigation}) => {
  return (
    <>
      <CommonHeader onPress={() => navigation.goBack()} />
      <View style={{padding: 10, flex: 1}}>
        <CommonText text={'Enter the six digit OTP'} />
        <OTPTextInput inputCount={6} tintColor={'#b59f84'}></OTPTextInput>
        <Input heading={'Password'} isPassword={true} />
        <Input heading={'Confirm Password'} isPassword={true} />
        <View style={{marginTop: 20}}>
          <AuthButton
            onPress={() => navigation.navigate('Login')}
            buttonText={'Submit'}
            textColor={'#FFFF'}
          />
        </View>
      </View>
    </>
  );
};

export default OtpAndNewPassword;
