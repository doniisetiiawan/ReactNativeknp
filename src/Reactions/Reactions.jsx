/* eslint-disable react/no-access-state-in-setstate,react/prop-types,react/no-array-index-key */
import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import Icon from './Icon';

import image from './images/like.png';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  reactions: {
    flexDirection: 'row',
    height: 0,
  },
});

class Reactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      selected: '',
      icons: [
        'like',
        'heart',
        'angry',
        'laughing',
        'surprised',
      ],
    };
  }

  onSelectReaction = (reaction) => {
    this.setState({
      selected: reaction,
    });
    this.toggleReactions();
  };

  toggleReactions = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  renderReactions = () => {
    if (this.state.show) {
      return (
        <View style={styles.reactions}>
          {this.state.icons.map((name, index) => (
            <Icon
              key={index}
              name={name}
              delay={index * 100}
              index={index}
              onPress={this.onSelectReaction}
            />
          ))}
        </View>
      );
    }
  };

  render() {
    const { style } = this.props;
    const { selected } = this.state;

    return (
      <View style={[style, styles.container]}>
        <TouchableOpacity
          onPress={() => this.toggleReactions()}
        >
          <Image source={image} style={styles.icon} />
        </TouchableOpacity>
        <Text>{selected}</Text>
        {this.renderReactions()}
      </View>
    );
  }
}

export default Reactions;
