/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput,
} from 'react-native';

export default class saveData extends Component {


  state ={
    key: ''
  }


  componentWillMount(){
    AsyncStorage.getItem('myKey').then((value)=>{
      console.warn(value)
      this.setState({'myKey': value})
    })
  }


  componentDidMount(){
      AsyncStorage.getItem('myKey').then((value)=>{
      this.setState({'myKey': value})
    })
  }


  saveData = (value) =>{

    AsyncStorage.setItem('myKey', value)
    this.setState({'myKey': value})
  }

  render() {
    return (
      <View style={styles.container}>


        <Text>
          {this.state.key}
        </Text>


        <TextInput
          style={styles.formInput}
          onChangeText={(text)=> this.saveData(text)}
          placeholder="Opina sobre el artista"
          />





      </View>
    );
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    justifyContent: 'center',

    backgroundColor: '#F5FCFF',
  },
  formInput:{

    height:50,
    fontSize:13,
    borderWidth:1,
    borderColor:'#555555'
  },
  instructions:{
    textAlign:'center',
    color:'#333333',
    marginBottom:5,
    marginTop:5,
  },
  saved:{
    fontSize:20,
    textAlign:'center',
    margin:10
  }

});

AppRegistry.registerComponent('saveData', () => saveData);
