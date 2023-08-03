import React, {useRef} from 'react';
import {View, Text, Image,screenOptions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './NavigationService';

import {
  SplashScreen,
  Login,
  SignUp,
  ResetPassword,
  OtpAndNewPassword,
  CreatePost,
  Explore,
  Home,
  Profile,
  SinglePostScreen,
} from '../screens/index';
import {images} from '../assets/images/Index';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();
const Detail = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator initialRouteName={SplashScreen}>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />

      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />

      <AuthStack.Screen
        options={{headerShown: false}}
        name="ResetPassword"
        component={ResetPassword}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="OtpAndNewPassword"
        component={OtpAndNewPassword}
      />
    </AuthStack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator  sceneContainerStyle={{backgroundColor: '#00000'}} 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            switch (route.name) {
              case 'Home':
                icon = focused
                  ? require('../assets/images/homeColoredIcon.png')
                  : require('../assets/images/homeIcon.png');
                break;
              case 'Profile':
                icon = focused
                  ? require('../assets/images/profileColoredIcon.png')
                  : require('../assets/images/profileIcon.png');
                break;
              case 'CreatePost':
                icon = focused
                  ? require('../assets/images/CreatePostColoredIcon.png')
                  : require('../assets/images/CreatePostIcon.png');
                break;
              case 'Explore':
                icon = focused
                  ? require('../assets/images/exploreColoredIcon.png')
                  : require('../assets/images/exploreIcon.png');
                break;
              default:
                break;
            }
            return <Image source={icon} style={{ width: 25, height: 25,}} />;
          },
          tabBarStyle: {
      backgroundColor: 'black',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderRadius:0,
      height:65,
      overflow: 'hidden',
      padding:10
    },
   
        })}


        tabBarOptions={{
          
          activeTintColor: '#b59f84',
          inactiveTintColor: 'gray',
          keyboardHidesTabBar: true,
       
        }}

    >
      <Tab.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CreatePost"
        options={{headerShown: false}}
        component={CreatePost}
      />
      <Tab.Screen
        name="Explore"
        options={{headerShown: false}}
        component={Explore}
      />
    </Tab.Navigator>
  );
};

const DetailStack = () => {
  return (
    <Detail.Navigator initialRouteName={SinglePostScreen}>
      <Detail.Screen
        options={{headerShown: false}}
        name="SinglePostScreen"
        component={SinglePostScreen}
      />
    </Detail.Navigator>
  );
};
 


const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{headerShown: false}}
        name="AuthenticationStack"
        component={AuthenticationStack}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name="TabStack"
        component={TabStack}
      />
       <RootStack.Screen
        options={{headerShown: false}}
        name="DetailStack"
        component={DetailStack}
      />
    </RootStack.Navigator>
  );
};



const AppNavigator = () => {
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
          await analytics().logEvent(currentRouteName);
        }

        routeNameRef.current = currentRouteName;
      }}>
      <RootNavigator />
    </NavigationContainer>
  );
};
export {AppNavigator};
