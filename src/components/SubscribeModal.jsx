import {View, Text, StyleSheet,Modal, Image,Pressable} from 'react-native';
import React from 'react';
import RadioWithText from './RadioWithText';


const SubscribeModal = ({show = false,close, changeValue}) => {
  const arr=[
    {
      id:1,
      name:'new follow-up comments',
    },
    {
      id:2,
      name:'new replies to my comments',
    },
   

  ]
  return (
  show && (

    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
       close()
      }}
      
      >
      <View style={Styles.centeredView}>
        <View style={Styles.modalView}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>  
        <Text style={{fontWeight:'bold',fontSize:20}}>Select From the Following</Text>
        <Pressable
              style={{}}
              onPress={() => close()}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../assets/images/close.png')}
            />
            </Pressable></View>
            <View>
           
            </View>
         
          <RadioWithText  changeValue={changeValue}  close={close} arr={arr}/>
        
        </View>
      
      </View>
    </Modal>
    
)
    
  );
};

const Styles= StyleSheet.create({

  centeredView: {
    flex: 1,
   

  },
  modalView: {
   
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 25,
    position:"absolute",
    bottom:0,
    width:"100%",
   
  
    shadowColor: '#000',
    
  },
})

export default SubscribeModal;
