import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
  Easing,
  Dimensions,
  StyleSheet,
} from 'react-native';
import cloudImage from './images/cloud.png';
import cloudsImage from './images/cloudy.png';
import planeImage from './images/transport.png';

const { width, height } = Dimensions.get('window');
const cloudWidth = 60;

const styles = StyleSheet.create({
  cloud1: {
    position: 'absolute',
    width: cloudWidth,
    height: cloudWidth,
    top: height / 3 - cloudWidth / 2,
  },
  cloud2: {
    width: cloudWidth * 1.5,
    height: cloudWidth * 1.5,
    top: height / 2,
  },
  plane: {
    width: cloudWidth * 1.3,
    height: cloudWidth * 1.3,
    top: height / 2 - cloudWidth,
    left: width / 2 - cloudWidth / 2,
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
    this.animatedValue.setValue(1);
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 6000,
      easing: Easing.linear,
    }).start(() => this.startAnimation());
  };

  render() {
    const left1 = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-cloudWidth, width],
    });

    const left2 = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        -cloudWidth * 5,
        width + cloudWidth * 5,
      ],
    });

    return (
      <View>
        <Animated.Image
          style={[styles.cloud1, { left: left1 }]}
          source={cloudImage}
        />
        <Animated.Image
          style={[
            styles.cloud1,
            styles.cloud2,
            { left: left2 },
          ]}
          source={cloudsImage}
        />
        <Image
          style={[styles.cloud1, styles.plane]}
          source={planeImage}
        />
      </View>
    );
  }
}

export default MainApp;
