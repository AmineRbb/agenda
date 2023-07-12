import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import fetchTokenCall from "../../service/apiCallsService";

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

export const register = createAsyncThunk('register', async (signUser) => {
  try {
    const response = await axios.post(backendUrl + '/auth/register', signUser);
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
    const response = await axios.get(backendUrl + '/main/getInfo', { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      pageReturn: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});

export const getUserRoles = createAsyncThunk('getUserRoles', async () => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(backendUrl + '/auth/roles', token, { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      pageReturn: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});



export const addRole = createAsyncThunk('addRole', async (dto) => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(backendUrl + 'admin/addRoleUtilisateur', dto, { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      booleanPage: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});

export const deleteRole = createAsyncThunk('deleteRole', async (dto) => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(backendUrl + 'admin/removeRoleUtilisateur', dto, { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      booleanPage: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});

export const deleteUser = createAsyncThunk('deleteUser', async (dto) => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(backendUrl + 'admin/deleteUtilisateur', dto, { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      booleanPage: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});



const userSlice = createSlice({

  name: "user",
  initialState: {
    connectedUser: {
      firstname: '',
      lastname: '',
      email: '',
      dateOfBirth: '',
      phone: '',
      city: '',
      roles: ''
    },
    roles: [],
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
    builder.addCase(getUserRoles.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.roles = action.payload.roles;

      state.isAdmin = state.roles.some(role => role.name === 'ADMIN');
      state.isPro = state.roles.some(role => role.name === 'PRO');
      state.isLoading = false;
      //localStorage['agendaToken'] = action.payload.token;
    });
    builder.addCase(getUserRoles.pending, (state, action) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {

      state.isLoading = false;
      state.connectedUser = action.payload;
    });
    builder.addCase(getUserInfo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addRole.fulfilled, (state, action) => {

      state.isLoading = false;
    });
    builder.addCase(addRole.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteRole.fulfilled, (state, action) => {

      state.isLoading = false;
    });
    builder.addCase(deleteRole.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {

      state.isLoading = false;
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
    });
  }
});

export const { disconnect } = userSlice.actions;

export const userSliceReducer = userSlice.reducer;
