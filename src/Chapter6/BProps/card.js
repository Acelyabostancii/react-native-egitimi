import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

export default class card extends Component {
  render() {
    const {text, backgroundColor} = this.props;
    return (
      <View style={[styles.cardContainer, {backgroundColor: backgroundColor}]}>
        <Text style={styles.cardText}>{text}</Text>
      </View>
    );
  }
}

card.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};
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
