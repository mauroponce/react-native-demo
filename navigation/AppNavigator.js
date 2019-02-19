import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Other: OtherScreen
});

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));