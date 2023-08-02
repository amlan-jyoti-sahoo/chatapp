import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function ChatCard({senderId, senderName, profileImage}) {
  const navigation = useNavigation();

  function chatCardPressHandler() {
    const userData = {
      id: senderId,
      name: senderName,
    };
    navigation.navigate('ChatScreen', userData);
  }
  return (
    <TouchableOpacity onPress={chatCardPressHandler}>
      <View style={styles.chatCard}>
        <Image
          source={profileImage}
          style={{height: 50, width: 50, borderRadius: 50}}
        />
        <View style={styles.TextSubCard}>
          <Text style={styles.Name}>{senderName}</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.lastMessage}>Hi how are you</Text>
            <Text>: 7.00pm</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ChatCard;

const styles = StyleSheet.create({
  chatCard: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  TextSubCard: {
    marginLeft: 20,
  },
  Name: {
    fontSize: 20,
    fontWeight: '600',
  },
  lastMessage: {
    fontSize: 14,
    fontWeight: '300',
  },
});
