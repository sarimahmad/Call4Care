import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

import * as Actions from '../../redux/actions';
import ForgotPasswordStepStyles from './ForgotPasswordStepStyles';
import {WHITE} from '../../helper/Color';

class ForgotPasswordStep extends Component {
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
    return (
      <ForgotPasswordStepStyles.WrapperViewVertical>
        <ForgotPasswordStepStyles.SafeView>
          <ForgotPasswordStepStyles.TopImage
            source={require('../../assets/password.png')}
          />
          <ForgotPasswordStepStyles.TitleText>
            FORGOT PASSWORD
          </ForgotPasswordStepStyles.TitleText>
          <ForgotPasswordStepStyles.PasswordSendText>
            “20thfloortechnologies@gmail.com”.{'\n'}
            <ForgotPasswordStepStyles.EmailText>
              account and we will send you an email/otp {'\n'}
            </ForgotPasswordStepStyles.EmailText>
            Please click the link in your email to set a new password.{'\n'}
          </ForgotPasswordStepStyles.PasswordSendText>
          <ForgotPasswordStepStyles.TextInputWrapper>
            <ForgotPasswordStepStyles.TextInputInner
              placeholder={'Email ID/Mobile Number'}
              placeholderTextColor={WHITE.dark}
            />
          </ForgotPasswordStepStyles.TextInputWrapper>
          <ForgotPasswordStepStyles.SignInButton>
            <ForgotPasswordStepStyles.SignInButtonText>
              Login
            </ForgotPasswordStepStyles.SignInButtonText>
          </ForgotPasswordStepStyles.SignInButton>
          <ForgotPasswordStepStyles.PasswordSendText
            onPress={() => this.props.navigation.navigate('SignIn')}>
            SignIn?
          </ForgotPasswordStepStyles.PasswordSendText>
        </ForgotPasswordStepStyles.SafeView>
      </ForgotPasswordStepStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordStep);
