/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import * as Actions from '../../redux/actions';
import TypeUserStyles from './TypeUserStyles';
import {BLACK} from '../../helper/Color';

class TypeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      loading: false,
      fcmToken: '',
    };
  }

  render() {
    return (
      <TypeUserStyles.WrapperViewVertical>
        <NavigationEvents onDidFocus={(payload) => {}} />
        <TypeUserStyles.SafeView>
          <TypeUserStyles.Scroll
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <TypeUserStyles.ChooseText>
              Choose one of the service
            </TypeUserStyles.ChooseText>
            <TypeUserStyles.Call4CareText>
              CALL4CARES
            </TypeUserStyles.Call4CareText>
            <TypeUserStyles.RedLineViewWrapper>
              <TypeUserStyles.RedLineInnerView />
            </TypeUserStyles.RedLineViewWrapper>
            <TypeUserStyles.DocImage
              source={require('../../assets/doctor_main.png')}
            />
            <TypeUserStyles.OptionMainWrapper>
              <TypeUserStyles.OptionWrapper
                style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                <Icon size={50} color={BLACK.dark} name="doctor" />
                <TypeUserStyles.ContinueBtn
                  onPress={() => this.props.navigation.navigate('DashBoard')}>
                  <TypeUserStyles.ContinueBtnText>
                    Continue as a {'\n'}Doctor/Clinic
                  </TypeUserStyles.ContinueBtnText>
                </TypeUserStyles.ContinueBtn>
              </TypeUserStyles.OptionWrapper>
              <TypeUserStyles.OptionWrapper
                style={{
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}>
                <Icon1 size={50} color={BLACK.dark} name="heartbeat" />
                <TypeUserStyles.ContinueBtn
                  onPress={() => this.props.navigation.navigate('SignIn')}>
                  <TypeUserStyles.ContinueBtnText>
                    Continue for a Hospital
                  </TypeUserStyles.ContinueBtnText>
                </TypeUserStyles.ContinueBtn>
              </TypeUserStyles.OptionWrapper>
            </TypeUserStyles.OptionMainWrapper>
          </TypeUserStyles.Scroll>
        </TypeUserStyles.SafeView>
      </TypeUserStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(TypeUser);
