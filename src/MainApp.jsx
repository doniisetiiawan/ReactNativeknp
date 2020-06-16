/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import data from './sales.json';

import basketIcon from './images/basket.png';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    backgroundColor: '#0f1b29',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    tintColor: '#fff',
    height: 22,
    width: 22,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    color: '#ccc',
    fontSize: 14,
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

function RenderRow({ record }) {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Image source={basketIcon} style={styles.icon} />
      </View>
      <View style={styles.info}>
        <Text style={styles.items}>
          {record.items} Items
        </Text>
        <Text style={styles.address}>{record.address}</Text>
      </View>
      <View style={styles.total}>
        <Text style={styles.date}>{record.date}</Text>
        <Text style={styles.price}>${record.total}</Text>
      </View>
    </View>
  );
}

class MainApp extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Sales</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <RenderRow record={item} />
          )}
          keyExtractor={(item, i) => i.toString()}
        />
      </View>
    );
  }
}

export default MainApp;
