import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './Signup';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Signup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
