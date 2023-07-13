import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {AuthButton, CommonHeader, Input} from '../../components/Index';

const SignUp = ({navigation}) => {
  return (
    <>
      <CommonHeader onPress={() => navigation.goBack()} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, padding: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input heading={'Username *'} />
          <Input heading={'First Name'} />
          <Input heading={'Last Name'} />
          <Input heading={'E-mail Address'} />
          <Input
            heading={'Password *'}
            placeHolderText={'Enter your Password'}
            isPassword={true}
          />
          <Input isPassword={true} heading={'Confirm Password *'} />
          <View style={{marginTop: 20}}>
            <AuthButton
              onPress={() => navigation.navigate('Login')}
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
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
