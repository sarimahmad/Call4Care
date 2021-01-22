import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import Header from '../../component/Header';
import {FONT, isIphoneXorAbove, PATIENT, SCREEN} from '../../helper/Constant';
import {BLACK, WHITE} from '../../helper/Color';
import AppointmentList from '../../component/AppointmentList';

class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      notificationShow: false,
      selectedTab: 0,
    };
  }

  _renderToday = (data) => {
    return <AppointmentList data={PATIENT} currentState={'Today'} />;
  };

  _renderRecent = (data) => {
    return <AppointmentList data={PATIENT} currentState={'Recent'} />;
  };

  _renderAll = (data) => {
    return <AppointmentList data={PATIENT} currentState={'All'} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => {}} />
        <Header
          leftPortion={true}
          showBack={true}
          showSearch={this.state.showSearch}
          notificationPress={() => this.setState({notificationShow: true})}
          searchPress={() => this.setState({showSearch: true})}
          userPress={() => this.props.navigation.navigate('Profile')}
          hideSearch={() =>
            this.state.showSearch
              ? this.setState({showSearch: false})
              : this.props.navigation.navigate('MainApp')
          }
          updateSearchText={(SearchText) => this.setState({SearchText})}
          SearchText={this.state.SearchText}
        />
        <SafeAreaView style={styles.safeView}>
          <View style={styles.WrapperView}>
            <View style={styles.RowView}>
              <TouchableHighlight
                style={styles.Flex1}
                onPress={() => this.setState({selectedTab: 0})}
                underlayColor={WHITE.light}>
                <Text
                  style={[
                    styles.OptionText,
                    {
                      fontFamily:
                        this.state.selectedTab === 0
                          ? FONT.Poppins.black
                          : FONT.Poppins.regular,
                    },
                  ]}>
                  Today
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.Flex1}
                onPress={() => this.setState({selectedTab: 1})}
                underlayColor={WHITE.light}>
                <Text
                  style={[
                    styles.OptionText,
                    {
                      fontFamily:
                        this.state.selectedTab === 1
                          ? FONT.Poppins.black
                          : FONT.Poppins.regular,
                    },
                  ]}>
                  Recent
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.Flex1}
                onPress={() => this.setState({selectedTab: 2})}
                underlayColor={WHITE.light}>
                <Text
                  style={[
                    styles.OptionText,
                    {
                      fontFamily:
                        this.state.selectedTab === 2
                          ? FONT.Poppins.black
                          : FONT.Poppins.regular,
                    },
                  ]}>
                  All
                </Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.WrapperView}>
            {this.state.selectedTab === 0
              ? this._renderToday()
              : this.state.selectedTab === 1
              ? this._renderRecent()
              : this._renderAll()}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE.dark,
    paddingTop: isIphoneXorAbove ? 30 : 10,
  },
  safeView: {
    flex: 1,
    backgroundColor: WHITE.dark,
  },
  WrapperView: {
    width: SCREEN.width - 30,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 0.3,
    marginTop: 10,
    borderColor: WHITE.off,
    shadowColor: BLACK.light,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: WHITE.dark,
    alignSelf: 'center',
  },
  RowView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  Flex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE.dark,
  },
  OptionText: {
    fontSize: 18,
    fontFamily: FONT.Poppins.black,
  },
});

function mapStateToProps(state) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Patient);
