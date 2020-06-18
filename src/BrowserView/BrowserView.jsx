/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#e74c3c',
    padding: 20,
  },
  text: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
});

class BrowserView extends Component {
  goBack = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.toolbar}
          onPress={() => this.goBack()}
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <WebView
          source={{ uri: this.props.route.params }}
          style={styles.content}
        />
      </View>
    );
  }
}

export default BrowserView;
