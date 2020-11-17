import {Animated, Easing} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TypeUser from '../screen/TypeUser';
import Splash from '../screen/Splash';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.linear,
  },
});

// login stack
const LoginStack = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  TypeUser: {
    screen: TypeUser,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
});

// eslint-disable-next-line no-undef
export default SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoginStack,
    App: LoginStack,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
    transitionConfig: noTransitionConfig,
  },
);
