import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class card extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>CARD!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#000',
  },
  cardText: {
    fontSize: 18,
  },
});
