/* eslint-disable react/prop-types,react/no-array-index-key */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Browser from './BrowserView/BrowserView';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    margin: 10,
    backgroundColor: '#c0392b',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

function HomeScene(props) {
  function onPressButton(url) {
    props.navigation.push('Webview', url);
  }

  return (
    <View style={styles.content}>
      <View>
        {props.links.map((linksData, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPressButton(linksData.url)}
            style={styles.btn}
          >
            <Text style={styles.text}>
              {linksData.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          title: 'My Blog',
          url: 'https://medium.com/@crysfel/latest',
        },
        { title: 'Google', url: 'https://www.google.com/' },
        { title: 'Yahoo', url: 'https://www.yahoo.com/' },
        { title: 'Facebook', url: 'https://facebook.com/' },
      ],
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => (
              <HomeScene
                {...props}
                links={this.state.links}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Webview">
            {(props) => (
              <Browser
                {...props}
                links={this.state.links}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainApp;
