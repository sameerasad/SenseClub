import {View, Text, StyleSheet,Modal, Image,Pressable} from 'react-native';
import React from 'react';
import RadioWithText from './RadioWithText';



const CategoryModal = ({show = false,close, changeValue}) => {
   
    const Skills=[
        {
          id:1,
          name:'Health',
        },
        {
          id:2,
          name:'General',
        },
        {
          id:3,
          name:'Product',
        },
        {
          id:4,
          name:'Routine',
        },
        {
            id:5,
            name:'Services',
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
        <Text style={{fontFamily:'Poppins-Bold',fontSize:20}}>Select From the Following</Text>
        <Pressable
            hitSlop={
   {
   left: 100, // To increase press area on the left side
   right: 100,// To increase press area on the right side
   bottom: 50,
   top: 50,
   }}
              onPress={() => close()}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../assets/images/close.png')}
            />
            </Pressable></View>
            <View>
           
            </View>
         
          <RadioWithText  changeValue={changeValue}  close={close} arr={Skills}/>
        
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
    padding: 30,
    justifyContent:"",
    position:"absolute",
    bottom:0,
    width:"100%",
    
  
    shadowColor: '#000',
    
  },
})

export default CategoryModal;
