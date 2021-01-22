import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {PURPLE, BLACK} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const ContactsList = ({data}) => (
  <View style={styles.container}>
    {data.length > 0 ? (
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => (
          <View style={styles.ItemWrapper}>
            <View style={styles.InnerWrapper}>
              <View style={styles.LeftIconView}>
                <FontAwesome5 name="user-circle" size={30} color={BLACK.dark} />
              </View>
              <View style={styles.Flex1VerticalView}>
                <Text style={styles.Popin15Regular}>{item.item.givenName}</Text>
                <Text style={styles.Popin13Regular}>
                  {item.item.phoneNumbers[0].number}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    ) : (
      <Text style={styles.NoContactText}>No contact to show</Text>
    )}
  </View>
);
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 150,
  },
  Popin15Regular: {
    fontFamily: FONT.Poppins.regular,
    color: BLACK.app,
    fontSize: 15,
  },
  NoContactText: {
    fontFamily: FONT.Poppins.regular,
    color: BLACK.app,
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 20,
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
  Popin13Regular: {
    fontSize: 13,
    fontFamily: FONT.Poppins.regular,
    color: BLACK.app,
    marginTop: 7,
  },
  InnerWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftIconView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  Flex1VerticalView: {
    flex: 1,
    paddingLeft: 20,
  },
});

export default ContactsList;
