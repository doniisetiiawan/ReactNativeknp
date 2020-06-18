/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  text: {
    color: '#fff',
  },
});

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: -1000,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.animatedValue = new Animated.Value(0);
  };

  componentDidMount = () => {
    this.startSlideIn();
  };

  onLayoutChange = (event) => {
    const {
      layout: { height },
    } = event.nativeEvent;
    if (this.state.height === -1000) {
      this.setState({ height });
    }
  };

  getAnimation = (value, autoHide) => {
    const { delay } = this.props;
    return Animated.timing(this.animatedValue, {
      toValue: value,
      duration: 500,
      easing: Easing.cubic,
      delay: autoHide ? delay : 0,
    });
  };

  startSlideIn = () => {
    const { autoHide } = this.props;

    this.animatedValue.setValue(0);
    this.getAnimation(1).start(() => {
      if (autoHide) {
        this.startSlideOut();
      }
    });
  };

  startSlideOut = () => {
    const { autoHide, onClose } = this.props;

    this.animatedValue.setValue(1);
    this.getAnimation(0, autoHide).start(() => onClose());
  };

  render() {
    const { message } = this.props;
    const { height } = this.state;
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-height, 0],
    });

    return (
      <Animated.View
        onLayout={this.onLayoutChange}
        style={[styles.main, { top }]}
      >
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    );
  }
}

export default Notification;
