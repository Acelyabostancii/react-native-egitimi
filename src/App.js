import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import Stillendirme from './Chapter5/OneStillendirme';
import Flex from './Chapter5/TwoFlex';
import ComponentClass from './Chapter6/AComponent';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView flex={1}>
        {/* <Stillendirme /> */}
        {/* {<Flex />} */}
        <ComponentClass />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
