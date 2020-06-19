/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#ecf0f1',
    borderBottomWidth: 1,
    borderColor: '#ecf0f1',
    flexDirection: 'row',
  },
  pan: {
    flex: 1,
  },
  info: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 20,
  },
});

class ContactItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this.onShouldDrag,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x },
      ]),
      onPanResponderRelease: this.onReleaseItem,
      onPanResponderTerminate: this.onReleaseItem,
    });
  };

  onShouldDrag = (e, gesture) => {
    const { dx } = gesture;
    return Math.abs(dx) > 2;
  };

  onReleaseItem = (e, gesture) => {
    const { onRemove, contact, onDragEnd } = this.props;
    const move = this.rowWidth - Math.abs(gesture.dx);
    let remove = false;
    let config = {
      toValue: { x: 0, y: 0 },
      duration: 500,
    };

    if (move < this.threshold) {
      remove = true;
      // Moving to the right
      if (gesture.dx > 0) {
        config = {
          toValue: { x: this.rowWidth, y: 0 },
          duration: 100,
        };
      } else {
        config = {
          toValue: { x: -this.rowWidth, y: 0 },
          duration: 100,
        };
      }
    }

    onDragEnd();
    Animated.spring(this.state.pan, config).start(() => {
      if (remove) {
        onRemove(contact.item);
      }
    });
  };

  setThreshold = (event) => {
    const {
      layout: { width },
    } = event.nativeEvent;
    this.threshold = width / 3;
    this.rowWidth = width;
  };

  render() {
    const { contact } = this.props;

    return (
      <View style={styles.row} onLayout={this.setThreshold}>
        <Animated.View
          style={[styles.pan, this.state.pan.getLayout()]}
          {...this.panResponder.panHandlers}
        >
          <TouchableHighlight
            style={styles.info}
            // onPress={() => onPress(contact)}
            underlayColor="#ecf0f1"
          >
            <Text>{contact.item.name}</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

export default ContactItem;
