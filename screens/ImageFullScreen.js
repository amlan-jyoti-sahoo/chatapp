import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

function ImageFullScreen({imageUri}) {
  return (
    <View style={{flex: 1}}>
      <Image source={{uri: imageUri}} style={styles.image} />
    </View>
  );
}

export default ImageFullScreen;

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
});
