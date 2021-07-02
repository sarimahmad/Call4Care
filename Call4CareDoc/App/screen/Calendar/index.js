/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Calendar} from 'react-native-calendars';
import PhoneInput from 'react-native-phone-input';
import Entypo from 'react-native-vector-icons/Entypo';

import * as Actions from '../../redux/actions';
import Header from '../../component/Header';
import {FONT, isIphoneXorAbove, SCREEN} from '../../helper/Constant';
import {BLACK, BLUE, PURPLE, WHITE} from '../../helper/Color';

class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      notificationShow: false,
      selectedTab: 0,
      bookPatient: false,
      selectedDate: {year: 2021, month: 1, day: 13, dateString: '2012-01-13'},
    };
  }
  _renderCalendar = () => {
    return (
      <SafeAreaView style={styles.safeView}>
        <Calendar
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            '2021-01-30': {
              selected: true,
              marked: false,
            },
            '2021-01-17': {marked: true, selected: true},
            '2012-05-18': {marked: true},
            '2012-05-19': {disabled: true},
          }}
          onDayPress={(day) => {
            this.setState({selectedDate: day, selectedTab: 2});
          }}
        />
      </SafeAreaView>
    );
  };

  _renderAddPatient = () => {
    return (
      <SafeAreaView style={styles.safeViewPatient}>
        <KeyboardAvoidingView
          style={styles.AddPatientInnerWrapper}
          enabled
          keyboardVerticalOffset={120}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.AddPatientInnerWrapper1}>
            <Text style={styles.PortionHeaderText}>Add Patient</Text>
            <View style={styles.TextInputWrapper}>
              <TextInput
                placeholder={'First Name'}
                style={styles.TextInputInner}
              />
            </View>
            <View style={styles.TextInputWrapper}>
              <TextInput
                placeholder={'Last Name'}
                style={styles.TextInputInner}
              />
            </View>
            <View style={styles.TextInputWrapper}>
              <PhoneInput
                ref={(ref) => {
                  this.phone = ref;
                }}
                initialCountry={'ug'}
                textProps={{
                  placeholder: 'Phone Number',
                  placeholderTextColor: BLACK.placeholder,
                }}
                autoFormat={true}
                flagStyle={{height: 30, width: 40}}
                style={{
                  height: 57,
                  width: '95%',
                  alignSelf: 'center',
                }}
                textStyle={{color: BLACK.dark, fontSize: 18}}
              />
            </View>
            <View style={styles.TextInputWrapper}>
              <TextInput placeholder={'Email'} style={styles.TextInputInner} />
            </View>
            <View style={styles.TextInputWrapper}>
              <Text
                style={[
                  styles.Popin13Regular,
                  {paddingLeft: 10, fontSize: 18},
                ]}>
                {this.state.selectedDate.dateString}
              </Text>
            </View>

            <TouchableHighlight
              style={[styles.RightBottomBtn, {marginRight: 0}]}
              underlayColor={PURPLE.app}
              onPress={() => this.setState({selectedTab: 1})}>
              <Text style={[styles.ContinueBtnText]}>Save</Text>
            </TouchableHighlight>
          </View>

          <TouchableHighlight
            style={styles.AbsoluteRightBtn}
            underlayColor={WHITE.dark}
            onPress={() => this.setState({selectedTab: 1})}>
            <Entypo name="cross" color={BLACK.dark} size={25} />
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

  _renderInstruction = () => {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.WrapperView}>
          <Text style={styles.Popin18Regular}>Welcome to Call4Cares</Text>
          <Text style={styles.Popin10Regular}>
            Your free 7-days trial has begun{'\n'}Please select your interest to
            start personalized tour
          </Text>
          <View style={styles.InnerInstructionWrapper}>
            <Image
              style={styles.InstructionImage}
              source={require('../../assets/improve.png')}
            />
            <View style={styles.InstructionRightView}>
              <Text style={styles.Popin13Regular}>
                Improving appointment management
              </Text>
              <Text style={styles.Popin9Light}>
                Manage patient queues, and send automated appointment reminders,
                collect candid feedback and more.
              </Text>
            </View>
          </View>

          <View style={styles.InnerInstructionWrapper}>
            <Image
              style={styles.InstructionImage}
              source={require('../../assets/emr.png')}
            />
            <View style={styles.InstructionRightView}>
              <Text style={styles.Popin13Regular}>
                Simplifying EMR management
              </Text>
              <Text style={styles.Popin9Light}>
                Handhold patients during and after the treatment through
                automated and customizable instructions, online follow-up
                consultation & more.
              </Text>
            </View>
          </View>

          <View style={styles.InnerInstructionWrapper}>
            <Image
              style={styles.InstructionImage}
              source={require('../../assets/enhance.png')}
            />
            <View style={styles.InstructionRightView}>
              <Text style={styles.Popin13Regular}>
                Enhance patient experience
              </Text>
              <Text style={styles.Popin9Light}>
                Handle patients during and after the treatment through automated
                and customizable instructions, online follow-up and
                consultations.
              </Text>
            </View>
          </View>

          <View style={styles.InnerInstructionWrapper}>
            <Image
              style={styles.InstructionImage}
              source={require('../../assets/digitizing.png')}
            />
            <View style={styles.InstructionRightView}>
              <Text style={styles.Popin13Regular}>
                Digitizing patient billings
              </Text>
              <Text style={styles.Popin9Light}>
                Make payments 100% cashless and track clinic's finances, pending
                invoices and more in real time.
              </Text>
            </View>
          </View>
          <TouchableHighlight
            style={styles.RightBottomBtn}
            underlayColor={PURPLE.app}
            onPress={() => this.setState({selectedTab: 1})}>
            <Text style={styles.ContinueBtnText}>Continue</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
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
        {this.state.selectedTab === 0
          ? this._renderInstruction()
          : this.state.selectedTab === 1
          ? this._renderCalendar()
          : this._renderAddPatient()}
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
  safeViewPatient: {
    flex: 1,
    backgroundColor: BLACK.transParent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddPatientInnerWrapper: {
    width: '90%',
    paddingTop: 15,
  },
  AddPatientInnerWrapper1: {
    width: '100%',
    padding: 10,
    backgroundColor: WHITE.dark,
    borderRadius: 10,
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
  PortionHeaderText: {
    fontSize: 20,
    fontFamily: FONT.Poppins.black,
    alignSelf: 'center',
    marginVertical: 10,
  },
  TextInputWrapper: {
    height: 57,
    width: '95%',
    borderColor: BLUE.textInput,
    borderWidth: 0.3,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 7,
    justifyContent: 'center',
  },
  TextInputInner: {
    height: 57,
    width: SCREEN.width - 40,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: FONT.Poppins.regular,
    color: PURPLE.app,
  },
  InnerInstructionWrapper: {
    width: '95%',
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: PURPLE.app,
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  InstructionImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  InstructionRightView: {
    flex: 1,
    paddingLeft: 10,
  },
  Popin13Regular: {
    fontSize: 13,
    fontFamily: FONT.Poppins.regular,
    color: PURPLE.default,
  },
  Popin9Light: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 9,
    marginTop: 10,
  },
  Popin18Regular: {
    fontSize: 18,
    fontFamily: FONT.Poppins.regular,
    color: PURPLE.light,
    alignSelf: 'center',
  },
  Popin10Regular: {
    fontSize: 10,
    fontFamily: FONT.Poppins.regular,
    color: BLACK.app,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 20,
  },
  InnerWrapper: {
    width: SCREEN.width - 50,
  },
  RightBottomBtn: {
    height: 40,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: PURPLE.app,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 5,
  },
  ContinueBtnText: {
    color: WHITE.dark,
    fontFamily: FONT.Poppins.regular,
    fontSize: 15,
  },
  AbsoluteRightBtn: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: WHITE.dark,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: BLACK.light,
    justifyContent: 'center',
    alignItems: 'center',
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
