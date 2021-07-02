/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';

import {BLACK, BLUE, PURPLE, WHITE} from '../../helper/Color';
import {FONT, isIphoneXorAbove, SCREEN} from '../../helper/Constant';

const Header = ({
  backColor,
  leftPortion,
  menuPress,
  searchPress,
  notificationPress,
  userPress,
  showSearch,
  hideSearch,
  SearchText,
  updateSearchText,
  showBack,
}) => (
  <View
    style={[
      styles.container,
      {
        marginTop: isIphoneXorAbove ? 15 : 0,
        backgroundColor: backColor ? BLUE.app : WHITE.dark,
      },
    ]}>
    {leftPortion && (
      <View style={styles.leftWrapper}>
        {showSearch || showBack ? (
          <TouchableHighlight onPress={hideSearch} underlayColor={WHITE.cream}>
            <Icon name="md-arrow-back-outline" size={30} color={BLACK.dark} />
          </TouchableHighlight>
        ) : (
          <TouchableHighlight onPress={menuPress} underlayColor={WHITE.cream}>
            <Icon1 name="menu" size={30} color={BLACK.dark} />
          </TouchableHighlight>
        )}
      </View>
    )}
    {showSearch ? (
      <TextInput
        style={styles.SearchText}
        onChangeText={(text) => updateSearchText(text)}
        value={SearchText}
      />
    ) : (
      <View style={styles.rightView}>
        <TouchableHighlight
          style={styles.iconSize}
          onPress={searchPress}
          underlayColor={WHITE.cream}>
          <Icon name="search-outline" size={30} color={BLACK.dark} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.iconSize}
          onPress={notificationPress}
          underlayColor={WHITE.cream}>
          <View style={styles.iconSize}>
            <Icon
              name="ios-notifications-outline"
              size={30}
              color={BLACK.dark}
            />
            <View style={styles.absoluteNotification}>
              <Text style={styles.notificationText}>5</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.iconSize}
          onPress={userPress}
          underlayColor={WHITE.cream}>
          <Image
            style={styles.userIcon}
            source={{
              uri:
                'https://i.pinimg.com/736x/62/2f/9d/622f9d0cfaf3bdd69fba4046103363e2.jpg',
            }}
          />
        </TouchableHighlight>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN.width - 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,
    elevation: 8,
    alignSelf: 'center',
    borderWidth: 0.3,
    borderColor: WHITE.borderLight,
  },
  leftWrapper: {
    height: 70,
    minWidth: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSize: {
    height: 60,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rightView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 15,
  },
  absoluteNotification: {
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    top: 10,
    backgroundColor: PURPLE.app,
  },
  notificationText: {
    color: WHITE.dark,
    fontSize: 10,
  },
  userIcon: {
    height: 30,
    width: 30,
    borderRadius: 20,
  },
  SearchText: {
    height: 40,
    width: SCREEN.width - 105,
    paddingHorizontal: 5,
    fontSize: 20,
    fontFamily: FONT.Poppins.regular,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: WHITE.borderLight,
    justifyContent: 'center',
  },
});

export default Header;
