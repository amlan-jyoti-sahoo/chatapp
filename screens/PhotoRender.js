import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';
import FloatingButton from '../componets/UI/FloatingButton';

const PhotoRender = ({route}) => {
  const {imageUri, sendMessageHandler} = route.params;

  return (
    <View>
      <Image source={{uri: imageUri}} style={{width: '100%', height: '100%'}} />
      {/* <TextInput
        style={styles.searchPersonInput}
        placeholder="Write message"
        placeholderTextColor={'#232323'}
        value={message}
        keyboardType="default"
        // autoCorrect={false}
        returnKeyType="done"
        onChangeText={messageInputHandler}
      /> */}
      <FloatingButton />
    </View>
  );
};

export default PhotoRender;

const styles = StyleSheet.create({});
