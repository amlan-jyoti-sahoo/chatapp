import {createSlice} from '@reduxjs/toolkit';
import {User_Dummy_Data} from '../data/user_dummy_data';

const initialState = {
  userData: User_Dummy_Data,
  selectedUser: null,
  chatMessages: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = state.userData.find(
        item => item.senderId === action.payload,
      );
    },

    addChat: (state, action) => {
      state.userData[0].chatsHistory.push({sent: action.payload});
      // console.log(action.payload);
      // console.log('user:', state.selectedUser.senderId);
      //   console.log(userId);
      console.log(state.userData[state.selectedUser.senderId - 1].chatsHistory);
    },
  },
});
