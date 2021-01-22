import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View, SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {LineChart, BarChart, ProgressChart} from 'react-native-chart-kit';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Actions from '../../redux/actions';
import {BLACK, BLUE, GREEN, PURPLE, RED, WHITE} from '../../helper/Color';
import Header from '../../component/Header';
import {FONT, isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import Notification from '../../component/Notification';
import UserPopup from '../../component/UserPopup';

const chartConfig = {
  backgroundColor: WHITE.dark,
  backgroundGradientFrom: WHITE.cream,
  backgroundGradientTo: WHITE.dark,
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => RED.app,
  labelColor: (opacity = 1) => RED.app,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: RED.app,
  },
};

const ProgressChartConfig = {
  backgroundGradientFrom: WHITE.dark,
  backgroundGradientTo: WHITE.dark,
  decimalPlaces: 1, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(94, 1, 140, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(94, 1, 140, ${opacity})`,
  propsForDots: {
    r: '2',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      loading: false,
      fcmToken: '',
      showSearch: false,
      notificationShow: false,
      userShow: false,
      SearchText: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => {}} />
        <Header
          leftPortion={true}
          menuPress={() => this.props.navigation.openDrawer()}
          showSearch={this.state.showSearch}
          notificationPress={() => this.setState({notificationShow: true})}
          searchPress={() => this.setState({showSearch: true})}
          userPress={() => this.props.navigation.navigate('Profile')}
          hideSearch={() => this.setState({showSearch: false})}
          updateSearchText={(SearchText) => this.setState({SearchText})}
          SearchText={this.state.SearchText}
        />
        <SafeAreaView style={styles.safeView}>
          <ScrollView style={styles.safeView}>
            <View style={styles.DetailWrapper}>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [100, 90, 200, 250, 600, 1000],
                    },
                  ],
                }}
                width={SCREEN.width - 30}
                height={SCREEN.width - 100}
                verticalLabelRotation={10}
                withInnerLines={false}
                chartConfig={{
                  backgroundColor: WHITE.dark,
                  backgroundGradientFrom: WHITE.cream,
                  backgroundGradientTo: WHITE.dark,
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => BLUE.app,
                  labelColor: (opacity = 1) => PURPLE.app,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: BLUE.app,
                  },
                }}
                bezier
              />
              <View style={styles.AbsoluteDetailView}>
                <View style={styles.InnerWrapper}>
                  <View
                    style={[
                      styles.UserView,
                      {backgroundColor: BLUE.extra_light},
                    ]}>
                    <Icon1 name="users" size={30} color={BLUE.extra_light} />
                  </View>
                  <Text style={styles.Font20Bold}>{'  '}92.6k</Text>
                  <Text style={styles.Font15Regular}>
                    {'  '}Total Register Patient
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.DetailWrapper}>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [1, 0, 1, 1, 4, 1],
                    },
                  ],
                }}
                width={SCREEN.width - 30}
                height={SCREEN.width - 100}
                verticalLabelRotation={10}
                withInnerLines={false}
                chartConfig={{
                  backgroundColor: WHITE.dark,
                  backgroundGradientFrom: WHITE.cream,
                  backgroundGradientTo: WHITE.dark,
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => GREEN.app,
                  labelColor: (opacity = 1) => GREEN.app,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: GREEN.app,
                  },
                }}
                bezier
              />
              <View style={styles.AbsoluteDetailView}>
                <View style={styles.InnerWrapper}>
                  <View
                    style={[
                      styles.UserView,
                      {backgroundColor: GREEN.extra_light},
                    ]}>
                    <Icon1 name="users" size={30} color={GREEN.extra_light} />
                  </View>
                  <Text style={styles.Font20Bold}>{'  '}8</Text>
                  <Text style={styles.Font15Regular}>{'  '}Staff Members</Text>
                </View>
              </View>
            </View>
            <View style={styles.DetailWrapper}>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [100, 90, 200, 250, 600, 1000],
                    },
                  ],
                }}
                width={SCREEN.width - 30}
                height={SCREEN.width - 100}
                verticalLabelRotation={10}
                withInnerLines={false}
                chartConfig={chartConfig}
                bezier
              />
              <View style={styles.AbsoluteDetailView}>
                <View style={styles.InnerWrapper}>
                  <View
                    style={[
                      styles.UserView,
                      {backgroundColor: RED.extra_light},
                    ]}>
                    <Icon name="dollar" size={30} color={RED.extra_light} />
                  </View>
                  <Text style={styles.Font20Bold}>{'  '}92.6k</Text>
                  <Text style={styles.Font15Regular}>{'  '}Total Revenue</Text>
                </View>
              </View>
            </View>
            <View style={styles.DetailWrapper}>
              <BarChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [20, 45, 28, 80, 99, 43],
                    },
                  ],
                }}
                width={SCREEN.width - 50}
                height={SCREEN.width - 100}
                yAxisLabel="$"
                chartConfig={chartConfig}
                withInnerLines={false}
                fromZero={true}
                verticalLabelRotation={30}
                showBarTops={false}
                showValuesOnTopOfBars={true}
              />
            </View>
            <View style={styles.DetailWrapper}>
              <ProgressChart
                data={{
                  labels: ['Done', 'Pending', 'Cancel'], // optional
                  data: [0.8, 0.2, 0.1],
                }}
                width={SCREEN.width - 30}
                height={SCREEN.width - 100}
                strokeWidth={12}
                radius={30}
                chartConfig={ProgressChartConfig}
                hideLegend={false}
                bezier={true}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        {this.state.notificationShow && (
          <Notification
            loadingText="Notification"
            onCancelPress={() => this.setState({notificationShow: false})}
          />
        )}
        {this.state.userShow && (
          <UserPopup
            loadingText="userDetail"
            onCancelPress={() => this.setState({userShow: false})}
          />
        )}
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
  DetailWrapper: {
    height: SCREEN.width - 100,
    width: SCREEN.width - 30,
    backgroundColor: WHITE.dark,
    borderWidth: 0.3,
    borderColor: WHITE.borderLight,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: BLACK.darkLight,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,
    elevation: 8,
  },
  AbsoluteDetailView: {
    height: SCREEN.width - 100,
    width: SCREEN.width - 30,
    position: 'absolute',
    paddingLeft: 70,
    paddingTop: 15,
  },
  UserView: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InnerWrapper: {
    alignItems: 'flex-start',
  },
  Font20Bold: {
    fontFamily: FONT.Poppins.bold,
    fontSize: 20,
    color: BLACK.dark,
    marginTop: 5,
  },
  Font15Regular: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 15,
    color: BLACK.dark,
    marginTop: 5,
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

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
