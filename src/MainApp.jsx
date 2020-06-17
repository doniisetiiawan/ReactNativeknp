import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Post from './Post/Post';
import data from './data.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    backgroundColor: '#f0f3f4',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  toolbar: {
    backgroundColor: '#34495e',
    padding: 10,
    paddingTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

function MainApp() {
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.title}>Latest posts</Text>
      </View>
      <FlatList
        data={data.posts}
        renderItem={(post) => <Post {...post} />}
        style={styles.list}
        keyExtractor={(post, index) => index.toString()}
      />
    </View>
  );
}

export default MainApp;
