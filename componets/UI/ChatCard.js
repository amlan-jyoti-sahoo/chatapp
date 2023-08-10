import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '../../store/userSlice';

function ChatCard({item}) {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  function chatCardPressHandler() {
    dispatch(userSlice.actions.setSelectedUser(item.senderId));
    navigation.navigate('ChatScreen');
  }

  function profileImagePressHandler() {
    dispatch(userSlice.actions.setSelectedUser(item.senderId));
    navigation.navigate('ProfileImage');
  }

  return (
    <View style={styles.chatCard}>
      <TouchableOpacity onPress={profileImagePressHandler}>
        <Image
          source={item.profileImage}
          style={{height: 50, width: 50, borderRadius: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={chatCardPressHandler}>
        <View style={styles.TextSubCard}>
          <Text style={styles.Name}>{item.senderName}</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.lastMessage}>
              {item.chatsHistory[item.chatsHistory.length - 1].sent}
            </Text>
            <Text style={{color: 'black'}}>: 7.00pm</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
    color: 'black',
  },
  lastMessage: {
    fontSize: 14,
    fontWeight: '300',
    color: 'black',
  },
});
