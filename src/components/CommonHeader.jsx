import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {images} from '../assets/images/Index';

const windowHeight = Dimensions.get('window').height;

const CommonHeader = ({onPress = () => {}, showBackArrow = true}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.firstChild}>
        {showBackArrow && (
          <TouchableOpacity onPress={() => onPress()}>
            <Image style={{height: 20, width: 20}} source={images.letArrow} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.secondChild}>
        <Image source={images.senseClub} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#B59F84',
  },
  firstChild: {
    flex: 0.2,
    justifyContent: 'space-around',
    marginLeft: 5,
  },
  secondChild: {
    justifyContent: 'flex-start',
    display: 'flex',
    flex: 0.6,
    alignItems: 'center',
  },
});

export default CommonHeader;
