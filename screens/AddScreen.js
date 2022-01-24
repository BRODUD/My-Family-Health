import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
const Separator = () => <View style={styles.separator} />;

export default class AddScreen extends React.Component {
 render(){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Add a screen Here!
      </Text>
     <Button title='Add new Screen' onPress={()=>{
       this.props.navigation.navigate('Details')
     }}/>
     <Separator />
      <Button title={'Add Doctors'} onPress={()=>{
          this.props.navigation.navigate('Doctors')
        }} />
        <Separator />
        <Button title={'Add Medicines'} onPress={()=>{
          this.props.navigation.navigate('Medicine')
        }} />
        <Separator />
        <Button title={'Add Emergency Contacts'} onPress={()=>{
          this.props.navigation.navigate('Contacts')
        }} />
        <Separator />
        <Button title={'Add MISC'} onPress={()=>{
         this.props.navigation.navigate('Misc')
        }} />
    </View>
  )
}}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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
   separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
