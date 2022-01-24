import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
  Alert,
} from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import firebase from 'firebase';
import db from '../config';

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      userName: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      age: '',
      allergies: '',
      bloodGroup: '',
      height: '',
      medicalHistory: '',
      medication: '',
      phoneNumber: '',
      vaccination: '',
      weight: '',
      other: '',
      uid: firebase.auth().currentUser.uid,
    };
  }

  updateDetails = () => {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.dateOfBirth);
    console.log(this.state.gender);
    console.log(this.state.age);
    console.log(this.state.height);
    console.log(this.state.weight);
    console.log(this.state.bloodGroup);
    console.log(this.state.medicalHistory);
    console.log(this.state.medication);
    console.log(this.state.vaccination);
    console.log(this.state.phoneNumber);

    var uid = this.randomString();

    db.collection('users').doc(this.state.uid).collection('Members').add({
      uid: uid,
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      age: this.state.age,
      height: this.state.height,
      weight: this.state.weight,
      bloodGroup: this.state.bloodGroup,
      allergies: this.state.allergies,
      medicalHistory: this.state.medicalHistory,
      medication: this.state.medication,
      vaccination: this.state.vaccination,
      phoneNumber: this.state.phoneNumber,
      other: this.state.other,
      dateAdded: firebase.firestore.Timestamp.now().toDate(),
    });
  };

  randomString() {
    var result = '';
    var chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 32; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  render() {
    console.log(this.state.firstName);
    //console.log(firebase.auth().currentUser)
    return (
      <View style={styles.containerLight}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={{ flex: 0.16 }}>
          <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#696969"
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              />
            }
            centerComponent={{
              text: 'Add Member',
              style: {
                color: '#90A5A9',
                fontSize: 20,
                fontWeight: 'bold',
                width: '100%',
                marginLeft: 70,
              },
            }}
            backgroundColor="#eaf8fe"
          />
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <View style={{ height: RFValue(this.state.dropdownHeight) }}></View>
            <View style={{ marginHorizontal: RFValue(10) }}>
              <TextInput
                placeholder="First Name"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 25,
                }}
                onChangeText={(text) => {
                  console.log('text:', text);
                  this.setState({
                    firstName: text,
                  });
                  console.log('this.state', this.state.firstName);
                }}
              />
              <TextInput
                placeholder="Last Name"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                  });
                }}
              />
              <TextInput
                placeholder="Username"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    userName: text,
                  });
                }}
              />
              <TextInput
                placeholder="Date of Birth"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    dateOfBirth: text,
                  });
                }}
              />
              <TextInput
                placeholder="Gender"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    gender: text,
                  });
                }}
              />
              <TextInput
                placeholder="Age"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    age: text,
                  });
                }}
                keyboardType="numberic"
              />
              <TextInput
                placeholder="Allergies"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    allergies: text,
                  });
                }}
              />
              <TextInput
                placeholder="Blood Group"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    bloodGroup: text,
                  });
                }}
              />
              <TextInput
                placeholder="Height"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    height: text,
                  });
                }}
              />
              <TextInput
                placeholder="Weight"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    weight: text,
                  });
                }}
              />
              <TextInput
                placeholder="Medical History"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    medicalHistory: text,
                  });
                }}
              />
              <TextInput
                placeholder="Medication"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    medication: text,
                  });
                }}
              />
              <TextInput
                placeholder="Phone Number"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    phoneNumber: text,
                  });
                }}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Vaccinations"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    vaccination: text,
                  });
                }}
              />
              <TextInput
                placeholder="Other"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 5,
                  width: '75%',
                  height: 30,
                  marginLeft: 50,
                  paddingLeft: 5,
                  marginTop: 15,
                }}
                onChangeText={(text) => {
                  this.setState({
                    other: text,
                  });
                }}
              />
            </View>
            <View style={styles.submitButton}>
              <Button
                onPress={() => {
                  this.updateDetails();
                }}
                title="Submit"
                color="#841584"
              />
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  appTitleTextLight: {
    color: 'black',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
    marginLeft: -30,
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: 'black',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'black',
  },
  dropdownLabel: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
  },
  dropdownLabelLight: {
    color: 'black',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
