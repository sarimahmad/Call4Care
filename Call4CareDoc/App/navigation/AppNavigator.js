/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';

import Calendar from '../screen/Calendar';
import Chat from '../screen/Chat';
import DashBoard from '../screen/DashBoard';
import EmailVerify from '../screen/EmailVerify';
import ForgotPassword from '../screen/ForgotPassword';
import ForgotPasswordStep from '../screen/ForgotPasswordStep';
import Patient from '../screen/Patient';
import PhoneSignInVerify from '../screen/PhoneSignInVerify';
import SetNewPassword from '../screen/SetNewPassword';
import SignIn from '../screen/SignIn';
import Splash from '../screen/Splash';
import TypeUser from '../screen/TypeUser';
import QAndA from '../screen/QAndA';
import Logs from '../screen/Logs';
import PatientReport from '../screen/Report/PatientReport/PatientReport';
import IncomeReport from '../screen/Report/IcomeReport/IncomeReport';
import DiscountReport from '../screen/Report/DiscountReport/DiscountReport';
import AppointmentsReport from '../screen/Report/AppointmentsReport/AppointmentsReports';
import AmountDueReport from '../screen/Report/AmountDueReport/AmountDueReport'

import {FONT, SCREEN} from '../helper/Constant';
import {BLACK, PURPLE, RED, WHITE} from '../helper/Color';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.linear,
  },
});

const _renderItem = (text, screenToMove, props, screenMove, nameIcon, type) => {
  const [] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        screenMove ? props.navigation.navigate(screenToMove) : alert('open');
      }}
      style={{
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
      }}>
      <Icon2 name={nameIcon} color={RED.light} size={25} />
      <Text
        style={{
          fontSize: 15,
          marginLeft: SCREEN.width / 13,
          fontFamily: FONT.Poppins.regular,
          color: BLACK.light,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const _renderReport = (
  text,
  screenToMove,
  props,
  screenMove,
  nameIcon,
  type,
) => {
  const [open, selectOpen] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => selectOpen(!open)}
        style={{
          height: 40,
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: 20,
        }}>
        <Icon2 name={nameIcon} color={RED.light} size={25} />
        <Text
          style={{
            fontSize: 15,
            marginLeft: SCREEN.width / 13,
            fontFamily: FONT.Poppins.regular,
            color: BLACK.light,
          }}>
          {text}
        </Text>
        <View
          style={{
            position: 'absolute',
            right: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign
            name={!open ? 'right' : 'down'}
            size={20}
            color={BLACK.light}
          />
        </View>
      </TouchableOpacity>
      {open && (
        <View style={{width: SCREEN.width - 50, paddingLeft: 10}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("PatientReport")}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Icon2 name={'user'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Patient
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('DiscountReport')}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Icon2 name={'percent'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Discount
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("IncomeReport")}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Ionicons name={'document-text'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Income
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AppointmentsReport')}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Ionicons name={'calendar-sharp'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Appointment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AmountDueReport')}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Ionicons name={'card-sharp'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Amount Due
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const _renderHealth = (
  text,
  screenToMove,
  props,
  screenMove,
  nameIcon,
  type,
) => {
  const [open, selectOpen] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => selectOpen(!open)}
        style={{
          height: 40,
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: 20,
        }}>
        <Icon2 name={nameIcon} color={RED.light} size={25} />
        <Text
          style={{
            fontSize: 15,
            marginLeft: SCREEN.width / 13,
            fontFamily: FONT.Poppins.regular,
            color: BLACK.light,
          }}>
          {text}
        </Text>
        <View
          style={{
            position: 'absolute',
            right: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign
            name={!open ? 'right' : 'down'}
            size={20}
            color={BLACK.light}
          />
        </View>
      </TouchableOpacity>
      {open && (
        <View style={{width: SCREEN.width - 50, paddingLeft: 10}}>
          <TouchableOpacity
            onPress={() => selectOpen(!open)}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Icon2 name={'user'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Health Publish
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectOpen(!open)}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Icon2 name={'percent'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Health Feed
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const _renderServices = (
  text,
  screenToMove,
  props,
  screenMove,
  nameIcon,
  type,
) => {
  const [open, selectOpen] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => selectOpen(!open)}
        style={{
          height: 40,
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: 20,
        }}>
        <Icon2 name={nameIcon} color={RED.light} size={25} />
        <Text
          style={{
            fontSize: 15,
            marginLeft: SCREEN.width / 13,
            fontFamily: FONT.Poppins.regular,
            color: BLACK.light,
          }}>
          {text}
        </Text>
        <View
          style={{
            position: 'absolute',
            right: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign
            name={!open ? 'right' : 'down'}
            size={20}
            color={BLACK.light}
          />
        </View>
      </TouchableOpacity>
      {open && (
        <View style={{width: SCREEN.width - 50, paddingLeft: 10}}>
          <TouchableOpacity
            onPress={() => selectOpen(!open)}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Icon2 name={'user'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Topics & Discussion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectOpen(!open)}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Icon2 name={'percent'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Health Feedback
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectOpen(!open)}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Ionicons name={'document-text'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Expenses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectOpen(!open)}
            style={{
              height: 40,
              alignItems: 'center',
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Ionicons name={'calendar-sharp'} color={RED.light} size={20} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: SCREEN.width / 13,
                fontFamily: FONT.Poppins.regular,
                color: BLACK.light,
              }}>
              Communication
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1, backgroundColor: WHITE.dark}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          minHeight: 85,
          paddingBottom: 5,
        }}>
        <Image
          source={require('../assets/appIcon.png')}
          style={{
            height: 80,
            width: SCREEN.width - 50,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          height: 1,
          width: '95%',
          alignSelf: 'center',
          backgroundColor: BLACK.placeholder,
        }}
      />
      <View
        style={{
          height: 1,
          width: '95%',
          backgroundColor: BLACK.placeholder,
          alignSelf: 'center',
        }}
      />
      <DrawerItems
        {...props}
        iconContainerStyle={{width: 25}}
        itemStyle={{backgroundColor: WHITE.dark}}
        labelStyle={{
          fontSize: 15,
          color: BLACK.dark,
          fontFamily: FONT.Poppins.regular,
        }}
      />
      <View
        style={{
          height: 1,
          width: '95%',
          backgroundColor: BLACK.placeholder,
          alignSelf: 'center',
        }}
      />

      {_renderItem('Calendar', 'Calendar', props, true, 'calendar', 'icon')}
      {_renderItem('Patient', 'Patient', props, true, 'users', 'icon')}
      {_renderItem('Chat', 'Chat', props, true, 'wechat', 'icon')}
      {_renderReport('Report', 'Report', props, true, 'files-o', 'icon')}

      <View
        style={{
          height: 1,
          width: '95%',
          backgroundColor: BLACK.placeholder,
          alignSelf: 'center',
        }}
      />
      <View style={{marginTop: 10, flex: 1}}>
        {_renderHealth('Health', 'Calendar', props, true, 'heartbeat', 'icon')}
        {_renderServices('Services', 'Patient', props, true, 'user-md', 'icon')}
        {_renderItem('Logs', 'Logs', props, true, 'file', 'icon')}
        {_renderItem('Q&A', 'QAndA', props, true, 'question-circle-o', 'icon')}
        <View style={{height: 10}} />
      </View>
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: DashBoard,
      navigationOptions: {
        drawerLabel: 'Analytics',
        drawerIcon: ({focused}) => (
          <Icon
            size={30}
            color={focused ? PURPLE.default : PURPLE.light}
            name={'google-analytics'}
          />
        ),
      },
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    initialRouteName: 'Main',
    activeTintColor: PURPLE.default,
    inactiveTintColor: PURPLE.light,
    drawerWidth: SCREEN.width - 50,
    showLabel: false,
    animationEnabled: true,
    activeBackgroundColor: WHITE.dark,
    inactiveBackgroundColor: WHITE.dark,
    drawerOpenRoute: 'LeftSideMenu',
    drawerCloseRoute: 'LeftSideMenuClose',
    drawerToggleRoute: 'LeftSideMenuToggle',
  },
);

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
  SignIn: {
    screen: SignIn,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  ForgotPasswordStep: {
    screen: ForgotPasswordStep,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  QAndA: {
    screen: QAndA,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  EmailVerify: {
    screen: EmailVerify,
    navigationOptions: {headerShown: false, gestureEnabled: true},
  },
  Logs: {
    screen: Logs,
    navigationOptions: {headerShown: false, gestureEnabled: true},
  },
  Chat: {
    screen: Chat,
    navigationOptions: {headerShown: false, gestureEnabled: true},
  },
  SetNewPassword: {
    screen: SetNewPassword,
    navigationOptions: {headerShown: false, gestureEnabled: true},
  },
  Patient: {
    screen: Patient,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  PhoneSignInVerify: {
    screen: PhoneSignInVerify,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
});

const MainApp = createStackNavigator({

  Home: {
    screen: AppDrawerNavigator,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  PatientReport: {
    screen: PatientReport,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  IncomeReport: {
    screen: IncomeReport,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  DiscountReport: {
    screen: DiscountReport,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  AppointmentsReport: {
    screen: AppointmentsReport,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },
  AmountDueReport: {
    screen: AmountDueReport,
    navigationOptions: {headerShown: false, gestureEnabled: false},
  },

});

// eslint-disable-next-line no-undef
export default SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoginStack,
    App: LoginStack,
    Auth: LoginStack,
    MainApp: MainApp,
  },
  {
    initialRouteName: 'AuthLoading',
    transitionConfig: noTransitionConfig,
  },
);
