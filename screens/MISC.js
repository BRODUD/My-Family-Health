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

import firebase from 'firebase';

let customFonts = {
  SFPro: require('../assets/SFProDisplay.ttf'),
  'SFPro-Semi-Bold': require('../assets/SFProDisplay-semi-bold.ttf'),
  'SFPro-Bold': require('../assets/SFProDisplay-Bold.ttf'),
};
export default class MISC extends React.Component {
  constructor() {
    super();
    this.state = {
      misc:'',
      fontsLoaded: false,
      uid: firebase.auth().currentUser.uid,
      docId: '',
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
    console.log('Inside getuser details in misc');
    db.collection('users')
      .doc(this.state.uid)
      .collection('Misc')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          var id = doc.id;
          console.log('id', id);
          console.log('data', data);
          this.setState({
            misc: data.misc,
            docId: doc.id,
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
                  text: 'MISC',
                  style: {
                    color: '#90A5A9',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 50,
                  },
                }}
                rightComponent={
                  <Icon
                    name="pencil-outline"
                    type="material-community"
                    color="#696969"
                    onPress={() => {
                      this.props.navigation.navigate('EditMisc');
                    }}
                  />
                }
                backgroundColor="#eaf8fe"
              />
            </View>
            <View style={{ flex: 0.3 }}>
              <Card title={'Miscellaneous'} titleStyle={{ fontSize: 20 }}>
                <Card>
                  <Text style={{ fontWeight: 'bold' }}>
                  {this.state.misc}
                  </Text>
                </Card>
              </Card>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
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
