import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import QuickImageNameContainer from '../componets/UI/QuickImageNameContainer';
import ChatCard from '../componets/UI/ChatCard';
import {User_Dummy_Data} from '../data/user_dummy_data';

function AllChatScreen({navigation}) {
  const [filteredData, setfilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const textInputRef = useRef(null);

  useEffect(() => {
    fetchName();
    return () => {};
  }, []);

  const fetchName = () => {
    if (search == '') {
      setfilteredData(User_Dummy_Data);
    }
  };

  const searchFilter = text => {
    if (text) {
      const newData = User_Dummy_Data.filter(item => {
        const itemData = item.senderName
          ? item.senderName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredData(newData);
      setSearch(text);
    }
    if (text == '') {
      setfilteredData(User_Dummy_Data);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <View style={styles.contactsInnerContainer}>
        <Image source={item.profileImage} style={styles.avatarImage} />
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{width: 80, textAlign: 'center'}}>
          {item.senderName}
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#fc0d0d'}} />
    );
  };

  return (
    // <TouchableWithoutFeedback onPress={handleTapOutside}>
    <View style={styles.screenContainer}>
      <TextInput
        style={styles.searchPersonInput}
        placeholder="Serach Person"
        underlineColorAndroid="transparent"
        keyboardType="default"
        autoCorrect={false}
        returnKeyType="done"
        onChangeText={text => searchFilter(text)}
      />

      <View style={styles.contactsImageContainer}>
        <FlatList
          data={filteredData}
          renderItem={ItemView}
          keyExtractor={item => item.senderId}
          // ItemSeparatorComponent={ItemSeparatorView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
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
    // </TouchableWithoutFeedback>
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
