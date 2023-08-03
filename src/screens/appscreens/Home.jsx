import {
  View,
  Text,
FlatList,
  StyleSheet,

  Dimensions,
  
  ScrollView
} from 'react-native';
import React from 'react';
import {CommonHeader, HomeImage,ImageWithTextSlider,ListTile,TabViewExample} from '../../components/Index';

const windowHeight = Dimensions.get('screen').height;
const height = Dimensions.get('window').height
  ;
  const Width = Dimensions.get('window').width
  ;
  var ScrollableTabView = require('react-native-top-tab-view');

  const arr=[1,2,3,4,4,5,6]
const Home = ({navigation}) => {
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#b59f84',
        height: 0.5,
        marginHorizontal:18,
      }}
    />
  );
  return (

    <><ScrollView>
       <View style={Styles.main}>
      <CommonHeader showBackArrow={false} />

      <View style={{ margin: 20 }}>

        <HomeImage />
        <ImageWithTextSlider />
        <Text style={Styles.heading}>Community Feed</Text>

        <View style={Styles.divider}></View>
      </View>
      

    
      </View>
      <TabViewExample/>

     
 
    
 
    </ScrollView>
   </>
  );
};

export default Home;

const Styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  heading: {
    
    fontSize: 21,
    marginTop: 40,
    fontFamily:"Poppins-ExtraBold"

  },

  divider:{
    height:3,backgroundColor:'#b59f84',marginTop: 5,
  },
  mainContainer: {
    margin: 20,


    borderRadius: 35,
    flexDirection: 'row',
    height: windowHeight / 4.5,
  },
  sliderWrapper: {
    borderRadius: 6,
    justifyContent: 'center',
   
    width:Width/3.7,
    height: height /6.5,
  },
  sliderHeading: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    minHeight: 175,
    textAlignVertical:'center',
    fontFamily:'Poppins-Bold'
    
  },
  sliderButton: {
    paddingVertical: 10,
    paddingHorizontal:25,
    backgroundColor: '#fff',
    borderRadius: 30,
    display: 'inline',
    borderColor: '#b59f84',
    borderWidth: 1,


  },

});
