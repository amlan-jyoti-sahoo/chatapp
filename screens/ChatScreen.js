import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import RecieverChat from '../componets/RecieverChat';
import SenderChat from '../componets/SenderChat';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from '../componets/UI/IconButton';

function ChatScreen({route, navigation}) {
  const {item} = route.params;
  const senderProfileImage = item.profileImage;
  const [message, setMessage] = useState('');
  const [chatMessages, setchatMessages] = useState(item.chatsHistory);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.senderName,
    });
  }, []);

  function renderChats({item}) {
    return (
      <>
        <SenderChat message={item.sent} />
        {item.recieve != null ? (
          <RecieverChat
            message={item.recieve}
            profileImage={senderProfileImage}
          />
        ) : null}
      </>
    );
  }

  function messageInputHandler(text) {
    setMessage(text);
  }

  function sendMessageHandler() {
    if (message != '') {
      const tempMsgs = [...chatMessages];
      setchatMessages([...tempMsgs, {sent: message}]);
    }
    setMessage('');
  }

  return (
    <View style={styles.Container}>
      <View style={styles.renderChatContaienr}>
        <FlatList
          data={chatMessages}
          renderItem={renderChats}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>

      <View style={styles.divider}></View>

      <View style={styles.bottomContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconButton icon={'camera'} size={30} color={'#943f3f'} />
          <TextInput
            style={styles.searchPersonInput}
            placeholder="Write message"
            value={message}
            underlineColorAndroid="transparent"
            keyboardType="default"
            autoCorrect={false}
            returnKeyType="done"
            onChangeText={messageInputHandler}
          />
          <IconButton
            icon={'send'}
            size={30}
            color={'#943f3f'}
            onPress={sendMessageHandler}
          />
        </View>
      </View>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  renderChatContaienr: {height: 730, backgroundColor: '#cfc5c5'},
  divider: {},
  bottomContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 100,
    paddingBottom: 30,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchPersonInput: {
    minWidth: 280,
    borderRadius: 20,
    backgroundColor: '#cad0d0',
    padding: 18,
    fontSize: 18,
    marginHorizontal: 10,
  },
});
