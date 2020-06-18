/* eslint-disable react/no-access-state-in-setstate,react/prop-types */
import React, { Component } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    padding: 15,
  },
});

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: this.props.expanded ? null : 0,
    };
  }

  onToggle = () => {
    LayoutAnimation.spring();
    this.setState({
      height: this.state.height === null ? 0 : null,
    });
  };

  render() {
    const { children, style, title } = this.props;
    const { height } = this.state;

    return (
      <View style={[styles.main, style]}>
        <TouchableOpacity onPress={() => this.onToggle()}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <View style={{ height }}>{children}</View>
      </View>
    );
  }
}

export default Panel;
