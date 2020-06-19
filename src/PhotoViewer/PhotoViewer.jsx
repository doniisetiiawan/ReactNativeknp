/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  image: {
    width,
    height: 300,
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

class PhotoViewer extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.animatedValue = new Animated.Value(0);
  };

  componentDidMount = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 400,
      easing: Easing.in,
    }).start();
  };

  onPressBtn = () => {
    this.props.onClose();
  };

  render() {
    const {
      post: { image },
      position,
    } = this.props;
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        position.pageY,
        height / 2 - position.height / 2,
      ],
    });
    const opacity = this.animatedValue;

    return (
      <Animated.View style={[styles.main, { opacity }]}>
        <Animated.Image
          source={{ uri: image }}
          style={[styles.image, { top, opacity }]}
        />
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={this.onPressBtn}
        >
          <Text style={styles.closeBtnText}>X</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default PhotoViewer;
