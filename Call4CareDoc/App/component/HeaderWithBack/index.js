/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {BLACK, BLUE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const HeaderWithBack = ({backColor, leftPortion, headerText, backPress}) => (
  <TouchableOpacity
    activeOpacity={1}
    style={[
      styles.container,
      {
        backgroundColor: backColor ? BLUE.app : WHITE.dark,
      },
    ]}>
    {leftPortion && (
      <View style={styles.leftWrapper}>
        <TouchableHighlight
          onPress={backPress}
          underlayColor={backColor ? BLUE.textInput : WHITE.dark}>
          <Icon
            name="md-arrow-back-outline"
            size={30}
            color={backColor ? WHITE.dark : BLACK.dark}
          />
        </TouchableHighlight>
      </View>
    )}
    <View style={styles.rightView}>
      <Text
        style={[
          styles.headerText,
          {color: backColor ? WHITE.dark : BLACK.dark},
        ]}>
        {headerText}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN.width - 30,
    borderRadius: 5,
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
    justifyContent: 'center',
    paddingLeft: 15,
  },
  headerText: {
    fontSize: 18,
    fontFamily: FONT.Poppins.bold,
    color: WHITE.dark,
  },
});

export default HeaderWithBack;
