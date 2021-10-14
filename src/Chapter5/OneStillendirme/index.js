import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Stillendirme extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello React Native</Text>
        <Text style={styles.instructions}>Helö</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fustifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
});
