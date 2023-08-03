import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import {CommonHeader} from '../../components/Index';
import { requestResetPassword } from '../../config/api';

const ResetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  let data={
    email:email,
  }
  // const handleResetPassword = async () => {
  //   try {
  //     const response = await requestResetPassword(email);
  //     // Request for password reset successful, handle the response accordingly
  //     console.log('Password reset request successful', response);
  //     Alert.alert('Reset Password Request Successful', 'An email with reset instructions has been sent.');
  //   } catch (error) {
  //     // Request for password reset failed, handle the error accordingly
  //     console.error('Password reset request failed', error);
  //     Alert.alert('Reset Password Request Failed', 'Failed to request password reset. Please try again.');
  //   }
  // };
  return (
    <>
      <CommonHeader onPress={() => navigation.goBack()} />
      <View style={{flex: 1, padding: 15}}>
        <Text style={styles.ResetPasswordText}>
          To reset your password, please enter your email address or username
          below.{' '}
        </Text>

        <TextInput
          placeholder={'Enter your username or email'}
          selectionColor={'#b59f84'}
          style={styles.InputField}
          value={email}
        onChangeText={setEmail}
        />

        <View style={{marginTop: 20}}>
          <View style={styles.ResetButtonContainer}>
            <TouchableOpacity
              onPress={() => {requestResetPassword(data);navigation.navigate('OtpAndNewPassword')}}
             
              style={styles.ResetButton}>
              <Text style={styles.ResetButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  InputField: {
    padding: 10,
    borderWidth: 1,
    width: '100%',
    borderRadius: 35,
    borderColor: '#b59f84',
    marginTop: 20,
  },
  ResetButton: {
    paddingHorizontal: 10,
    width: '80%',
    paddingVertical: 10,
    backgroundColor: '#b59f84',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderColor: '#b59f84',
    borderWidth: 2,
    borderRadius: 35,
  },
  ResetPasswordText: {
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 18,
    color: '#777',
   fontFamily:'Poppins-Medium'
  },

  ResetButtonContainer: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ResetButtonText: {
    color: '#fff',
    fontSize: 17,
    fontFamily:'Poppins-SemiBold'
  },
});

export default ResetPassword;
