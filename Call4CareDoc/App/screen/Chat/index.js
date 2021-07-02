/* eslint-disable no-useless-escape */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  PermissionsAndroid,
  TouchableHighlight,
  Platform,
} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import Contacts from 'react-native-contacts';

import * as Actions from '../../redux/actions';
import Header from '../../component/Header';
import {FONT, isIphoneXorAbove, PATIENT, SCREEN} from '../../helper/Constant';
import {BLACK, PURPLE, WHITE} from '../../helper/Color';
import ChatList from '../../component/ChatList';
import ContactsList from '../../component/ContactsList';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      notificationShow: false,
      selectedTab: 0,
      contacts: '',
    };
    Contacts.iosEnableNotesUsage(false);
  }

  async componentDidMount() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        this.loadContacts();
      });
    } else {
      this.loadContacts();
    }
  }

  loadContacts() {
    Contacts.getAll()
      .then((contacts) => {
        this.setState({contacts, loading: false});
      })
      .catch((e) => {
        this.setState({loading: false});
      });

    Contacts.checkPermission();
  }

  search(text) {
    const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    const emailAddressRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (text === '' || text === null) {
      this.loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then((contacts) => {
        this.setState({contacts});
      });
    } else if (emailAddressRegex.test(text)) {
      Contacts.getContactsByEmailAddress(text).then((contacts) => {
        this.setState({contacts});
      });
    } else {
      Contacts.getContactsMatchingString(text).then((contacts) => {
        this.setState({contacts});
      });
    }
  }

  _renderChat = () => {
    return <ChatList data={PATIENT} />;
  };

  _renderContacts = () => {
    return <ContactsList data={this.state.contacts} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => {}} />
        <SafeAreaView style={styles.safeView}>
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
          <View style={styles.RowView}>
            <View
              style={[
                styles.Flex1Row,
                {
                  borderRightWidth: 0.3,
                  borderRightColor: BLACK.light,
                  borderBottomColor:
                    this.state.selectedTab === 0 ? PURPLE.app : BLACK.app,
                },
              ]}>
              <TouchableHighlight
                onPress={() => {
                  this.setState({selectedTab: 0});
                }}
                underlayColor={WHITE.dark}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      styles.OptionText,
                      {
                        color:
                          this.state.selectedTab === 0 ? PURPLE.app : BLACK.app,
                      },
                    ]}>
                    Chat
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View
              style={[
                styles.Flex1Row,
                {
                  borderRightWidth: 0.3,
                  borderRightColor: BLACK.light,
                  borderBottomColor:
                    this.state.selectedTab === 1 ? PURPLE.app : BLACK.app,
                },
              ]}>
              <TouchableHighlight
                onPress={() => this.setState({selectedTab: 1})}
                underlayColor={WHITE.dark}>
                <Text
                  style={[
                    styles.OptionText,
                    {
                      color:
                        this.state.selectedTab === 1 ? PURPLE.app : BLACK.app,
                    },
                  ]}>
                  Contacts
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          {this.state.selectedTab === 0
            ? this._renderChat()
            : this._renderContacts()}
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
    backgroundColor: 'red',
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

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
