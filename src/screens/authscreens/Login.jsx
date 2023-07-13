import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Input, AuthButton, CommonHeader} from '../../components/Index';

const Login = ({navigation}) => {
  return (
    <>
      <CommonHeader showBackArrow={false} />
      <View style={{flex: 1, padding: 10}}>
        <Input heading={'Username or E-mail'} />

        <Input heading={'Password *'} isPassword={true} />

        <View style={{marginTop: 20}}>
          <AuthButton
            onPress={() => navigation.replace('TabStack')}
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
              navigation.navigate('ResetPassword');
            }}
            style={{alignItems: 'center'}}>
            <Text>Forgot your Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
