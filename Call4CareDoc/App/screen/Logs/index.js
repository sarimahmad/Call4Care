/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import DropDownPicker from 'react-native-dropdown-picker';

import * as Actions from '../../redux/actions';
import HeaderWithBack from '../../component/HeaderWithBack';
import {FONT, isIphoneXorAbove, PATIENT, SCREEN} from '../../helper/Constant';
import {BLACK, WHITE} from '../../helper/Color';
import QAndAList from '../../component/QAndAList';

class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      notificationShow: false,
      selectedTab: 0,
    };
  }

  _renderChat = () => {
    return <QAndAList data={PATIENT} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => {}} />
        <SafeAreaView style={styles.safeView}>
          <HeaderWithBack
            leftPortion={true}
            headerText={'Logs'}
            backPress={() => this.props.navigation.navigate('MainApp')}
          />
          <View style={styles.WrapperView}>
            <Text style={styles.Popin18Regular}>Activity logs</Text>
            <Text style={styles.Popin10Regular}>Abbo</Text>
            <DropDownPicker
              items={[
                {
                  label: 'TODAY',
                  value: 'today',
                  hidden: true,
                },
                {
                  label: 'WEEK',
                  value: 'week',
                },
                {
                  label: 'MONTH',
                  value: 'Month',
                },
                {
                  label: 'ALL',
                  value: 'all',
                },
              ]}
              defaultValue={this.state.country}
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={(item) =>
                this.setState({
                  country: item.value,
                })
              }
            />
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
    paddingHorizontal: 10,
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
    backgroundColor: 'red',
  },
  Popin18Regular: {
    fontSize: 18,
    fontFamily: FONT.Poppins.regular,
    marginVertical: 5,
  },
  Popin10Regular: {
    fontSize: 10,
    fontFamily: FONT.Poppins.regular,
  },
  Flex1Row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE.dark,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  OptionText: {
    fontSize: 16,
    fontFamily: FONT.Poppins.regular,
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

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
