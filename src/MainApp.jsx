import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#3498db',
    padding: 15,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    padding: 10,
  },
  mask: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  msg: {
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    padding: 10,
    width: 300,
  },
  alert: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});

class MainApp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      online: null,
      offline: null,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    NetInfo.fetch().then((reach) => {
      this.onConnectivityChange(reach);
    });
  };

  onConnectivityChange = (reach) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      online: reach !== 'none',
      offline: reach === 'none',
    });
  };

  renderMask = () => {
    if (this.state.offline) {
      return (
        <View style={styles.mask}>
          <View style={styles.msg}>
            <Text style={styles.alert}>
              Seems like you do not have network connection
              anymore.
            </Text>
            <Text style={styles.alert}>
              You can still continue using the app, with
              limited content.
            </Text>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolbar}>My Awesome App</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
        {this.renderMask()}
      </View>
    );
  }
}

export default MainApp;
