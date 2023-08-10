import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FloatingButton from '../componets/UI/FloatingButton';

const PhotoRender = ({route}) => {
  const {imageUri} = route.params;
  console.log('imageUri', imageUri);

  return (
    <View>
      <Image source={{uri: imageUri}} style={{width: '100%', height: '100%'}} />
      <FloatingButton />
    </View>
  );
};

export default PhotoRender;

const styles = StyleSheet.create({});
