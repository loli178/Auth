import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../firebase/firebaseConfig';

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.message);
  }
});
// export const loginUser = async formValue => {
//   try {
//     const auth = firebase.getAuth();
//     await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
//   } catch (error) {
//     console.log(error);
//   }
// };
// createAsyncThunk,Genera una función creadora de acciones que despacha tres acciones diferentes, una para el estado pendiente,
//otra para el estado cumplido y otra para el estado rechazado.
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const initialState = { user: null, status: 'idle', error: null };
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.status = 'loading';
      console.log(state.status);
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.user.status = 'succeeded';
      console.log(state.status);
    },
    closeSession: state => {
      state.user = {
        id: null,
        name: null,
        email: null,
        role: 'guest',
        status: 'idle',
      };
      console.log(state.status);
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(loginUser.pending, state => {
  //       state.status = 'loading';
  //     })
  //     .addCase(loginUser.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.user = action.payload;
  //     })
  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.payload;
  //     })
  //     .addCase(logoutUser.pending, state => {
  //       state.status = 'loading';
  //     })
  //     .addCase(logoutUser.fulfilled, state => {
  //       state.status = 'succeeded';
  //       state.user = null;
  //     })
  //     .addCase(logoutUser.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.payload;
  //     });
  // },
});
export const { loginStart, loginSuccess, closeSession } = authSlice;
export default authSlice.reducer;
