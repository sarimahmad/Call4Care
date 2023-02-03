import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import Header from '../../../component/Header'
import {FONT, isIphoneXorAbove, SCREEN} from '../../../helper/Constant';
import {WHITE} from '../../../helper/Color';
import Icon from 'react-native-vector-icons/AntDesign'
import RNPickerSelect from 'react-native-picker-select'
import Filter from 'react-native-vector-icons/Feather'
import InfoIcon from 'react-native-vector-icons/FontAwesome5'
import Arrow from 'react-native-vector-icons/MaterialIcons';
export default class PatientReport extends Component {
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
          BloodGroup:''
        };
      }
    render() {
        return (
            <View style={styles.wrapperView}>
            <Header
            leftPortion={true}
            menuPress={() => this.props.navigation.pop()}
            showSearch={this.state.showSearch}
            notificationPress={() => this.setState({notificationShow: true})}
            searchPress={() => this.setState({showSearch: true})}
            userPress={() => this.props.navigation.navigate('Profile')}
            hideSearch={() => this.setState({showSearch: false})}
            updateSearchText={(SearchText) => this.setState({SearchText})}
            SearchText={this.state.SearchText}
            />
            <SafeAreaView style={styles.wholeView}>
            <View style={styles.wholeView}>
            <View style={styles.PatientView}>
                <Text style={{fontSize:30}}>Patient</Text>
                <View style={{flexDirection:'row',alignSelf:'center', width:140, justifyContent:"space-between"}}>
                <View style={{borderWidth:1, borderColor:'lightgrey', padding:4}}>
                <Icon name={"printer"} 
                size={30}/>
                </View>
                <View style={{borderWidth:1, borderColor:'lightgrey', padding:4}}>
                <Icon name={"mail"} 
                size={30}/>
                </View>
                <View style={{borderWidth:1, borderColor:'lightgrey', padding:4}}>
                <Filter name={"filter"} 
                size={30}/>
                </View>
                </View>
                <View style={styles.FilterView}>
                    <Text style={{fontSize:20}}>Filters</Text>
                    <View style={styles.TextInputUperView}>
                    <Text style={{fontSize:15, marginTop:7}}>Patient</Text>
                    <InfoIcon name={"info-circle"}
                    size={15}
                    style={{marginRight:10}}/>
                    </View>
                    <TextInput 
                    style={[styles.TextInputstyle]}
                    placeholder={"Select Patient"}/>
                    <View style={[styles.TextInputUperView,{marginTop:10}]}>
                    <Text style={{fontSize:15, marginTop:7}}>Appointment Categories</Text>
                    <InfoIcon name={"info-circle"}
                    size={15}
                    style={{marginRight:10}}/>
                    </View>
                    <TextInput 
                    style={[styles.TextInputstyle]}
                    placeholder={"Select Group"}/>

                    <Text style={{marginTop:10}}>Blood Group</Text>

                <RNPickerSelect
              Icon={() => {
                return <Arrow
                    name="arrow-drop-down"
                    size={30}
                    color={'grey'}
                    style={{paddingTop:25}}

                />}}
                    style={{
                      inputIOS: {
                        borderColor: 'lightgrey',
                        borderWidth:1,
                        marginTop:20,
                        height:40,
                        borderRadius:5,
                        paddingLeft:10,
                        color:"red"
                      },
                      inputAndroid: {
                        borderColor: 'lightgrey',
                        borderWidth:1,
                        marginTop:30,
                      },
                    }}
                    placeholder={{
                      label: 'Blood Group', 
                      color:"black"             
                  }}
                    selectedValue={this.state.BloodGroup}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({BloodGroup: itemValue})
                    }
                    items={[
                      {label: 'A+', value: 'A+'},
                      {label: 'A-', value: 'A-'},
                      {label: 'B+', value: 'B+'},
                      {label: 'B-', value: 'B-'},
                      {label: 'AB+', value: 'AB+'},
                      {label: 'AB-', value: 'AB-'},
                      {label: 'O+', value: 'O+'},
                      {label: 'O-', value: 'O-'},
                    ]}
                  />
                    <TouchableOpacity style={styles.Submmit}>
                    <Text style={{fontSize:14, color:"white"}}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.TotalpatientBox}>
                    <View>
                        <Text style={{fontSize:20,color:"grey"}}>Total Patient</Text>
                        <Text style={{fontSize:20, fontWeight:'bold',alignSelf:"center"}}>5</Text>
                    </View>
                </View>
                <View style={styles.HeaderBoxView}>
                <View style={{marginLeft:5}}>
                    <Text style={styles.white}>SR.</Text>
                    <Text style={styles.white}>#</Text>
                </View>

                <Text style={styles.white}>DATE</Text>
                <Text style={styles.white}>PATIENT</Text>
                <View>
                <Text style={styles.white}>PATIENT </Text>
                <Text style={styles.white}>NUMBER</Text>
                </View>
                <View>
                <Text style={styles.white}>BLOOD</Text>
                <Text style={styles.white}>GROUP</Text>
                </View>
                </View>
                <View style={{alignItems:'center', marginTop:20}}>
                <Text>Copyright 2021 <Text style={{color:'purple'}}>Call4cares,</Text></Text>
                <Text>All rights reserved</Text>
                <Text>Developed and Designed by</Text>
                <Text style={{color:'purple'}}>20thFloor Technologies</Text>
                </View>
            </View>
            </View>
            </SafeAreaView>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    wrapperView:{
        flex:1,
        backgroundColor: WHITE.dark,
        paddingTop: isIphoneXorAbove ? 30 : 10,
    },
    wholeView:{
        flex:1,
        alignItems:'center'   
    }, 
    PatientView:{
        width:SCREEN.width - 60,
        marginTop:30,
        flex:1
    },
    FilterView:{
        width:SCREEN.width - 100,
        
        alignSelf:'center',
       
    },
    TextInputstyle:{
        marginTop:10,
        borderColor:'lightgrey',
        borderWidth:1,
        width:'100%',
        height:40,
        borderRadius:5,
        paddingLeft:10
    },
    TextInputUperView:{
        flexDirection:'row', 
        width:'100%', 
        justifyContent:'space-between'
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
        height:100,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        borderWidth:1,
        borderColor:'lightgrey',
        marginTop:40
    },
    HeaderBoxView:{
        marginTop:25,
        width:'100%',
        height:50,
        backgroundColor:"purple",
        shadowColor:"purple",
        shadowOffset:{width:-1, height:3},
        shadowRadius:5,
        shadowOpacity:0.6,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    white:{
        color:WHITE.dark
    }

})

