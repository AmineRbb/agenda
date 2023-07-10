import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import  fetchTokenCall  from "../../service/apiCallsService";

const backendUrl = 'http://localhost:8083/api/v1';


// Async thunk action creator
export const fetchToken = createAsyncThunk('fetchToken', async (loginUser) => {
  try {
    const response = await axios.post(backendUrl + '/auth/authenticate', loginUser);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getUserInfo = createAsyncThunk('getUserInfo', async () => {
    const token = localStorage["agendaToken"];
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.get(backendUrl + '/main/getInfo', {headers});
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  });


const userSlice = createSlice({

    name: "user",
    initialState: {
        connectedUser: {
          firstName: '',
          lastName: '',
          email: '',
          dateOfBirth: '',
          phone: '',
          city: '',
          roles: ''
        },
        isLoggedIn: false,
        isAdmin: false,
        isPro: false,
        isLoading: false
    },
    reducers: {
        disconnect: (state, action) => {
            localStorage.removeItem('agendaToken');
            state.connectedUser = {};
            state.isAdmin = false;
            state.isPro = false;
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchToken.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.isLoading = false;
            localStorage['agendaToken'] = action.payload.token;
        });
        builder.addCase(fetchToken.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getUserInfo.fulfilled, (state, action) => {

            state.isLoading = false;
            state.connectedUser = action.payload;
        });
        builder.addCase(getUserInfo.pending, (state, action) => {
            state.isLoading = true;
        });
    }

});

export const { disconnect } = userSlice.actions;

export const userSliceReducer = userSlice.reducer;
