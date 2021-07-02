import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationEvents} from 'react-navigation';

import * as Actions from '../../redux/actions';
import Header from '../../component/Header';
import {FONT, isIphoneXorAbove, PATIENT, SCREEN} from '../../helper/Constant';
import {BLACK, WHITE} from '../../helper/Color';
import QAndAList from '../../component/QAndAList';

class QAndA extends Component {
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
          {this._renderChat()}
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

export default connect(mapStateToProps, mapDispatchToProps)(QAndA);
