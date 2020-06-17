/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

class UserList extends Component {
  capitalize = (value) => value[0].toUpperCase() + value.substring(1);

  renderContact = (contact) => (
    <TouchableOpacity style={styles.row}>
      <Image
        source={{
          uri: `${contact.picture.large}?key=TRR8-JACP-VN4J-HVEJ`,
        }}
        style={styles.img}
      />
      <View style={styles.info}>
        <Text style={styles.name}>
          {this.capitalize(contact.name.first)}{' '}
          {this.capitalize(contact.name.last)}
        </Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.toolbar}>My contacts!</Text>
        <FlatList
          data={this.props.contacts}
          renderItem={(item) => this.renderContact(item.item)}
          style={styles.main}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default UserList;
