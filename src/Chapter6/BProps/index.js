import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Card from './card';
export default class ComponentClass extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <Card text="Bekir" backgroundColor="green" />
        <Card text=":)" />
        <Card text="açi" backgroundColor="pink" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFEB3B',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
  },
});
