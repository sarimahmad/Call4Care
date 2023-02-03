import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView ,TextInput, TouchableOpacity} from 'react-native'
import Header from '../../../component/Header';
import { WHITE } from '../../../helper/Color';
import { FONT, isIphoneXorAbove, SCREEN } from '../../../helper/Constant';
import Icon from 'react-native-vector-icons/AntDesign'
import RNPickerSelect from 'react-native-picker-select'
import Filter from 'react-native-vector-icons/Feather'
import InfoIcon from 'react-native-vector-icons/FontAwesome5'
import Arrow from 'react-native-vector-icons/MaterialIcons';
export default class IncomeReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      loading: false,
      fcmToken: '',
      showSearch: false,
      notificationShow: false,
      userShow: false,
      SearchText: '',
      InvoiceIncomed: ''
    };
  }
  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          leftPortion={true}
          menuPress={() => this.props.navigation.pop()}
          showSearch={this.state.showSearch}
          notificationPress={() => this.setState({ notificationShow: true })}
          searchPress={() => this.setState({ showSearch: true })}
          userPress={() => this.props.navigation.navigate('Profile')}
          hideSearch={() => this.setState({ showSearch: false })}
          updateSearchText={(SearchText) => this.setState({ SearchText })}
          SearchText={this.state.SearchText}
        />
        <SafeAreaView style={styles.wholeView}>
          <ScrollView bounces={false}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 30 }}>Amounte Due</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center', width: 140, justifyContent: "space-between" }}>
              <View style={{ borderWidth: 1, borderColor: 'lightgrey', padding: 4 }}>
                <Icon name={"printer"}
                  size={30} />
              </View>
              <View style={{ borderWidth: 1, borderColor: 'lightgrey', padding: 4 }}>
                <Icon name={"mail"}
                  size={30} />
              </View>
              <View style={{ borderWidth: 1, borderColor: 'lightgrey', padding: 4 }}>
                <Filter name={"filter"}
                  size={30} />
              </View>
            </View>
          </View>

          <RNPickerSelect
            Icon={() => {
              return <Arrow
                name="arrow-drop-down"
                size={30}
                color={'grey'}
                style={{ paddingTop: 25 }}

              />
            }}
            style={{
              inputIOS: {
                borderColor: 'lightgrey',
                borderWidth: 1,
                marginTop: 20,
                height: 40,
                borderRadius: 5,
                paddingLeft: 10,
                
              },
              inputAndroid: {
                borderColor: 'lightgrey',
                borderWidth: 1,
                marginTop: 30,
              },
            }}
            placeholder={{
                label:"Amount Due",
            }}
            selectedValue={this.state.InvoiceIncomed}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ InvoiceIncomed: itemValue })
            }
            items={[
              { label: 'IT', value: 'IT' },
            ]}
          />

          <RNPickerSelect
            Icon={() => {
              return <Arrow
                name="arrow-drop-down"
                size={30}
                color={'grey'}
                style={{ paddingTop: 25 }}

              />
            }}
            style={{
              inputIOS: {
                borderColor: 'lightgrey',
                borderWidth: 1,
                marginTop: 20,
                height: 40,
                borderRadius: 5,
                paddingLeft: 10,
               
              },
              inputAndroid: {
                borderColor: 'lightgrey',
                borderWidth: 1,
                marginTop: 30,
              },
            }}
            placeholder={{
                label:"None",
            }}
            selectedValue={this.state.InvoiceIncomed}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ InvoiceIncomed: itemValue })
            }
            items={[
              { label: 'IT', value: 'IT' },
              { label: 'BLADE RUNNER', value: 'BLADE RUNNER' },
              { label: 'Invoiced Income', value: 'Invoiced Income' },
              { label: 'Thor Ragnarok', value: 'Thor Ragnarok' },
            ]}
          />
          <Text style={{ fontSize: 25, marginTop: 20 }}>Advance Filter</Text>
          <Text style={{ marginTop: 20 }}>Patient Group</Text>
          <TextInput
            style={[styles.TextInputstyle]}
            placeholder={"Select Patient Group"} />
          <Text style={{ marginTop: 8 }}>Patient Name</Text>

          <TextInput
            style={[styles.TextInputstyle]}
            placeholder={"Enter Name "} />

          
          <TouchableOpacity style={styles.Submmit}>
            <Text style={{ fontSize: 14, color: "white" }}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.TotalpatientBox}>
                    <View>
                        <Text style={{fontSize:20,color:"grey"}}>Total Amount Due($)</Text>
                        <Text style={{fontSize:20, fontWeight:'bold',alignSelf:"center"}}>0.00</Text>
                    </View>
         </View>
                <View style={{alignItems:'center', marginTop:20}}>
                <Text>Copyright 2021 <Text style={{color:'purple'}}>Call4cares,</Text></Text>
                <Text>All rights reserved</Text>
                <Text>Developed and Designed by</Text>
                <Text style={{color:'purple'}}>20thFloor Technologies</Text>
                </View>


         </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: WHITE.dark,
    paddingTop: isIphoneXorAbove ? 30 : 10,
  },
  wholeView: {
    flex: 1,
    width: SCREEN.width - 60,
    alignSelf: 'center',
  },
  TextInputstyle: {
    marginTop: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderRadius: 5,
    paddingLeft: 10
  },
  Submmit:{
    height:50,
    width:120,
    backgroundColor:'purple',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop:30
},
TotalpatientBox:{

  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:5,
  borderWidth:1,
  borderColor:'lightgrey',
  marginTop:40,
  
},
TotalpatientBox:{
    height:100,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    borderWidth:1,
    borderColor:'lightgrey',
    marginTop:40
},
})