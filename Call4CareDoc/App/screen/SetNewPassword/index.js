import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

import * as Actions from '../../redux/actions';
import SetNewPasswordStyles from './SetNewPasswordStyles';
import {WHITE} from '../../helper/Color';

class SetNewPassword extends Component {
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

  resetStack = () => {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'SignIn',
          }),
        ],
      }),
    );
  };

  backAction() {
    this.props.navigation.pop();
    return true;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  render() {
    return (
      <SetNewPasswordStyles.WrapperViewVertical>
        <SetNewPasswordStyles.SafeView>
          <SetNewPasswordStyles.TopImage
            source={require('../../assets/password.png')}
          />
          <SetNewPasswordStyles.TitleText>
            SET NEW PASSWORD
          </SetNewPasswordStyles.TitleText>
          <SetNewPasswordStyles.TextInputWrapper>
            <SetNewPasswordStyles.TextInputInner
              placeholder={'New Password'}
              placeholderTextColor={WHITE.dark}
            />
          </SetNewPasswordStyles.TextInputWrapper>
          <SetNewPasswordStyles.TextInputWrapper>
            <SetNewPasswordStyles.TextInputInner
              placeholder={'Confirm New Password'}
              placeholderTextColor={WHITE.dark}
            />
          </SetNewPasswordStyles.TextInputWrapper>
          <SetNewPasswordStyles.SignInButton onPress={() => this.resetStack()}>
            <SetNewPasswordStyles.SignInButtonText>
              Change Password
            </SetNewPasswordStyles.SignInButtonText>
          </SetNewPasswordStyles.SignInButton>
        </SetNewPasswordStyles.SafeView>
      </SetNewPasswordStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(SetNewPassword);
