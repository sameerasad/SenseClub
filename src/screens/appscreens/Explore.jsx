import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  Input,
  CommonHeader,
  ChipsWithText,
  OfferCard,
} from '../../components/Index';
import {images} from '../../assets/images/Index';

const Explore = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/images/filter.png')}
              />
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
            <View style={styles.chipsContainer}>
              <FlatList
                data={offers}
                horizontal
                renderItem={({item, index, activeIndex, handleActiveIndex}) => (
                  <ChipsWithText
                    text={item}
                    index={index}
                    activeIndex={activeIndex}
                    handleActiveIndex={handleActiveIndex}
                  />
                )}
              />
            </View>
          </View>

          {[1, 2, 3].map(() => (
            <OfferCard />
          ))}
        </View>
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
    fontWeight: 'bold',
    fontSize: 40,
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
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    paddingTop: 20,
  },
  chipsContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Explore;
