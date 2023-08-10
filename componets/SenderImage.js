import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

function SenderImage({imageUri}) {
  return (
    <View style={styles.chatsContainer}>
      <View style={styles.chatContainer}>
        <View style={styles.chat}>
          <Image source={{uri: imageUri}} style={{height: 300, width: 300}} />
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
  chat: {
    paddingHorizontal: 20,
    backgroundColor: '#9c9b9b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    maxWidth: 320,
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
