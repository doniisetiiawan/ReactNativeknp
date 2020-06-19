import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Reactions from './Reactions/Reactions';

import image1 from './images/01.jpg';
import image2 from './images/02.jpg';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  image: {
    width,
    height: 300,
  },
});

const MainApp = () => (
  <View style={styles.main}>
    <Text style={styles.toolbar}>Reactions</Text>
    <ScrollView style={styles.content}>
      <Image
        source={image1}
        style={styles.image}
        resizeMode="cover"
      />
      <Reactions />

      <Image
        source={image2}
        style={styles.image}
        resizeMode="cover"
      />
      <Reactions />
    </ScrollView>
  </View>
);

export default MainApp;
