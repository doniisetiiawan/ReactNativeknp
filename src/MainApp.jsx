import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Dimensions from './utils/Dimensions';
import UserList from './UserList/userList';
import UserDetail from './UserDetail/userList';
import data from './data.json';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});

class MainApp extends Component {
  renderMaster = () => <UserList contacts={data.results} />;

  renderDetail = () => {
    if (Dimensions.isTablet()) {
      return <UserDetail contact={data.results[0]} />;
    }
  };

  render() {
    return (
      <View style={styles.content}>
        {this.renderMaster()}
        {this.renderDetail()}
      </View>
    );
  }
}

export default MainApp;
