import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
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
  Profie,
} from '../screens/index';
import {images} from '../assets/images/Index';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

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
    <Tab.Navigator sceneContainerStyle={{backgroundColor: '#00000'}}>
      <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Tab.Screen
        name="Profile"
        component={Profie}
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
