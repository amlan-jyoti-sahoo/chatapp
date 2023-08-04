import {createSlice} from '@reduxjs/toolkit';
import {User_Dummy_Data} from '../data/user_dummy_data';

const initialState = {
  user: [],
  message: '',
};

export const userSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // setSelectedUser: (state, action) => {
    //   state.selectedUser = state.userData.find(
    //     item => item.senderId === action.payload,
    //   );
    // },
    addChat: (state, action) => {
      const user = action.payload.user;
      const message = action.payload.message;
      //   const userId = state.userData.find(item => item.senderId === action.payload.selectedUser);
      state.user.chatsHistory.push({sent: message});
    },
  },
});
