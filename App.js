import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import OtherScreen from './screens/OtherScreen';

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen
});

const DrawerNavigator = createDrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack
    },
    // more stacks here
  },
  {
    initialRouteName: "HomeStack",
  }
);
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
