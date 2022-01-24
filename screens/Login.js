import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import Icon from 'react-native-vector-icons/Ionicons';
import {auth} from '../config'
//import { getAuth, reauthenticateWithCredential } from "firebase/auth";

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      emailID: '',
      password: '',
      confirmPassword: '',
      phoneNo: '',
      address: '',
      isModalVisible: 'false',
      secureTextEntry: 'true',
    };
  }

  userSignUp = (emailId, password, confirmPassword) => {
    
    if (password !== confirmPassword) {
      return alert("Password doesn't match");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then((response) => {
        console.log(response.user.uid)
          db.collection('users').doc(response.user.uid).collection('UserDetails').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            username: this.state.username,
            email_id: this.state.emailId,
            password: this.state.password,
            address: this.state.address,
            phoneNumber: this.state.phoneNo,
          });
          return alert('User Added Successfully', '', [
            {
              text: 'OK',
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
    }
  };

  secureTextEntry = () => {
    if (this.state.secureTextEntry === 'true') {
      return (
        <Icon
          name={'ios-eye-off'}
          size={15}
          style={{ marginTop: 30, marginLeft: 150 }}
        />
      );
    } else {
      <Icon
        name={'ios-eye'}
        size={15}
        style={{ marginTop: 30, marginLeft: 150 }}
      />;
    }
  };

  userLogin = (emailId, password) => {
    //console.log(emailId)
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then((response) => {
        //console.log("response",response)
        //  response.user.reload()
     
        console.log(" inside response")
        this.props.navigation.navigate('Home');
      
        
      })
      .catch(function (error) {
        //console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  showModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text style={styles.modalTitle}>Registration</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder="First Name"
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder="Last Name"
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder="Phone Number"
                maxLength={10}
                keyboardType="numeric"
                onChangeText={(text) => {
                  this.setState({
                    phoneNo: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder="Address"
                multiline={true}
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
              />
              <TextInput
                style={[styles.formTextInput, { marginTop: 20 }]}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text,
                  });
                }}
              />
              <View>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => {
                    this.userSignUp(
                      this.state.emailId,
                      this.state.password,
                      this.state.confirmPassword
                    );
                  }}>
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => {
                    this.setState({
                      isModalVisible: false,
                    });
                  }}>
                  <Text style={{ color: '#ff5722' }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };



  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {this.showModal()}
        </View>
        <View>
          <Text style={styles.title}>My Family Health</Text>
        </View>
        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
        onPress={() => {
        this.userLogin(this.state.emailId, this.state.password);
      // this.props.navigation.navigate('Home')
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({
                isModalVisible: true,
              });
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8BE85',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '300',
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 30,
    color: '#ff3d00',
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#ff8a65',
    fontSize: 20,
    margin: 10,
    paddingLeft: 20,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ff9800',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: '200',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: '#ff5722',
    margin: 50,
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
  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  registerButtonText: {
    color: '#ff5722',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});
