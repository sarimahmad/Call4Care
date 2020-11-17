import React, {Component} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import Route from '../../Network/route';
import SplashStyles from './SplashStyles';
import {USERDETAIL, TOKEN, BASE_URL} from '../../helper/Constant';

const route = new Route(BASE_URL);

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      loading: false,
      fcmToken: '',
    };
  }

  getAsyncData = async () => {
    //  AsyncStorage.clear()
    const userDetail = await AsyncStorage.getItem(USERDETAIL);
    const token = await AsyncStorage.getItem(TOKEN);
    if (token === undefined || token === '' || token === null) {
      this.props.navigation.navigate('LocationScreen');
    } else if (
      userDetail === undefined ||
      userDetail === '' ||
      userDetail === null
    ) {
      this.props.setToken(token);
      this.props.navigation.navigate('LocationScreen');
    } else {
      if (JSON.parse(userDetail).isProfileCompleted) {
        this.props.setToken(token);
        this.props.alterJustUser(JSON.parse(userDetail));
        this.props.navigation.navigate('LocationScreen');
      } else {
        this.props.setToken(token);
        this.props.alterJustUser(JSON.parse(userDetail));
        this.props.navigation.navigate('MainScreen');
      }
    }
  };

  componentDidMount() {}

  updateProfile = (token, userData) => {
    this.setState({isLoading: true});
    const data = new FormData();
    data.append('api_token', token);
    data.append('user_id', userData.id);
    data.append('fcm_token', this.state.fcmToken);
    data.append('fcm_token_type', 'android');

    route.post('edit-user-data', data).then((res) => {
      if (res.error) {
        Alert.alert('Error', JSON.stringify(res));
        this.setState({isLoading: false});
      } else {
        this.setState({isLoading: false});
        this.props.navigation.navigate('HomeMain');
      }
    });
  };

  render() {
    return (
      <SplashStyles.WrapperViewVertical>
        <NavigationEvents
          onDidFocus={(payload) => {
            setTimeout(() => {
              this.getAsyncData();
            }, 700);
          }}
        />
        <SplashStyles.SafeView>
          <SplashStyles.SplashIcon
            source={require('../../assets/splashAnimation.gif')}
          />
        </SplashStyles.SafeView>
      </SplashStyles.WrapperViewVertical>
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

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
