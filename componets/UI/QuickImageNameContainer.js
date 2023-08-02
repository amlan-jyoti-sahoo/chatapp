import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

function QuickImageNameContainer({senderName, profileImage}) {
  return (
    <View style={styles.contactsInnerContainer}>
      <Image
        source={require('../../assets/images/srk.jpeg')}
        style={styles.avatarImage}
      />
      <Text style={styles.shortNameText}>{senderName}</Text>
    </View>
  );
}

export default QuickImageNameContainer;

const styles = StyleSheet.create({
  contactsInnerContainer: {
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  shortNameText: {},
});
