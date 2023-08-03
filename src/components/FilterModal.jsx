import {View, Text, StyleSheet,Modal, Image,Pressable, FlatList} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';



const FilterModal = ({show = false,close,}) => {
   
    const tagData = [
        'Accessories',
        'Body Care & spa',
        'Cosmetics',
        'eBooks',
        'Fitness',
        'Food',
        'Hair Care',
        'Herbal Therapy',
        'Hygiene',
        "Men's Care",
        'Nail Care',
        'Skin Care',
      ];
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
         <FlatList data={tagData} renderItem={({item})=> <BouncyCheckbox
                    size={25}
                    fillColor="#b59f84"
                    unfillColor="#FFFFFF"
                    text={item}
                    iconStyle={{borderColor: '#b59f84', borderRadius: 5}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 5}}
                    textStyle={{
                      textDecorationLine: 'none',
                      fontFamily:'Poppins-Medium',
                    }}
                    onPress={() => {}}
                  />}/>
            {/* {tagData.map(data => {
                return (
                  <BouncyCheckbox
                    size={25}
                    fillColor="#b59f84"
                    unfillColor="#FFFFFF"
                    text={data}
                    iconStyle={{borderColor: '#b59f84', borderRadius: 5}}
                    innerIconStyle={{borderWidth: 2, borderRadius: 5}}
                    textStyle={{
                      textDecorationLine: 'none',
                      fontFamily:'Poppins-Medium',
                    }}
                    onPress={() => {}}
                  />
                );
              })} */}
        
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

export default FilterModal;
