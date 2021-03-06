import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Card from './card';
export default class ComponentClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#000',
  },
  cardText: {
    fontSize: 18,
  },
});
