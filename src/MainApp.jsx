import React, { Component } from 'react';
import {
  Animated,
  Easing,
  Dimensions,
  StyleSheet,
} from 'react-native';
import cloudImage from './images/cloudy.png';

const { width, height } = Dimensions.get('window');

const imageWidth = 80;

const styles = StyleSheet.create({
  image: {
    height: imageWidth,
    position: 'absolute',
    top: height / 3,
    width: imageWidth,
  },
});

class MainApp extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.animatedValue = new Animated.Value(0);
  };

  componentDidMount = () => {
    this.startAnimation();
  };

  startAnimation = () => {
    this.animatedValue.setValue(width);
    Animated.timing(this.animatedValue, {
      toValue: -imageWidth,
      duration: 6000,
      easing: Easing.linear,
    }).start(() => this.startAnimation());
  };

  render() {
    return (
      <Animated.Image
        style={[styles.image, { left: this.animatedValue }]}
        source={cloudImage}
      />
    );
  }
}

export default MainApp;
