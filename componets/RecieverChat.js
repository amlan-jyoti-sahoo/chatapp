import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

function RecieverChat({message}) {
  return (
    <View style={styles.chatsContainer}>
      <View style={styles.chatContainer}>
        <Image
          source={require('.././assets/images/elonmusk.jpeg')}
          style={styles.chatImage}
        />
        <View style={styles.chat}>
          <Text style={styles.chatText}>{message}</Text>
        </View>
      </View>
    </View>
  );
}

export default RecieverChat;

const styles = StyleSheet.create({
  chatsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  chatContainer: {
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  chatImage: {
    top: 0,
    left: 0,
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  chat: {
    paddingHorizontal: 20,
    backgroundColor: '#786161',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    borderTopRightRadius: 20,
    maxWidth: 320,
    minHeight: 40,
  },
  chatText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    textAlign: 'justify',
    paddingVertical: 5,
  },
});
