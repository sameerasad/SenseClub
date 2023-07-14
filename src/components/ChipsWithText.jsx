import {Text, StyleSheet,View, TouchableOpacity} from 'react-native';
import React from 'react';

const ChipsWithText = ({text,index,activeIndex,handleActiveIndex=()=>{}}) => {
  console.log(activeIndex)
  return (
    <><TouchableOpacity
        onPress={()=>handleActiveIndex(index,"index")}
    >
      <View style={{ marginLeft:10,
       backgroundColor:index==activeIndex?"#6666":"#ffff",
       padding:10,
       paddingLeft:15,
       paddingRight:15,
       borderWidth:1,
      borderRadius:25,
      }}>
      <Text style={{color:index==activeIndex?"#ffff":"#6666"}}>{text}</Text>
    </View>
    </TouchableOpacity></>
  );
};

const styles = StyleSheet.create({
  chip:{
   

  }
});

export default ChipsWithText;
