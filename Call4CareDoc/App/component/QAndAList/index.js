import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {PURPLE, BLACK, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

const QAndAList = ({data}) => (
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
                <FontAwesome5 name="user-circle" size={40} color={BLACK.dark} />
              </View>
              <View style={styles.Flex1VerticalView}>
                <Text style={styles.Popin15Regular}>{item.item.name}</Text>
                <Text style={styles.Popin13Regular}>
                  Hello doctor. How are you ? I am good w....
                </Text>
                <View style={styles.BtnWrapperRow}>
                  <TouchableHighlight
                    style={styles.BtnOptionWrapper}
                    underlayColor={WHITE.dark}>
                    <MaterialIcons
                      name="visibility"
                      size={25}
                      color={BLACK.dark}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.BtnOptionWrapper}
                    underlayColor={WHITE.dark}>
                    <FontAwesome5 name="edit" size={25} color={BLACK.dark} />
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.BtnOptionWrapper}
                    underlayColor={WHITE.dark}>
                    <FontAwesome5
                      name="download"
                      size={25}
                      color={BLACK.dark}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.BtnOptionWrapper}
                    underlayColor={WHITE.dark}>
                    <MaterialIcons
                      name="delete-forever"
                      size={25}
                      color={BLACK.dark}
                    />
                  </TouchableHighlight>
                </View>
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
    paddingBottom: 100,
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
  BtnWrapperRow: {
    width: '100%',
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  BtnOptionWrapper: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  LeftIconView: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  Flex1VerticalView: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default QAndAList;
