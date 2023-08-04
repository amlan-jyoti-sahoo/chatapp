import {createSlice} from '@reduxjs/toolkit';
import {User_Dummy_Data} from '../data/user_dummy_data';

const initialState = {
  userData: User_Dummy_Data,
  selectedUser: null,
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
      if (state.selectedUser) {
        const selectedUserIndex = state.userData.findIndex(
          user => user.id === state.selectedUser.id,
        );

        if (selectedUserIndex !== -1) {
          const newChats = {
            sent: action.payload,
          };
          state.userData[selectedUserIndex].chatsHistory.push(newChats);
        }
      }

      // console.log(action.payload);
      // console.log('user:', state.selectedUser.senderId);
      //   console.log(userId);
      console.log(state.userData[state.selectedUser.senderId - 1].chatsHistory);
    },
  },
});
