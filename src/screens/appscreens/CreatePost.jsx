import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {AuthButton, CommonHeader, Input} from '../../components/Index';
import RadioForNewPost from '../../components/RadioForNewPost';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useState} from 'react';
import CategoryModal from '../../components/CategoryModal';

import CustomModal from '../../components/CustomModal';


const CreatePost = () => {
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
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showModal,setShowModal]=useState(false);
  const [selectedvalue,setSelectedValue]=useState('Select');
  const [showCustomModal,setShowCustomModal]=useState(false);
  changeValue=(val)=>{
    setSelectedValue(val);
      }
  
  return (
    <>
      <ScrollView>
        <View style={{flex: 1}}>
          <CommonHeader showBackArrow={false} />
          <View style={{padding: 20}}>
            <Input heading={'Post Title'} />

            <Text style={Styles.heading}>Is this a question?</Text>
            <RadioForNewPost />

            <Text style={Styles.heading}>Category</Text>

            <TouchableOpacity onPress={() => setShowModal(true)}>
              <View
                style={{
                  borderWidth: 0,
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 8,
                  marginTop: 10,
                  justifyContent: 'space-between',
                  backgroundColor: '#E5E5E5',
                }}>
                <Text>{selectedvalue} </Text>
                <Image
                  style={{width: 15, height: 15}}
                  source={require('../../assets/images/downward-arrow.png')}
                />
              </View>
            </TouchableOpacity>
            <Text style={Styles.bottomText}>
              Please choose a category that best relates to your post.(Required)
            </Text>

            <Text style={Styles.heading}>Add A picture</Text>
            <TouchableOpacity onPress={()=>setShowCustomModal(true)}>
         
              <View style={Styles.uploadButton}>
                <Text style={{color: 'white',fontWeight:'bold'}}>UPLOAD</Text>
              </View>
            </TouchableOpacity>
        
            <Text style={Styles.heading}>Description</Text>

            <TextInput
              multiline={true}
              numberOfLines={5}
              style={Styles.mutilineTextinput}></TextInput>
            <Text style={Styles.bottomText}>Add detail to your post</Text>
            <Text style={Styles.heading}>Tags</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                gap: 25,
                marginTop: 10,
              }}>
              {tagData.map(data => {
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
                    }}
                    onPress={() => {}}
                  />
                );
              })}
            </View>
            <Text style={Styles.bottomText}>(Required)</Text>
            <Input heading={'Youtube Link'} />
            <TouchableOpacity>
         
         <View style={Styles.submitButton}>
           <Text style={{color: 'white',fontWeight:'bold'}}>Submit Post</Text>
         </View>
       </TouchableOpacity>
          </View>
        </View>
        <CategoryModal
        show={showModal}
        close={()=>setShowModal(false)}
        changeValue={changeValue}
        />
         <CustomModal 
        show={showCustomModal}
        close={()=>setShowCustomModal(false)}
        changeValue={changeValue}
        />
      </ScrollView>
    </>
  );
};
const Styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
  },
  bottomText: {
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: 15,
    marginTop: 5,
  },
  uploadButton: {
    marginTop: 10,
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
  },
  submitButton: {
    margin: 10,
    marginTop:15,
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  mutilineTextinput: {
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 13,
    borderColor: '#b59f84',
    height: 100,
    textAlignVertical: 'top',
    marginTop: 10,
    padding: 10,
  },
});

export default CreatePost;
