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
  TouchableOpacity,
} from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import firebase from 'firebase';
import db from '../config';

export default class Edit_Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      docId: '',
      uniqueId: props.route.params,
    };
  }

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = () => {
    console.log('Inside getuser details');
    db.collection('users')
      .doc(this.state.uid)
      .collection('Members')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          var id = doc.id;

          var uniqueId = data.uid;
          console.log('data-uid', uniqueId);
          console.log('props', this.state.uniqueId.uniqueId);
          var memberId = this.state.uniqueId.uniqueId;
          if (uniqueId === memberId) {
            this.setState({
              userName: data.userName,
              firstName: data.firstName,
              lastName: data.lastName,
              dateOfBirth: data.dateOfBirth,
              gender: data.gender,
              age: data.age,
              allergies: data.allergies,
              bloodGroup: data.bloodGroup,
              height: data.height,
              medicalHistory: data.medicalHistory,
              medication: data.medication,
              phoneNumber: data.phoneNumber,
              vaccination: data.vaccination,
              weight: data.vaccination,
              other: data.other,
              docId: doc.id,
            });
          }
        });
      });
  };

  updateUserDetails = () => {
    db.collection('users')
      .doc(this.state.uid)
      .collection('Members')
      .doc(this.state.docId)
      .update({
        uid: this.state.uid,
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
      });
    alert('Member updated successfully');
  };

  render() {
    console.log('docid', this.state.docId);
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
              text: 'Edit Member',
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
                  this.setState({
                    firstName: text,
                  });
                }}
                value={this.state.firstName}
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
                value={this.state.lastName}
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
                value={this.state.userName}
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
                value={this.state.dateOfBirth}
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
                value={this.state.gender}
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
                value={this.state.age}
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
                value={this.state.allergies}
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
                value={this.state.bloodGroup}
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
                value={this.state.height}
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
                value={this.state.weight}
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
                value={this.state.medicalHistory}
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
                value={this.state.medication}
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
                value={this.state.phoneNumber}
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
                value={this.state.vaccination}
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
                value={this.state.other}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.updateUserDetails();
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#ffab91',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 15,
    marginLeft: 95,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
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
