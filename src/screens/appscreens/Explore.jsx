import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  Input,
  CommonHeader,
  ChipsWithText,
  OfferCard,
} from '../../components/Index';
import FilterModal from '../../components/FilterModal';
import ChipsComponent from '../../components/ChipsComponent';

const Explore = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFilterModal,setShowFilterModal]=useState(false);

  const handleActiveIndex = index => {
    setActiveIndex(index);
  };
  offers = ['All', 'Giveaways', 'Deals', 'Events'];
 
  return (
    <>
      <CommonHeader showBackArrow={false}></CommonHeader>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Search</Text>

          <View style={styles.searchContainer}>
            <View style={{flex: 3}}>
              <TextInput
                style={styles.InputField}
                placeholder="Search site"></TextInput>
            </View>
            <View
              style={{
                flex: 1.5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity onPress={()=>setShowFilterModal(true)} hitSlop={
   {
   left: 20, // To increase press area on the left side
   right: 20,// To increase press area on the right side
   bottom: 10,
   top: 10,
   }}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/images/filter.png')}
              />
              </TouchableOpacity>
             
              <View
                style={{
                  backgroundColor: '#b59f84',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  style={{width: 18, height: 18, tintColor: 'white'}}
                  source={require('../../assets/images/search.png')}
                />
              </View>
            </View>
          </View>

          <Text style={styles.subHeading}>
            Explore limited time offers and community events
          </Text>
          <View>
       
            <ChipsComponent/>
          </View>

          {[1, 2, 3].map(() => (
            <OfferCard navigation={navigation}  />
          ))}
        </View>
        <FilterModal 
        show={showFilterModal}
        close={()=>setShowFilterModal(false)}
      
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  heading: {
    color: 'black',
   
    fontSize: 40,
    fontFamily:'Poppins-BoldItalic',
  },
  searchContainer: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
  },
  red: {
    color: 'red',
  },
  InputField: {
    padding: 10,

    width: '100%',

    borderColor: '#b59f84',
    marginTop: 0,
  },
  subHeading: {
    color: '#b7b7b7',
    fontSize: 14,
  
   
    paddingTop: 20,
    fontFamily:'Poppins-Light',
  },
  chipsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Explore;
