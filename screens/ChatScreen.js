import {StyleSheet, Text, View, TextInput, Image, FlatList} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {User_Dummy_Data} from '../data/user_dummy_data';
import RecieverChat from '../componets/RecieverChat';
import SenderChat from '../componets/SenderChat';
import {getFormattedDate} from '../util/date';
imp;

function ChatScreen({route, navigation}) {
  const {id, name} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  function renderChats({item}) {
    const time = new Date(item.chats.sent[0].timestamp);
    const timestamp1 = getFormattedDate(time);
    return <Text>{timestamp1}</Text>;
  }

  return (
    <View style={styles.Container}>
      <RecieverChat message={'Hi Bro, how are you?'} />
      <SenderChat
        message={
          'I am fine bro, what about you. what about your next spaceX program. I wanna join your space progarm.'
        }
      />
      <RecieverChat message={'Yeah Fine bro! come to United State'} />
      <SenderChat message={'Okay bro. Let meet at ISS'} />
      {/* <View style={styles.renderChatContaienr}>
        <FlatList
          data={User_Dummy_Data}
          renderItem={renderChats}
          keyExtractor={item => item.senderId}
        />
      </View> */}

      <View style={styles.divider}></View>

      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.searchPersonInput}
          placeholder="Serach Person"
          underlineColorAndroid="transparent"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
        />
      </View>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
  },
  renderChatContaienr: {
    height: 100,
    backgroundColor: '#e00707',
  },
  divider: {},
  bottomContainer: {
    width: '100%',
    height: 50,
    bottom: 50,
    position: 'absolute',
  },
  searchPersonInput: {
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingLeft: 6,
    height: 40,
    marginTop: 10,
  },
});
