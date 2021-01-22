/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {SCREEN} from '../../helper/Constant';
import {BLACK, WHITE} from '../../helper/Color';

const UserPopup = ({loadingText, onCancelPress}) => (
  <View
    style={{
      position: 'absolute',
      height: SCREEN.height,
      width: SCREEN.width,
      justifyContent: 'center',
      backgroundColor: BLACK.transParent,
      alignItems: 'center',
    }}>
    <Text
      onPress={onCancelPress}
      style={{
        fontWeight: 'bold',
        color: WHITE.dark,
        fontSize: 22,
        marginBottom: 10,
      }}>
      {loadingText}
    </Text>
    <ActivityIndicator size="large" color={WHITE.dark} />
  </View>
);
export default UserPopup;
