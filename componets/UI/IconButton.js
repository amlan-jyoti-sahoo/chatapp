import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

function IconButton({icon, size, color, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} size={size} color={color} style={styles.icon} />
    </TouchableOpacity>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  icon: {
    margin: 5,
  },
});
