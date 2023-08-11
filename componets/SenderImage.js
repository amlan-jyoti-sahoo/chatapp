import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function SenderImage({imageUri, message}) {
  return (
    <View style={styles.chatsContainer}>
      <View style={styles.chatContainer}>
        <View style={styles.chat}>
          <Image source={{uri: imageUri}} style={styles.imageChat} />
          <Text style={styles.chatText}>{message}</Text>
        </View>
        <Image
          source={require('.././assets/images/amlan.jpeg')}
          style={styles.chatImage}
        />
      </View>
    </View>
  );
}

export default SenderImage;

const styles = StyleSheet.create({
  chatsContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  chatContainer: {
    padding: 5,
    right: 0,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  chatImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: 10,
  },
  imageChat: {
    borderRadius: 10,
    margin: 10,
    marginBottom: 5,
    height: 250,
    width: 250,
  },
  chat: {
    paddingHorizontal: 20,
    backgroundColor: '#9c9b9b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    maxWidth: 270,
    minHeight: 40,
  },
  chatText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    textAlign: 'left',
    paddingVertical: 5,
  },
});
