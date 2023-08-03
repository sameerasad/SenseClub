import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ListTile} from '../components/Index';

const listTab = [{status: 'ALL'}, {status: 'PRODUCTS'}, {status: 'SERVICES'}];
const arr=[1,2,3,4,5,6]
const arr1=[1,2,3,]
const arr2=[1,2]
const TabViewExample = () => {
  const [status, setStatus] = useState('ALL');
  const setStatusFilter = status => {
    setStatus(status);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.listTab}>
        {listTab.map(e => (
        
          <TouchableOpacity
          onPress={()=>{setStatusFilter(e.status);console.log(e.status)}}
            style={[Styles.btnTab, status === e.status && Styles.BtnTabActive]}>
            <Text
              style={[
                Styles.textTab,
                status === e.status && Styles.textTabActive,
              ]}>
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList data={status=="ALL" ? arr :status
      == "PRODUCTS" ? arr1 : arr2} 
      keyExtractor={(e ,i)=>i.toString()}
        renderItem={()=> <ListTile/>}
        ItemSeparatorComponent={this.renderSeparator}
      />

    </SafeAreaView>
  );
};

export default TabViewExample;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
  },
  listTab: {
    flex: 1,
    // backgroundColor: '#fff',
    // padding: 15,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'flex-start',
    marginBottom:10,
  },
  btnTab: {
    // width: Dimensions.get('window').width / 4.3,
    flexDirection: 'row',
   
  
    // borderWidth: 0.5,
    // borderColor: '#EBEBEB',
    
    
   
  },
  textTab: {
    fontSize: 15,
   
    fontFamily:"Poppins-Bold"
  },
  BtnTabActive: {
  
  },
  textTabActive: {
    
   
    color:'#b59f84',
  },
});
