/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {PURPLE, WHITE, BLACK} from '../../helper/Color';
import {BLACKKIDPIC, FONT, SCREEN} from '../../helper/Constant';

const AppointmentList = ({data, currentState}) => (
  <View style={styles.container}>
    <Text style={styles.Popin15Light}>{currentState}</Text>
    <View style={styles.Separator} />
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={(item, index) => (
        <View style={styles.ItemWrapper}>
          <View style={styles.rowView}>
            <Image source={{uri: BLACKKIDPIC}} style={styles.PatientPic} />
            <Text style={styles.Popin13SemiBold}>{item.item.name}</Text>
          </View>
          <View style={styles.rowView}>
            <Entypo name="dot-single" size={10} color={BLACK.dark} />
            <Text style={styles.Popin13Light}>{item.item.gender}</Text>
          </View>
          <View style={styles.rowView}>
            <Entypo name="dot-single" size={10} color={BLACK.dark} />
            <Text style={styles.Popin13Light}>{item.item.age} Years</Text>
          </View>
          <View style={styles.rowView}>
            <Entypo name="dot-single" size={10} color={BLACK.dark} />
            <Text style={styles.Popin13Light}>{item.item.bloodGroup}</Text>
          </View>
          <View style={[styles.rowView, {marginTop: 28}]}>
            <FontAwesome5
              name={'phone-square-alt'}
              color={PURPLE.default}
              size={20}
            />
            <Text style={styles.Popin13Light}>{item.item.contactNo}</Text>
          </View>
          <View style={[styles.rowView]}>
            <FontAwesome5 name={'mail-bulk'} color={PURPLE.default} size={20} />
            <Text style={styles.Popin13Light}>{item.item.email}</Text>
          </View>
          <View style={styles.rowView}>
            <View style={styles.Flex1View}>
              <TouchableHighlight style={styles.ButtonBtnWrapper}>
                <Text style={styles.BtnText}>View Detail</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.Flex1View}>
              <TouchableHighlight style={styles.ButtonBtnWrapper}>
                <Text style={styles.BtnText}>Record</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      )}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 150,
  },
  Popin15Light: {
    fontFamily: FONT.Poppins.regular,
    color: BLACK.app,
    marginTop: 10,
  },
  Separator: {
    height: 1,
    width: SCREEN.width - 60,
    alignSelf: 'center',
    backgroundColor: BLACK.divider,
    marginVertical: 10,
  },
  ItemWrapper: {
    width: SCREEN.width - 70,
    borderWidth: 1,
    borderColor: PURPLE.app,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  PatientPic: {
    height: 46,
    width: 46,
    borderRadius: 23,
    marginRight: 15,
  },
  Popin13SemiBold: {
    fontFamily: FONT.Poppins.semi_bold,
    fontSize: 13,
  },
  Popin13Light: {
    fontSize: 15,
    fontFamily: FONT.Poppins.regular,
    color: BLACK.app,
    marginLeft: 7,
  },
  Flex1View: {
    flex: 1,
    height: 40,
  },
  ButtonBtnWrapper: {
    height: 40,
    width: '95%',
    backgroundColor: PURPLE.app,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnText: {
    fontSize: 13,
    fontFamily: FONT.Poppins.regular,
    color: WHITE.dark,
  },
});

export default AppointmentList;
