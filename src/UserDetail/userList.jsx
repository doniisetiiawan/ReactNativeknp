/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const UserList = ({ contact }) => (
  <View style={styles.main}>
    <Text style={styles.toolbar}>
      Details should go here!
    </Text>
    <Text>
      This is the detail view:{contact.name.first}{' '}
      {contact.name.last}
    </Text>
  </View>
);

export default UserList;
