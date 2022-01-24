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

export default class AddDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dentist: '',
      ent: '',
      gynecologist: '',
      homeopathic: '',
      pediatrician: '',
      fontsLoaded: false,
      physician: '',
      chemists:'',
      uid: firebase.auth().currentUser.uid,
    };
  }

  updateDetails = () => {
    
    db.collection('users').doc(this.state.uid).collection('Doctors').add({
      uid: this.state.uid,
      dentist: this.state.dentist,
      ent: this.state.ent,
      gynecologist: this.state.gynecologist,
      homeopathic: this.state.homeopathic,
      pediatrician: this.state.pediatrician,
      physician: this.state.physician,
      chemists: this.state.chemists,
      dateAdded: firebase.firestore.Timestamp.now().toDate(),
    });
  };

  render() {
    
    return (
      <View style={styles.containerLight}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={{ flex: 0.1 }}>
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
              text: 'Add Doctors',
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
                placeholder="Dentist"
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
                    dentist: text,
                  });
                }}
              />
              <TextInput
                placeholder="ENT"
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
                    ent: text
                  })
                }}
              />
              <TextInput
                placeholder="Gynecologist"
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
                    gynecologist: text
                  })
                }}
              />
              <TextInput
                placeholder="Homeopathic"
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
                    homeopathic: text
                  })
                }}
              />
              <TextInput
                placeholder="Pediatrition"
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
                    pediatrician: text
                  })
                }}
              />
              <TextInput
                placeholder="Physician"
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
                    physician: text
                  })
                }}
              />
                <TextInput
                placeholder="Chemists"
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
                    chemists: text
                  })
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
