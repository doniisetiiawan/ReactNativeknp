import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UserForm from './UserForm/UserForm';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  toolbar: {
    backgroundColor: '#1abc9c',
    padding: 20,
    color: '#fff',
    fontSize: 20,
  },
  content: {
    padding: 10,
  },
});

const MainApp = () => (
  <View style={styles.main}>
    <Text style={styles.toolbar}>Fitness App</Text>
    <ScrollView style={styles.content}>
      <UserForm />
    </ScrollView>
  </View>
);

export default MainApp;
