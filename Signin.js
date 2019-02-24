import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Signup from './Signup';

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: null,
      password: ''
    }
  } 

  onChanged (text) {
    this.setState({
        phone: text.replace(/[^0-9]/g, ''),
    });
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = (name, phone, password) => {
    console.log(`phone: ${phone} password: ${password}`);
  }

  render() {

    return (
      
      <View style = {styles.container}>

        <Text style = {styles.intro}>Let's get started</Text>

        <TextInput style={styles.input}
          underlineColorAndroid = "transparent"
          placeholder = " Phone Number (510 555 5555)"
          placeholderTextColor = "black"
          keyboardType='numeric'
          onChangeText={(text)=> this.onChanged(text)}
          value={this.state.phone}
          maxLength={10}/>
        
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = " Password"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          secureTextEntry = {true}
          onChangeText = {this.handlePassword}/>
        
        <TouchableOpacity style = {styles.submitButton}
          onPress = {
            () => this.login(this.state.name, this.state.phone, this.state.password)
          }>
          <Text style = {styles.submitButtonText}> Sign In </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => <Signup />}>
          <Text style = {styles.signin}> Sign Up </Text>
        </TouchableOpacity>

        <Text style = {styles.signin}> Forgot Password </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  intro: {
    padding: 30,
    fontSize: 30,
    color: '#00c1e0',
  },
  input: {
    margin: 5,
    height: 40,
    borderColor: '#D6D6D6',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  submitButton: {
    backgroundColor: '#00c1e0',
    padding: 10,
    margin: 5,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signin: {
    color: '#00c1e0',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  }
})
