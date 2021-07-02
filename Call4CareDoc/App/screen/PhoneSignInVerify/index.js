/* eslint-disable no-alert */
import React, {Component} from 'react';
import {Alert, StatusBar} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';

import * as Actions from '../../redux/actions';
import PhoneSignInVerifyStyles from './PhoneSignInVerifyStyles';
import {BLACK, WHITE} from '../../helper/Color';
import Loader from '../../component/Loader';

class PhoneSignInVerify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      loading: false,
      phoneNumberValid: false,
      phoneNumber: '',
      fcmToken: '',
      firstText: '',
      secondText: '',
      thirdText: '',
      fourthText: '',
      fifthText: '',
      sixthText: '',
    };
  }

  componentDidMount() {}

  confirmCode = async () => {
    const {
      firstText,
      secondText,
      thirdText,
      fourthText,
      fifthText,
      sixthText,
    } = this.state;
    const completeString =
      firstText + secondText + thirdText + fourthText + fifthText + sixthText;
    const {state} = this.props.navigation;
    try {
      const result = await state.params.confirmation.confirm(completeString);
      alert(JSON.stringify(result));
      this.SignInPhoneNumber(state.params.confirmation._auth._user.phoneNumber);
    } catch (error) {
      this.setState({
        loading: false,
        firstText: '',
        secondText: '',
        thirdText: '',
        fourthText: '',
        fifthText: '',
        sixthText: '',
      });
      this.firstTextInput.focus();
      Alert.alert('Failed');
    }
  };

  render() {
    return (
      <PhoneSignInVerifyStyles.WrapperViewVertical>
        <StatusBar hidden={false} />
        <PhoneSignInVerifyStyles.CrossButton
          onPress={() => this.props.navigation.pop()}>
          <Icon name="cross" color={BLACK.dark} size={40} />
        </PhoneSignInVerifyStyles.CrossButton>
        <PhoneSignInVerifyStyles.ContctImage
          source={require('../../assets/phone_input.png')}
        />
        <PhoneSignInVerifyStyles.InstructionText>
          Enter your mobile number we will send {'\n'} you the OTP to verify
          later
        </PhoneSignInVerifyStyles.InstructionText>
        <PhoneSignInVerifyStyles.PhoneInputWrapper>
          <PhoneSignInVerifyStyles.PhoneInputInnerWrapper>
            <PhoneSignInVerifyStyles.PhoneInputCountryCode
              ref={(input) => {
                this.firstTextInput = input;
              }}
              keyboardType={'number-pad'}
              maxLength={1}
              value={this.state.firstText}
              onChangeText={(firstText) => {
                if (
                  firstText.trim().length > 0 &&
                  firstText.trim().length < 2
                ) {
                  this.setState({firstText});
                  this.secondTextInput.focus();
                }
              }}
            />
            <PhoneSignInVerifyStyles.PhoneInputCountryCode
              ref={(input) => {
                this.secondTextInput = input;
              }}
              keyboardType={'number-pad'}
              value={this.state.secondText}
              maxLength={1}
              onChangeText={(secondText) => {
                if (
                  secondText.trim().length > 0 &&
                  secondText.trim().length < 2
                ) {
                  this.setState({secondText});
                  this.thirdTextInput.focus();
                }
              }}
            />
            <PhoneSignInVerifyStyles.PhoneInputCountryCode
              ref={(input) => {
                this.thirdTextInput = input;
              }}
              keyboardType={'number-pad'}
              value={this.state.thirdText}
              maxLength={1}
              onChangeText={(thirdText) => {
                if (
                  thirdText.trim().length > 0 &&
                  thirdText.trim().length < 2
                ) {
                  this.setState({thirdText});
                  this.fourthTextInput.focus();
                }
              }}
            />
            <PhoneSignInVerifyStyles.PhoneInputCountryCode
              ref={(input) => {
                this.fourthTextInput = input;
              }}
              keyboardType={'number-pad'}
              value={this.state.fourthText}
              maxLength={1}
              onChangeText={(fourthText) => {
                if (
                  fourthText.trim().length > 0 &&
                  fourthText.trim().length < 2
                ) {
                  this.setState({fourthText});
                  this.fifthTextInput.focus();
                }
              }}
            />
            <PhoneSignInVerifyStyles.PhoneInputCountryCode
              ref={(input) => {
                this.fifthTextInput = input;
              }}
              keyboardType={'number-pad'}
              value={this.state.fifthText}
              maxLength={1}
              onChangeText={(fifthText) => {
                if (
                  fifthText.trim().length > 0 &&
                  fifthText.trim().length < 2
                ) {
                  this.setState({fifthText});
                  this.sixthTextInput.focus();
                }
              }}
            />
            <PhoneSignInVerifyStyles.PhoneInputCountryCode
              ref={(input) => {
                this.sixthTextInput = input;
              }}
              keyboardType={'number-pad'}
              value={this.state.sixthText}
              maxLength={1}
              onChangeText={(sixthText) => {
                if (
                  sixthText.trim().length > 0 &&
                  sixthText.trim().length < 2
                ) {
                  this.setState({sixthText, loading: true});
                  setTimeout(() => {
                    this.confirmCode();
                  }, 3000);
                }
              }}
            />
          </PhoneSignInVerifyStyles.PhoneInputInnerWrapper>
          <PhoneSignInVerifyStyles.SubmitButton>
            <PhoneSignInVerifyStyles.CountryCodeText
              style={{color: WHITE.dark}}>
              Submit
            </PhoneSignInVerifyStyles.CountryCodeText>
          </PhoneSignInVerifyStyles.SubmitButton>
        </PhoneSignInVerifyStyles.PhoneInputWrapper>
        {this.state.loading && <Loader loadingText={'verifying'} />}
      </PhoneSignInVerifyStyles.WrapperViewVertical>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneSignInVerify);
