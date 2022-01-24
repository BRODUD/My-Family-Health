import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Card, Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class MemberDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: props.route.params,
      docId: '',
    };
  }

  getDocId = () => {};

  render() {
    console.log(this.state.members.details);
    return (
      <View style={styles.container}>
        <ScrollView>
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
                text: 'Member Details',
                style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
              }}
              rightComponent={
                <Icon
                  name="pencil-outline"
                  type="material-community"
                  color="#696969"
                  onPress={() => {
                    this.props.navigation.navigate('EditMember', {
                      uniqueId: this.state.members.details.uid,
                    });
                  }}
                />
              }
              backgroundColor="#eaf8fe"
            />
          </View>
          <View style={{ flex: 0.3 }}>
            <Card title={'Member Information'} titleStyle={{ fontSize: 20 }}>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  First Name: {this.state.members.details.firstName}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Last Name: {this.state.members.details.lastName}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Date Of Birth: {this.state.members.details.dateOfBirth}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Age: {this.state.members.details.age}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Height: {this.state.members.details.height}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Weight: {this.state.members.details.weight}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Blood Group: {this.state.members.details.bloodGroup}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Allergies: {this.state.members.details.allergies}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Medical History: {this.state.members.details.medicalHistory}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Medication: {this.state.members.details.medication}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Vaccination: {this.state.members.details.vaccination}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Phone Number: {this.state.members.details.phoneNumber}
                </Text>
              </Card>
              <Card>
                <Text style={{ fontWeight: 'bold' }}>
                  Other: {this.state.members.details.other}
                </Text>
              </Card>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 16,
  },
});
