import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {CommonHeader, AuthButton,SubscribeModal} from '../../components/Index';
import Comments from '../../components/Comments';

const commentsData = [
  
  // More comments...
];


const SinglePostScreen = ({navigation}) => {
 
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showModal,setShowModal]=useState(false);
  const [selectedvalue,setSelectedValue]=useState('none');

  changeValue=(val)=>{
setSelectedValue(val);
  }
    offers = ['All', 'Giveaways', 'Deals', 'Events'];
  return (
    <KeyboardAvoidingView
      style={{flex: 1, flexDirection: 'column'}}
      behavior={Platform.OS == 'ios' ? 'padding' : ''}
      enabled>
      <ScrollView>
        <View style={Styles.MainContainer}>
          <CommonHeader showBackArrow={false}/>
          <View style={{flexDirection: 'row'}}>
            <View style={Styles.Category}>
              <Text style={{fontFamily:'Poppins-Medium'}}>Products</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              margin: 20,
            }}>
            <Image
              style={{width: 48, height: 48}}
              source={require('../../assets/images/circular-avatar.png')}
            />

            <View style={{marginLeft: 10}}>
              <Text style={Styles.Username}>sameer</Text>
              <Text style={{fontFamily:'Poppins-Light'}}>12 post 1 Comments</Text>
            </View>
          </View>
          <Text style={Styles.PostHeading}>
            Are exfoliating gloves good for body acne?
          </Text>

          <View
            style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/images/price-tag.png')}
            />
            <Text style={{paddingLeft: 10, fontSize: 16,marginRight:5, paddingBottom: 4,fontFamily:'Poppins-SemiBold'}}>
              Tags:
            </Text>

            <FlatList
              data={offers}
              horizontal
              renderItem={({item, index, activeIndex, handleActiveIndex}) => (
                <View style={Styles.Tags}>
                  <Text style={{fontFamily:'Poppins-Medium'}}>{item}</Text>
                </View>
              )}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              alignItems: 'center',
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/images/share.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                justifyContent: 'space-between',
              }}>
              <Image
                style={Styles.shareICons}
                source={require('../../assets/images/facebook.png')}
              />
              <Image
                style={Styles.shareICons}
                source={require('../../assets/images/twitter.png')}
              />
              <Image
                style={Styles.shareICons}
                source={require('../../assets/images/pinterest.png')}
              />
              <Image
                style={Styles.shareICons}
                source={require('../../assets/images/linkedin.png')}
              />
              <Image
                style={Styles.shareICons}
                source={require('../../assets/images/reddit.png')}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => setShowSubscribe(!showSubscribe)}>
            <View
              style={{
                flexDirection: 'row',
                margin: 20,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 20, height: 20,tintColor:'black'}}
                source={require('../../assets/images/email.png')}
              />
              <Text style={{fontSize: 16, marginLeft: 5,fontFamily:'Poppins-SemiBold'}}>Subscribe</Text>
              <Image
                style={{width: 20, height: 20, marginLeft: 5}}
                source={require('../../assets/images/downward-arrow.png')}
              />
            </View>
          </TouchableOpacity>
         
         

          {showSubscribe === true ? (
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                <Text style={{fontFamily:'Poppins-SemiBold'}}>Notify of</Text>
                <TouchableOpacity onPress={()=>setShowModal(true)}>
                <View
                  style={{
                  
                    borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 8,
                    marginLeft: 20,
                  }}>
                
                  <Text style={{fontFamily:'Poppins-Medium'}}>{selectedvalue} </Text>
                  <Image
                    style={{width: 15, height: 15}}
                    source={require('../../assets/images/sort.png')}
                  />
                </View>
                </TouchableOpacity>
                
              
              </View>
              <View
                style={{
                  borderWidth: 1,
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 20,
                  borderRadius: 30,
                  paddingLeft: 10,
                }}>
                <TextInput placeholder="Email" />
              </View>
              <View style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
                <AuthButton buttonText={'Submit'} textColor={'#ffff'} />
              </View>
            </View>
          ) : null}
       
         
        </View>
        <SubscribeModal 
        show={showModal}
        close={()=>setShowModal(false)}
        changeValue={changeValue}
        />
    {/* <Comments comments={commentsData}/> */}
    <View >
          <Comments comments={commentsData}/>
          </View>
      </ScrollView>
     
    </KeyboardAvoidingView>
  );
};

const Styles = StyleSheet.create({
  MainContainer: {
    flex:1
  },
  Category: {
    borderRadius: 0,
    margin: 20,
    width: 'auto',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,

    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Username: {
    fontSize: 20,
    
    color: 'black',
    fontFamily:'Poppins-SemiBold',
  },
  PostHeading: {
    padding: 20,
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
    fontFamily:'Poppins-ExtraBold',
  },
  Tags: {
    borderRadius: 0,
    marginLeft: 8,
    width: 'auto',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,

    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  shareICons: {
    width: 35,
    height: 35,
    marginLeft: 5,
  },
});

export default SinglePostScreen;
