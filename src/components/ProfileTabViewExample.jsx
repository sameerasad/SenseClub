import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ProfileListTile from './ProfileListTile';

const listTab = [{status: 'Posts'}, {status: 'Shop'}, {status: 'Reviews'}];
const arr = [1, 2, 3, 4, 5, 6];
const arr1 = [1, 2, 3];
const arr2 = [1, 2];
const ProfileTabViewExample = () => {
  const [status, setStatus] = useState('Posts');
  const setStatusFilter = status => {
    setStatus(status);
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.listTab}>
        {listTab.map(s => (
          <TouchableOpacity
            onPress={() => {
              setStatusFilter(s.status);
            }}
            style={[Styles.btnTab, status === s.status && Styles.BtnTabActive]}>
            <Text
              style={[
                Styles.textTab,
                status === s.status && Styles.textTabActive,
              ]}>
              {s.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
      style={{padding:10}}
        data={status == 'Posts' ? arr : status == 'Shop' ? arr1 : arr2}
        keyExtractor={(s, j) => j.toString()}
        renderItem={() => <ProfileListTile />}
        ItemSeparatorComponent={this.renderSeparator}
      />
    </View>
  );
};

export default ProfileTabViewExample;

const Styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
  listTab: {
    // flex: 1,
    // backgroundColor: '#fff',
    // padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  btnTab: {
    // width: Dimensions.get('window').width / 4.3,
    flexDirection: 'row',

    // borderWidth: 0.5,
    // borderColor: '#EBEBEB',
  },
  textTab: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  BtnTabActive: {},
  textTabActive: {
    color: '#b59f84',
  },
});
