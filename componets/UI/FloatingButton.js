import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Text style={styles.buttonText}>Send</Text>
      <Icon name="send" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#cfc5c5',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    marginRight: 10,
  },
});

export default FloatingButton;
