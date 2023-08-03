import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RadioWithText from './RadioWithText';

import ImagePicker from 'react-native-image-crop-picker';

const CustomModal = ({show = false, close, changeValue, data}) => {
  pickFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  takeFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  return (
    show && (
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          close();
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily:'Poppins-Bold', fontSize: 20}}>
                Select From the Following
              </Text>
              <Pressable  hitSlop={
   {
   left: 100, // To increase press area on the left side
   right: 100,// To increase press area on the right side
   bottom: 50,
   top: 50,
   }}  onPress={() => close()}>
                <Image
                  style={{width: 15, height: 15}}
                  source={require('../assets/images/close.png')}
                />
              </Pressable>
            </View>
        

           
            <View style={{flexDirection:'row'}}>

            <TouchableOpacity onPress={() => pickFromGallery()}>
              <View style={Styles.button}>
                <Text style={{fontFamily:'Poppins-SemiBold',}}>select from gallery</Text>
              </View>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>  
            <TouchableOpacity onPress={() => takeFromCamera()}>
              <View style={Styles.button}>
                <Text style={{fontFamily:'Poppins-SemiBold',}}>Take from Camera</Text>
              </View>
            </TouchableOpacity></View>
            
          </View>
        </View>
      </Modal>
    )
  );
};

const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 30,
    justifyContent: '',
    position: 'absolute',
    bottom: 0,
    width: '100%',

    shadowColor: '#000',
  },
  button: {
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:5,
    margin:5,
    borderRadius:5,
    borderColor:'#b59f84',
  },
});

export default CustomModal;
