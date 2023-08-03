import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const RadioForNewPost = () => {
  const Skills=[
    {
      id:1,
      name:'No',
    },
    {
      id:2,
      name:'Yes',
    },
  

  ]
  const [selectedRadio, setSelectedRadio] = useState(0);
  return (
    <View style={Styles.main}>
   { Skills.map((item,index)=> <TouchableOpacity key={index} onPress={()=>setSelectedRadio(item.id)}>
        <View style={Styles.Row}>
          <View style={Styles.radioBtton}>
            {selectedRadio === item.id ? <View style={Styles.radiobg} /> : null}
          </View>
          <Text style={{fontFamily:'Poppins-Medium'}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
        )
    }
       
     
    </View>
  );
};

const Styles = StyleSheet.create({
  main: {
  

  
    flexDirection:"row"
  },
  radioBtton: {
    borderColor: '#b59f84',
    borderRadius: 30,
    width: 20,
    height: 20,
    borderWidth: 2,
    margin: 10,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobg: {
    backgroundColor: '#b59f84',
    width: 10,
    height: 10,
    borderRadius: 20,
    margin: 3,
  },
});


export default RadioForNewPost;