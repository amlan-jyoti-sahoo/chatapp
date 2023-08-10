import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './store';

import AllChatScreen from './screens/AllChatScreen';
import ChatScreen from './screens/ChatScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileImage from './screens/ProfileImage';
import PhotoRender from './screens/PhotoRender';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AllChatScreen"
            component={AllChatScreen}
            options={{title: 'Chats'}}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              headerRight: () => (
                <View style={styles.headerRightContainer}>
                  <Icon name="videocam" size={24} color="#000000" />
                  <Icon name="call" size={24} color="#000000" />
                </View>
              ),
            }}
          />
          <Stack.Screen name="ProfileImage" component={ProfileImage} />
          <Stack.Screen name="PhotoRender" component={PhotoRender} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
