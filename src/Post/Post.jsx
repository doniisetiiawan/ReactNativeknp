/* eslint-disable react/prop-types */
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const Post = (props) => (
  <View style={styles.maincontent}>
    <View style={styles.main}>
      <Image
        source={{
          uri: `https://s3.amazonaws.com/crysfel/public/book/02/01/${props.item.img}`,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          {props.item.title}
        </Text>
        <Text>{props.item.content}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Read more</Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default Post;
