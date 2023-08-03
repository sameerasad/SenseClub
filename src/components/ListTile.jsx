import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
  } from 'react-native';
  import React from 'react';
  import {CommonHeader, HomeImage,ImageWithTextSlider} from '../../components/Index';
  const windowHeight = Dimensions.get('screen').height;
  const height = Dimensions.get('window').height
    ;
    const Width = Dimensions.get('window').width
    ;

    const ListTile = ()=>{

        return(
<View style={{flexDirection:'row',margin:15,padding:0,alignItems:'flex-start',justifyContent:'',}}>
   <ImageBackground
      resizeMode="cover"
      style={Styles.sliderWrapper}
      imageStyle={{ borderRadius: 25}}
      source={require('../assets/images/homeSlideImage.jpg')}>
     <View style={{flexDirection: 'row-reverse',paddingBottom:40,}}>
          <Text style={{backgroundColor: 'pink',color:'white',paddingLeft:4,paddingRight:4,fontFamily:'Poppins-Medium'}}>Giveaways</Text>
        </View>
    </ImageBackground>

    <View style={{width:Width/1.5,margin:5}}>
      <Text style={{textAlign:'left',fontSize:16,fontFamily:'Poppins-SemiBold'}}>Are exfoliating gloves good for body acne?</Text>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
      <Image
            style={{width: 30, height: 30}}
            source={require('../assets/images/circular-avatar.png')}
          />
          <Text style={{fontSize:13,marginLeft: 3,fontFamily:'Poppins-Light'}}>Tybarb13</Text>
          <Image
            style={{width: 12, height: 12,marginLeft: 5,}}
            source={require('../assets/images/comment.png')}
          />
          <Text style={{fontSize:13,marginLeft: 3,fontFamily:'Poppins-Light'}}>0</Text>
          <Image
            style={{width: 12, height: 12,marginLeft: 5}}
            source={require('../assets/images/time.png')}
          />
          <Text style={{fontSize:13,marginLeft: 3,fontFamily:'Poppins-Light'}}>2 Months ago</Text>
      </View>
    </View>
   
   </View>
    

        );
    };
    export default ListTile;

    const Styles=StyleSheet.create({
        sliderWrapper: {
            borderRadius: 6,
            justifyContent: 'center',
           
            width:Width/3.7,
            height: height /6.5,},

    })