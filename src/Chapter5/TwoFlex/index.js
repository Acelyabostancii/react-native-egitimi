import React, {Component} from 'react';
import {Platform, Text, StyleSheet, View} from 'react-native';

export default class Flex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.slideOne}>
          <Text> Merhaba</Text>
        </View>
        <View style={styles.slideTwo}>
          <View style={[styles.box, styles.box1]}></View>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3]}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'FFEB3B',
    flex: 1,
    flexDirection: 'column',
  },
  slideOne: {
    backgroundColor: '#607D8B',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideTwo: {
    backgroundColor: '#FF5722',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#795548',
  },
  box2: {
    backgroundColor: '#9E9E9E',
  },
  box3: {
    backgroundColor: '#3F51B5',
  },
});
