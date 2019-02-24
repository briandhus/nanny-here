import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Signin from './Signin';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: null,
      password: ''
    }
  } 

  handleName = (text) => {
    this.setState({ name: text })
  }

  onChanged (text) {
    this.setState({
        phone: text.replace(/[^0-9]/g, ''),
    });
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  sendSignin = (name, phone, password) => {
    console.log({ name: name, phone: phone, password: password });
  }

  render() {
    const { name } = this.state;
    const { phone } = this.state;
    const { password } = this.state;

    return (
      
      <View style = {styles.container}>

        <Text style = {styles.intro}>Let's get started</Text>

        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = " Name"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          onChangeText = {this.handleName}/>

        <TextInput style={styles.input}
          underlineColorAndroid = "transparent"
          placeholder = " Phone Number (510 555 5555)"
          placeholderTextColor = "black"
          keyboardType='numeric'
          onChangeText={(text)=> this.onChanged(text)}
          value={phone}
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
            () => this.sendSignin(name, phone, password)
          }>
          <Text style = {styles.submitButtonText}> Sign Up </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style = {styles.signin}> Sign In </Text>
        </TouchableOpacity>

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

// onPress = {() => <Signin />}

// signup = (name, phone, password) => {
  //   axios.post('/', {
  //     username: name,
  //     phone: phone,
  //     password: password
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
