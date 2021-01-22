/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {
  BackHandler,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import SignInStyles from './SignInStyles';
import {BLUE, WHITE} from '../../helper/Color';
import {FONT} from '../../helper/Constant';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      selectedRemember: false,
      email: '',
      password: '',
      isLoading: false,
      selectedSignIn: true,
      categorySelected: 'patient',
      remember: false,
      otp: false,
    };
    this.backAction = this.backAction.bind(this);
  }

  backAction() {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  render() {
    return (
      <SignInStyles.WrapperViewVertical>
        <StatusBar hidden={false} barStyle={'light-content'} />
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {
              BackHandler.addEventListener(
                'hardwareBackPress',
                this.backAction,
              );
            }, 3000);
          }}
        />
        <SignInStyles.SafeView>
          <SignInStyles.Scroll bounces={false}>
            <SignInStyles.TopImage
              source={require('../../assets/top_sign.png')}
            />
            <SignInStyles.SignInHeader allowFontScaling={false}>
              SIGNIN
            </SignInStyles.SignInHeader>
            <SignInStyles.NewUserText allowFontScaling={false}>
              New User ?{' '}
              <SignInStyles.NewUserText
                style={{fontFamily: FONT.Poppins.bold}}
                onPress={() =>
                  Linking.openURL(
                    'http://ourwork.20thfloor.us/call4cares/signup',
                  )
                }>
                SignUp
              </SignInStyles.NewUserText>
            </SignInStyles.NewUserText>
            <SignInStyles.TextInputWrapper>
              <SignInStyles.TextInputInner
                value={this.state.email}
                allowFontScaling={false}
                onChangeText={(email) => this.setState({email})}
                placeholder="Mobile Number / Email ID"
                placeholderTextColor={WHITE.dark}
              />
              <SignInStyles.AbsoluteRightIcon style={{position: 'absolute'}}>
                <Icon2 name="mobile-phone" color={WHITE.dark} size={23} />
              </SignInStyles.AbsoluteRightIcon>
            </SignInStyles.TextInputWrapper>
            {!this.state.otp && (
              <SignInStyles.TextInputWrapper>
                <SignInStyles.TextInputInner
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  allowFontScaling={false}
                  placeholder="Password"
                  placeholderTextColor={WHITE.dark}
                  secureTextEntry={true}
                />
                <SignInStyles.AbsoluteRightIcon
                  style={{position: 'absolute', right: 20}}>
                  <Icon3 name="lock" color={WHITE.dark} size={30} />
                </SignInStyles.AbsoluteRightIcon>
              </SignInStyles.TextInputWrapper>
            )}
            <SignInStyles.RememberForgotWrapper>
              <SignInStyles.RememberView>
                <SignInStyles.CheckBoxWrapper
                  onPress={() =>
                    this.setState({remember: !this.state.remember})
                  }>
                  <Icon
                    name={
                      !this.state.remember
                        ? 'checkbox-passive'
                        : 'checkbox-active'
                    }
                    color={WHITE.off}
                    size={18}
                  />
                </SignInStyles.CheckBoxWrapper>
                <SignInStyles.RememberMeText
                  allowFontScaling={false}
                  onPress={() =>
                    this.setState({remember: !this.state.remember})
                  }>
                  Remember me
                </SignInStyles.RememberMeText>
              </SignInStyles.RememberView>
              <SignInStyles.RememberView justifyContent={'flex-end'}>
                <SignInStyles.RememberMeText
                  allowFontScaling={false}
                  onPress={() =>
                    this.props.navigation.navigate('ForgotPassword')
                  }>
                  Forgot Password?
                </SignInStyles.RememberMeText>
              </SignInStyles.RememberView>
            </SignInStyles.RememberForgotWrapper>

            <SignInStyles.RememberView marginLeft={20} marginTop={10}>
              <SignInStyles.CheckBoxWrapper
                onPress={() => this.setState({otp: !this.state.otp})}>
                <Icon
                  name={
                    !this.state.otp ? 'checkbox-passive' : 'checkbox-active'
                  }
                  color={WHITE.off}
                  size={18}
                />
              </SignInStyles.CheckBoxWrapper>
              <SignInStyles.RememberMeText
                allowFontScaling={false}
                onPress={() => this.setState({otp: !this.state.otp})}>
                Login with OTP instead of password
              </SignInStyles.RememberMeText>
            </SignInStyles.RememberView>

            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <SignInStyles.SignInButton
                onPress={() => {
                  if (!this.state.otp) {
                    this.props.navigation.navigate('MainApp');
                  } else {
                    this.props.navigation.navigate('OTPVerify', {
                      from: 'signIn',
                    });
                  }
                }}>
                <SignInStyles.SignInButtonText allowFontScaling={false}>
                  {!this.state.otp ? 'SIGN IN EMAIL' : 'SIGN IN PHONE'}
                </SignInStyles.SignInButtonText>
              </SignInStyles.SignInButton>
            </KeyboardAvoidingView>
            <SignInStyles.OrWrapper>
              <SignInStyles.OrLineWrapper>
                <SignInStyles.OrLineInner />
              </SignInStyles.OrLineWrapper>
              <SignInStyles.OrTextWrapper>
                <SignInStyles.OrText allowFontScaling={false}>
                  or
                </SignInStyles.OrText>
              </SignInStyles.OrTextWrapper>
              <SignInStyles.OrLineWrapper>
                <SignInStyles.OrLineInner />
              </SignInStyles.OrLineWrapper>
            </SignInStyles.OrWrapper>

            <SignInStyles.SocialButton
              style={{
                backgroundColor: BLUE.google,
              }}>
              <Icon1 name="google" size={23} color={WHITE.dark} />
              <SignInStyles.SignInButtonText allowFontScaling={false}>
                {'      '}Login with Google
              </SignInStyles.SignInButtonText>
            </SignInStyles.SocialButton>
            <SignInStyles.SocialButton
              style={{
                marginTop: 0,
                backgroundColor: BLUE.facebook,
              }}>
              <Icon2 name="facebook" size={23} color={WHITE.dark} />
              <SignInStyles.SignInButtonText allowFontScaling={false}>
                {'      '}Login with Facebook
              </SignInStyles.SignInButtonText>
            </SignInStyles.SocialButton>
          </SignInStyles.Scroll>
        </SignInStyles.SafeView>
      </SignInStyles.WrapperViewVertical>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
