import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CommonHeader} from '../../components/Index';

const ResetPassword = ({navigation}) => {
  return (
    <>
      <CommonHeader onPress={() => navigation.goBack()} />
      <View style={{flex: 1, padding: 10}}>
        <Text style={styles.ResetPasswordText}>
          To reset your password, please enter your email address or username
          below.{' '}
        </Text>

        <TextInput
          placeholder={'Enter your username or email'}
          selectionColor={'#b59f84'}
          style={styles.InputField}
        />

        <View style={{marginTop: 20}}>
          <View style={styles.ResetButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OtpAndNewPassword')}
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
  },

  ResetButtonContainer: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ResetButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
  },
});

export default ResetPassword;
