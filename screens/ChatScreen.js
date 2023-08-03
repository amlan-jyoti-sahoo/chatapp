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
      <View style={{height: 730}}>
        <ScrollView>
          <RecieverChat message={'Hi Bro, how are you?'} />
          <SenderChat
            message={
              'I am fine bro, what about you. what about your next spaceX program. I wanna join your space progarm.'
            }
          />
          <RecieverChat message={'Yeah Fine bro! come to United State'} />
          <SenderChat message={'Okay bro. Let meet at ISS'} />
          <RecieverChat message={'Hi Bro, how are you?'} />
          <SenderChat
            message={
              'I am fine bro, what about you. what about your next spaceX program. I wanna join your space progarm.'
            }
          />
          <RecieverChat
            message={'Yeah Fine bro! come to United State by tommorow'}
          />
          <SenderChat message={'Okay bro. Let meet at ISS'} />
          <RecieverChat message={'Hi Bro, how are you?'} />
          <SenderChat
            message={
              'I am fine bro, what about you. what about your next spaceX program. I wanna join your space progarm.'
            }
          />
          <RecieverChat message={'Yeah Fine bro! come to United State'} />
          <SenderChat message={'Okay bro. Let meet at ISS'} />
        </ScrollView>
      </View>

      {/* <View style={styles.renderChatContaienr}>
        <FlatList
          data={User_Dummy_Data}
          renderItem={renderChats}
          keyExtractor={item => item.senderId}
        />
      </View> */}

      <View style={styles.divider}></View>

      <View style={styles.bottomContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={'camera'} size={30} color={'#943f3f'} />
          <TextInput
            style={styles.searchPersonInput}
            placeholder="Write message"
            underlineColorAndroid="transparent"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
          />
          <Icon name={'send'} size={30} color={'#943f3f'} />
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
  renderChatContaienr: {
    height: 100,
    backgroundColor: '#e00707',
  },
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
    // justifyContent: 'center',
  },
  searchPersonInput: {
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingLeft: 6,
    height: 40,
    flex: 1,
    marginTop: 10,
  },
});
