import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '.././store/userSlice';

function ProfileImage() {
  const user = useSelector(state => state.user.selectedUser);
  console.log('ProfileImage', user);
  return (
    <View style={styles.container}>
      <Image source={user.ProfileImage} style={styles.ProfileImage} />
    </View>
    // <Text></Text>
  );
}

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ProfileImage: {
    width: 300,
    height: 300,
  },
});
