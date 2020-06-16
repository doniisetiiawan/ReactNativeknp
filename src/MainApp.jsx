/* eslint-disable react/prop-types */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeIcon from './images/home.png';
import favIcon from './images/star.png';
import blogIcon from './images/notebook.png';
import profileIcon from './images/user.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#42b49a',
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={homeIcon} style={styles.icon} />
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Image source={favIcon} style={styles.icon} />
      <Text style={styles.title}>Favorites</Text>
    </View>
  );
}

function BlogScreen() {
  return (
    <View style={styles.container}>
      <Image source={blogIcon} style={styles.icon} />
      <Text style={styles.title}>Blog</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={profileIcon} style={styles.icon} />
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

function TabBarIcon(props) {
  return <Image source={props.icon} style={styles.icon} />;
}

const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={homeIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={favIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Blog"
          component={BlogScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={blogIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={profileIcon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainApp;
