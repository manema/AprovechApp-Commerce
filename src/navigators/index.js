import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import LoginScreen from 'screens/loginScreen';
import MainScreen from 'screens/mainScreen';
import SignUpScreen from 'screens/SignUpScreen';
import AppLoader from 'screens/appLoader';
import ScannerScreen from 'screens/scannerScreen';
import RedeemedQr from 'screens/redeemedQr';

const AuthStack = createStackNavigator({
  LoginScreen,
  SignUpScreen,
});

const AppStack = createStackNavigator({
  MainScreen,
  ScannerScreen,
  RedeemedQr
});

const AppNavigator = createAnimatedSwitchNavigator(
  {
    AppLoader,
    AuthStack,
    AppStack,
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(AppNavigator);