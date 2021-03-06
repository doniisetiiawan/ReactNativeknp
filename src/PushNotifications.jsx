import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PushNotification from 'react-native-push-notification';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class PushNotifications extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.setState({
      notification: 'Thanks for reading React Native Cookbook!',
    });

    // PushNotification.configure({
    //   onRegister(token) {
    //     console.log('register', token);
    //   },
    //   onNotification: this.onNotificationReceived,
    //   senderID: 'YOUR_ID_HERE',
    //   requestPermissions: true,
    // });
  }

  onNotificationReceived = (notification) => {
    this.setState({
      notification: notification.body,
    });
  };

  render() {
    const { notification } = this.state;
    let notificationMessage = (
      <Text>Waiting for notifications</Text>
    );

    if (notification) {
      notificationMessage = (
        <View>
          <Text>You have received a notification:</Text>
          <Text>{notification}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Push Notifications with React Native Cookbook Test
        </Text>
        {notificationMessage}
      </View>
    );
  }
}

export default PushNotifications;
