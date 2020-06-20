import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Clipboard,
  TextInput,
} from 'react-native';
import Button from 'react-native-button';
import ClipboardText from './ClipboardText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
  content: {
    marginLeft: 5,
    marginRight: 5,
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  rowText: {
    color: '#333333',
  },
  buttonContainer: {
    width: 150,
    padding: 10,
    margin: 5,
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FF5722',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
  },
});

class CopyPaste extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.getClipboardContent();

    this.setState({
      clipboardContent: undefined,
    });
  };

  getClipboardContent = async () => {
    const clipboardContent = await Clipboard.getString();

    this.setState({
      clipboardContent,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Tap and Hold the next line to copy it to the
          Clipboard
        </Text>
        <ClipboardText style={styles.header}>
          React Native Cookbook
        </ClipboardText>
        <Text style={styles.instructions}>
          Input some text into the TextInput below and
          Cut/Copy as you normally would
        </Text>
        <View style={styles.row}>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>
            Clipboard Content:
          </Text>
          <Text style={styles.content}>
            {this.state.clipboardContent}
          </Text>
        </View>
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.buttonStyle}
          onPress={this.getClipboardContent}
        >
          Paste Clipboard
        </Button>
      </View>
    );
  }
}

export default CopyPaste;
