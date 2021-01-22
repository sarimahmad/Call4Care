/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BackHandler, KeyboardAvoidingView, Platform} from 'react-native';
import PhoneInput from 'react-native-phone-input';

import * as Actions from '../../redux/actions';
import ForgotPasswordStyles from './ForgotPasswordStyles';
import {WHITE} from '../../helper/Color';

class ForgotPassword extends Component {
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
      emailSelected: true,
    };
    this.backAction = this.backAction.bind(this);
  }

  backAction() {
    this.props.navigation.pop();
    return true;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  render() {
    return (
      <ForgotPasswordStyles.WrapperViewVertical>
        <ForgotPasswordStyles.SafeView>
          <ForgotPasswordStyles.TopImage
            source={require('../../assets/password.png')}
          />
          <ForgotPasswordStyles.TitleText>
            FORGOT PASSWORD
          </ForgotPasswordStyles.TitleText>
          <ForgotPasswordStyles.PasswordSendText>
            Provide us the email id/ mobile of your Call4Cares{'\n'}
            account and we will send you an email/otp {'\n'}
            with instructions to reset your password.{'\n'}
          </ForgotPasswordStyles.PasswordSendText>
          <ForgotPasswordStyles.SwitchWrapperView>
            <ForgotPasswordStyles.SwitchInnerWrapper
              onPress={() => this.setState({emailSelected: true})}
              style={{borderBottomWidth: this.state.emailSelected ? 2 : 0}}>
              <ForgotPasswordStyles.SwitchInnerText>
                Email
              </ForgotPasswordStyles.SwitchInnerText>
            </ForgotPasswordStyles.SwitchInnerWrapper>
            <ForgotPasswordStyles.SwitchInnerWrapper
              onPress={() => this.setState({emailSelected: false})}
              style={{borderBottomWidth: !this.state.emailSelected ? 2 : 0}}>
              <ForgotPasswordStyles.SwitchInnerText>
                Phone
              </ForgotPasswordStyles.SwitchInnerText>
            </ForgotPasswordStyles.SwitchInnerWrapper>
          </ForgotPasswordStyles.SwitchWrapperView>
          {!this.state.emailSelected ? (
            <ForgotPasswordStyles.TextInputWrapper>
              <PhoneInput
                ref={(ref) => {
                  this.phone = ref;
                }}
                initialCountry={'ug'}
                textProps={{
                  placeholder: 'Phone Number',
                  placeholderTextColor: WHITE.dark,
                }}
                autoFormat={true}
                flagStyle={{height: 30, width: 40}}
                style={{
                  height: 57,
                  width: '95%',
                  alignSelf: 'center',
                }}
                textStyle={{color: WHITE.dark, fontSize: 15}}
              />
            </ForgotPasswordStyles.TextInputWrapper>
          ) : (
            <ForgotPasswordStyles.TextInputWrapper>
              <ForgotPasswordStyles.TextInputInner
                placeholder={'Email iD'}
                placeholderTextColor={WHITE.dark}
              />
            </ForgotPasswordStyles.TextInputWrapper>
          )}

          <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ForgotPasswordStyles.SignInButton
              onPress={() =>
                this.state.emailSelected
                  ? this.props.navigation.navigate('EmailVerify', {
                      from: 'forgotPassword',
                    })
                  : this.props.navigation.navigate('OTPVerify', {
                      from: 'forgotPassword',
                    })
              }>
              <ForgotPasswordStyles.SignInButtonText>
                Send Me Instructions
              </ForgotPasswordStyles.SignInButtonText>
            </ForgotPasswordStyles.SignInButton>
          </KeyboardAvoidingView>
          <ForgotPasswordStyles.PasswordSendText
            onPress={() => this.props.navigation.navigate('SignIn')}>
            SignIn?
          </ForgotPasswordStyles.PasswordSendText>
        </ForgotPasswordStyles.SafeView>
      </ForgotPasswordStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
