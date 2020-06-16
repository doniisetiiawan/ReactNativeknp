/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

import heartIcon from './images/plain-heart.png';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1',
  },
  liked: {
    tintColor: '#e74c3c',
  },
  text: {
    marginTop: 20,
  },
});

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };
  }

  _onPressBtn = () => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  render() {
    const likedStyles = this.state.liked
      ? styles.liked
      : null;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this._onPressBtn()}
          style={styles.btn}
          underlayColor="#fefefe"
        >
          <Image
            source={heartIcon}
            style={[styles.icon, likedStyles]}
          />
        </TouchableHighlight>
        <Text style={styles.text}>
          Do you like this app?
        </Text>
      </View>
    );
  }
}

export default MainApp;
