import {Image, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import React from 'react';
import QuickImageNameContainer from '../componets/UI/QuickImageNameContainer';
import ChatCard from '../componets/UI/ChatCard';
import {User_Dummy_Data} from '../data/user_dummy_data';

function AllChatScreen({navigation}) {
  return (
    <View style={styles.screenContainer}>
      <TextInput
        style={styles.searchPersonInput}
        placeholder="Serach Person"
        underlineColorAndroid="transparent"
        keyboardType="default"
        autoCorrect={false}
        returnKeyType="done"
      />
      <View style={styles.contactsImageContainer}>
        <FlatList
          data={User_Dummy_Data}
          renderItem={({item}) => (
            <View style={styles.contactsInnerContainer}>
              <Image source={item.profileImage} style={styles.avatarImage} />
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={{width: 80, textAlign: 'center'}}>
                {item.senderName}
              </Text>
            </View>
          )}
          keyExtractor={item => item.senderId}
          horizontal={true}
        />
      </View>
      <View style={styles.divider}></View>
      <View style={styles.chatCardContainer}>
        <FlatList
          data={User_Dummy_Data}
          renderItem={({item}) => (
            <ChatCard
              senderId={item.senderId}
              senderName={item.senderName}
              profileImage={item.profileImage}
            />
          )}
          keyExtractor={item => item.senderId}
        />
      </View>
    </View>
  );
}

export default AllChatScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // backgroundColor: '#cccc',
  },
  searchPersonInput: {
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    paddingLeft: 6,
    height: 40,
    marginTop: 10,
  },
  contactsImageContainer: {
    height: 100,
    margin: 10,
    flexDirection: 'row',
    // backgroundColor: '#7bff00',
  },
  contactsInnerContainer: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  shortNameText: {},
  divider: {
    borderBottomWidth: 1,
    borderColor: '#c1aeaecc',
    marginHorizontal: 20,
  },
  chatCardContainer: {
    marginTop: 20,
    paddingVertical: 20,
    flexDirection: 'column',
    backgroundColor: '#d9d6d6',
    height: '100%',
    borderRadius: 30,
  },
});
