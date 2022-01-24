import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import db from '../config';
import { Card, Header, Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Switch } from 'react-native-elements';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import firebase from 'firebase'

let customFonts = {
  'SFPro': require('../assets/SFProDisplay.ttf'),
  'SFPro-Semi-Bold':require('../assets/SFProDisplay-semi-bold.ttf'), 
  'SFPro-Bold' : require('../assets/SFProDisplay-Bold.ttf'),
};
export default class Doctor extends React.Component {
  constructor() {
    super();
    this.state = {
     dentist:'',
     ent:'',
     gynecologist:'',
     homeopathic:'',
     pediatrician:'',
     fontsLoaded:false,
     physician:'',
     uid: firebase.auth().currentUser.uid,
     docId:''
    };
  }
  componentDidMount() {
    this.getUserDetails();
     this.loadFontAsync();
  }
  loadFontAsync = async () => {
    await Font.loadAsync(customFonts);
    this.setState({
      fontsLoaded: true,
    });
  };

  getUserDetails = () => {
    console.log("Inside getuser details in doctor")
    db.collection('users').doc(this.state.uid).collection("Doctors")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          var id= doc.id
          console.log("id",id)
          console.log("data",data)
           this.setState({
            dentist: data.dentist,
            ent: data.ent,
            gynecologist: data.gynecologist,
            homeopathic: data.homeopathic,
            pediatrician: data.pediatrician,
            physician: data.physician,
            docId:doc.id
          });
        });
      });
  };


  render() {
     if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
      <View>
        <ScrollView>
          <View style={{ flex: 0.1 }}>
            <Header
              centerComponent={{
                text: 'Doctor Details',
                style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
              }}
              rightComponent={
                <Icon
                  name="pencil-outline"
                  type="material-community"
                  color="#696969"
                  onPress={() => {
                    this.props.navigation.navigate('EditDoctor');
                  }}
                />
              }
              backgroundColor="#eaf8fe"
            />
          </View>
          <View style={{ flex: 0.3 }}>
            <Card title={'Doctor Information'} titleStyle={{ fontSize: 20 }}>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Dentist: {this.state.dentist}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  ENT: {this.state.ent}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Gynecologist: {this.state.gynecologist}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Homeopathic: {this.state.homeopathic}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Pediatrician: {this.state.pediatrician}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Physician: {this.state.physician}
                </Text>
              </Card>
            
             
             
             
             
             
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }}
}


const styles = StyleSheet.create({
  Titlecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 50,
  },
  Pagetitle: {
    margin: 24,
    marginTop: -20,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'SFPro-Bold',
  },
  nameContainer: {
    marginLeft: 25,
  },
  description: {
    fontSize: 18,
    marginLeft: 90,
    marginTop: -22.5,
     fontFamily: 'SFPro',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 21,
     fontFamily: 'SFPro-Semi-Bold',
  },
  container: {
    marginLeft: 25,
    marginTop: 15,
  },
});
