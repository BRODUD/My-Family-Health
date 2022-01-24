import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import { FlatList } from 'react-native';


export default class Home extends React.Component {


  constructor() {
    super();
    this.state = {
      membersList: [],
      uid: firebase.auth().currentUser.uid,
    };
    this.requestRef = null;
  }

  getMembersList = () => {
    this.requestRef = db
      .collection('users').doc(this.state.uid).collection('Members')
      .onSnapshot((snapshot) => {
        var membersList = snapshot.docs.map((document) => document.data());
        this.setState({
          membersList: membersList,
        });
      });
  };

  componentDidMount() {
    console.log("UID : " + this.state.uid)
     
    this.getMembersList();
  }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    console.log("item",item)
    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
            {item.firstName}
          </ListItem.Title>
          <ListItem.Subtitle>{item.age}</ListItem.Subtitle>
        </ListItem.Content>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('MemberDetails',{"details":item});
          }}>
          <Text style={{ color: '#ffff' }}>View</Text>
        </TouchableOpacity>
      </ListItem>
    );
  };

  render() {
  //  console.log(firebase.auth().currentUser)
     console.log(this.state.uid)
    return (
      <View style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>
          {this.state.membersList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List of All Members</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.membersList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 50,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5722',
  },
});
