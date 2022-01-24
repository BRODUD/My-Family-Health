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

export default class Edit_Doctor extends Component {
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
      chemist:'',
      uid: firebase.auth().currentUser.uid,
      docId: '',
      uniqueId: props.route.params,
    };
  }

 

   getUserDetails =async() => {
    console.log('Inside getuser details (Edit doctor)');
   await  db.collection('users')
      .doc(this.state.uid)
      .collection('Doctors')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          var id = doc.id;
          console.log('data', data.dentist);
         
            this.setState({
              dentist: data.dentist,
              ent: data.ent,
              gynecologist: data.gynecologist,
              homeopathic: data.homeopathic,
              pediatrician: data.pediatrician,
              physician: data.physician,
              chemist: data.chemist,
              docId: doc.id,
            });
        });
      });
  };
 componentDidMount() {
    this.getUserDetails();
    console.log("Inside componentDidMount")
  }

  updateUserDetails = () => {
    db.collection('users')
      .doc(this.state.uid)
      .collection('Doctors')
      .doc(this.state.docId)
      .update({
        uid: this.state.uid,
        dentist: this.state.dentist,
        ent: this.state.ent,
        gynecologist: this.state.gynecologist,
        homeopathic: this.state.homeopathic,
        pediatrician: this.state.pediatrician,
        physician: this.state.physician,
        chemist: this.state.chemist
      });
    alert('Member updated successfully');
  };

  render() {
   
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
                  this.props.navigation.navigate('Doctor');
                }}
              />
            }
            centerComponent={{
              text: 'Edit Doctor',
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
                value={this.state.dentist}
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
                    ent: text,
                  });
                }}
                value={this.state.ent}
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
                    gynecologist: text,
                  });
                }}
                value={this.state.gynecologist}
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
                    homeopathic: text,
                  });
                }}
                value={this.state.homeopathic}
              />
              <TextInput
                placeholder="Pediatrician"
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
                    pediatrician: text,
                  });
                }}
                value={this.state.pediatrician}
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
                    physician: text,
                  });
                }}
                value={this.state.physician}
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
