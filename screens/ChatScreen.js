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
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '.././store/userSlice';

function ChatScreen({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.selectedUser);

  // console.log(user.senderName);
  // const {item} = route.params;
  const senderProfileImage = user.profileImage;
  const [message, setMessage] = useState('');
  const [chatMessages, setchatMessages] = useState(user.chatsHistory);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.senderName,
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
      dispatch(userSlice.actions.addChat(message));
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

      {/* <View style={styles.divider}></View> */}

      <View style={styles.bottomContainer}>
        <View style={styles.bottomInnerContainer}>
          <IconButton icon={'camera'} size={30} color={'#943f3f'} />
          <TextInput
            style={styles.searchPersonInput}
            placeholder="Write message"
            placeholderTextColor={'#232323'}
            value={message}
            keyboardType="default"
            // autoCorrect={false}
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
    backgroundColor: '#cfc5c5',
  },
  renderChatContaienr: {height: '86%', backgroundColor: '#cfc5c5'},
  divider: {},
  bottomContainer: {
    width: '100%',
    height: '14%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  bottomInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'black',
    marginVertical: 10,
  },
  searchPersonInput: {
    minWidth: 250,
    borderRadius: 20,
    backgroundColor: '#cad0d0',
    padding: 13,
    fontSize: 18,
    marginHorizontal: 10,
    color: 'black',
  },
});
