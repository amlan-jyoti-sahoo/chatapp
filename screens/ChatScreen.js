import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {User_Dummy_Data} from '../data/user_dummy_data';
import RecieverChat from '../componets/RecieverChat';
import SenderChat from '../componets/SenderChat';
import {getFormattedDate} from '../util/date';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from '../componets/UI/IconButton';

function ChatScreen({route, navigation}) {
  const {item} = route.params;
  const senderProfileImage = item.profileImage;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.senderName,
    });
  }, []);

  function renderChats({item}) {
    return (
      <>
        <SenderChat message={item.sent} />
        <RecieverChat
          message={item.recieve}
          profileImage={senderProfileImage}
        />
      </>
    );
  }

  return (
    <View style={styles.Container}>
      <View style={styles.renderChatContaienr}>
        <FlatList
          data={item.chatsHistory}
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
            underlineColorAndroid="transparent"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
          />
          <IconButton icon={'send'} size={30} color={'#943f3f'} />
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
