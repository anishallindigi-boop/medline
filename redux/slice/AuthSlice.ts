import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


interface Auth {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  message?: string;
}

interface AuthState {
  auths: Auth | null;
  loading: boolean;
  error: string | null;
  message: string | null;
  success: boolean;
  isdeleted: boolean;
  isauthenticate: boolean;
  isloggedin: boolean;
  getuserdetails: boolean;

}

const initialState: AuthState = {
  auths: null,
  loading: false,
  error: null,
  message: null,
  success: false,
  isdeleted: false,
  isloggedin: false,
  getuserdetails: false,
  isauthenticate: false
};


//-----------------------------ACTION------------------------

//----------------------------------CREATE USER---------------------

export const createuser = createAsyncThunk<
  Auth,
  { username: string; email: string; password: string },
  { rejectValue: string }
>('auth/createuser', async ({ username, email, password }, { rejectWithValue }) => {

  try {


    const user = {
      username,
      email,
      password
    }


    const res = await axios.post(`${API_URL}/api/auth/signup`, user, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    // console.log(res.data);
    return res.data;
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || 'Error creating user';
    return rejectWithValue(errorMessage);
  }
});

//----------------------------------LOGIN USER---------------------

export const loginuser = createAsyncThunk<
  Auth, // Return type (adjust if needed)
  { email: string; password: string }, // Argument type
  { rejectValue: string } // ThunkAPI config
>(
  'auth/loginuser',
  async ({ email, password }, { rejectWithValue }) => {
    try {

      const loginuser = {
        email,
        password
      }
      const res = await axios.post(`${API_URL}/api/auth/login`, loginuser, {
        headers: {
          'x-api-key': API_KEY
        },
        withCredentials: true,
      },


       );
      // console.log(res);

      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Error logging in';
      return rejectWithValue(errorMessage);
    }
  }
);

//----------------------------------GET USER---------------------
export const getuser = createAsyncThunk<Auth, void, { rejectValue: string }>(
  'auth/getuser',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/api/auth/profile`, {
        headers: {
          'x-api-key': API_KEY
        },
        withCredentials: true,
      });
      // console.log(res.data,"get");
      return res.data;
    } catch (error: any) {
      // console.log(error);
      const errorMessage = error?.response?.data?.message || 'Error getting user';
      return rejectWithValue(errorMessage);
    }
  })

//----------------------------------LOGOUT USER---------------------

export const logoutuser = createAsyncThunk<Auth, void, { rejectValue: string }>(
  'auth/logoutuser',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/logout`, {}, {
        headers: {
          'x-api-key': API_KEY
        },
        withCredentials: true,
      });
      // console.log(res.data);
      return res.data;
    } catch (error: any) {
      // console.log(error);
      const errorMessage = error?.response?.data?.message || 'Error logging out';
      return rejectWithValue(errorMessage);
    }
  })

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: (state) => {
      state.auths = null;
      state.loading = false;
      state.error = null;
      state.message = null;
      state.success = false;
      state.isdeleted = false;
      state.isloggedin = false;
      state.getuserdetails = false;
      state.isauthenticate = false;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(createuser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createuser.fulfilled, (state, action: PayloadAction<Auth>) => {
        state.loading = false;
        state.auths = action.payload;
        state.success = true;
        state.message = action.payload.message as string;
      })
      .addCase(createuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to create user';
        state.success = false;
      })

      .addCase(loginuser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isloggedin = false;
        state.success = false;
      })

      .addCase(loginuser.fulfilled, (state, action: PayloadAction<Auth>) => {
        state.loading = false;
        state.auths = action.payload;
        state.isauthenticate = true;
        state.getuserdetails = true;
        state.isloggedin = true;
        state.success = true;
        state.message = action.payload.message as string;
      })

      .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to login';
        state.success = false;
        state.isloggedin = false;
      })

      //----------------------------------GET USER---------------------

      .addCase(getuser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.getuserdetails = false;
      })

      .addCase(getuser.fulfilled, (state, action: PayloadAction<Auth>) => {
        state.loading = false;
        state.auths = action.payload;
        state.success = true;
        state.getuserdetails = true
        state.isauthenticate = true
        // state.message = action.payload.message as string;
      })
      .addCase(getuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to get user';
        state.success = false;
        state.getuserdetails = false
      })

      //----------------------------------LOGOUT USER---------------------

      .addCase(logoutuser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.isdeleted = false;
      })
      .addCase(logoutuser.fulfilled, (state, action: PayloadAction<Auth>) => {
        state.loading = false;
        // state.auth = action.payload;
        state.isdeleted = true;
        state.message = action.payload.message as string;
      })

      .addCase(logoutuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to logout';
        state.success = false;
        state.isdeleted = false;
      })

  }
})


export const { resetState } = AuthSlice.actions;
export default AuthSlice.reducer;