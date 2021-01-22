import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

import * as Actions from '../../redux/actions';
import EmailVerifyStyles from './EmailVerifyStyles';

class EmailVerify extends Component {
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
    this.props.navigation.pop();
    return true;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <EmailVerifyStyles.WrapperViewVertical>
        <EmailVerifyStyles.SafeView>
          <EmailVerifyStyles.TopImage
            source={require('../../assets/email.png')}
          />
          <EmailVerifyStyles.TitleText>
            EMAIL VERIFICATION
          </EmailVerifyStyles.TitleText>
          <EmailVerifyStyles.PasswordSendText>
            Password reset link has been sent to {'\n'}
            <EmailVerifyStyles.EmailText>
              “20thfloortechnologies@gmail.com”.{'\n'}
            </EmailVerifyStyles.EmailText>
            Please click the link in your email to set a new password.
          </EmailVerifyStyles.PasswordSendText>
          <EmailVerifyStyles.SignInButton
            onPress={() =>
              params.from === 'signUp'
                ? this.props.navigation.navigate('SetNewPassword')
                : this.props.navigation.navigate('SetNewPassword')
            }>
            <EmailVerifyStyles.SignInButtonText>
              Login
            </EmailVerifyStyles.SignInButtonText>
          </EmailVerifyStyles.SignInButton>
          <EmailVerifyStyles.ResendText>
            Resend Email
          </EmailVerifyStyles.ResendText>
        </EmailVerifyStyles.SafeView>
      </EmailVerifyStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerify);
