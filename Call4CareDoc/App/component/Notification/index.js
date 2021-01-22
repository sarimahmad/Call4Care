/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {FONT, SCREEN} from '../../helper/Constant';
import {BLACK, RED, WHITE} from '../../helper/Color';
import HeaderWithBack from '../HeaderWithBack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Notification = ({onCancelPress}) => (
  <TouchableOpacity
    style={{
      position: 'absolute',
      height: SCREEN.height,
      width: SCREEN.width,
      backgroundColor: BLACK.transParent,
      alignItems: 'center',
    }}
    activeOpacity={1}
    onPress={onCancelPress}>
    <SafeAreaView>
      <HeaderWithBack
        backColor={true}
        leftPortion={true}
        headerText={'Notification'}
        backPress={onCancelPress}
      />
      <View
        style={{
          backgroundColor: WHITE.dark,
          width: SCREEN.width - 30,
          borderRadius: 10,
          alignSelf: 'center',
        }}>
        <FlatList
          data={[
            {
              iconName: 'star',
              title: '5 star',
              description: 'You got 5 start from Adora',
              time: '5 min ago',
            },
            {
              iconName: 'trophy',
              title: 'Completed',
              description: 'New achievement completed',
              time: '20 min ago',
            },
            {
              iconName: 'gift',
              title: 'New Gift',
              description: 'You got 5 new gift',
              time: '1 hour ago',
            },
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => (
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: 60,
                borderBottomColor: BLACK.light,
                flexDirection: 'row',
                width: SCREEN.width - 30,
                borderRadius: 10,
                marginTop: 5,
                borderBottomWidth: 0.4,
                backgroundColor: WHITE.dark,
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <FontAwesome
                name={item.item.iconName}
                color={RED.deafult}
                size={40}
              />
              <View
                style={{flex: 1, paddingLeft: 60, justifyContent: 'center'}}>
                <Text style={{fontFamily: FONT.Poppins.regular, fontSize: 15}}>
                  {item.item.title}
                </Text>
                <Text
                  style={{
                    fontFamily: FONT.Poppins.light,
                    fontSize: 13,
                    marginTop: 10,
                  }}>
                  {item.item.description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  </TouchableOpacity>
);
export default Notification;
