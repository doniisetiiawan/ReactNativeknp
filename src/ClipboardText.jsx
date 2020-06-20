/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Clipboard, Text } from 'react-native';

export default class ClipboardText extends Component {
  constructor(props) {
    super(props);

    this.sourceText = React.createRef();
  }

  onClipboardCopy = () => {
    const sourceText = this.props.children;

    Clipboard.setString(sourceText);
  };

  render() {
    return (
      <Text
        ref={this.sourceText}
        onLongPress={this.onClipboardCopy}
        {...this.props}
      />
    );
  }
}
