import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import fetchTokenCall from "../../service/apiCallsService";

const backendUrl = 'http://localhost:8083/api/v1';


// Async thunk action creator
export const getAllRdv = createAsyncThunk('getAllRdv', async () => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(backendUrl + '/rdv/seeAllRdv', { headers });
    return response.data;
    
  } catch (error) {
    
    throw new Error(error.message);

  }
});

export const getOneRdv = createAsyncThunk('getOneRdv', async (dto) => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(backendUrl + '/rdv/seeOneRdv', dto, { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      pageReturn: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});

export const deleteRdv = createAsyncThunk('deleteRdv', async (nameRdvp) => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const dto = {
    nameRdv:nameRdvp
  }
  try {
    const response = await axios.post(backendUrl + '/rdv/deleteRdv', dto, { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      pageReturn: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});

export const reserveRdv = createAsyncThunk('reserveRdv', async (dto) => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.post(backendUrl + '/rdv/reserveRdv', dto, { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      pageReturn: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});

export const creeCalendar = createAsyncThunk('creeCalendar', async (rdvDto) => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(backendUrl + '/pro/creeRdvCalendrier', rdvDto, { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      pageReturn: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});

export const supprCalendar = createAsyncThunk('supprCalendar', async (rdvDto) => {
  const token = localStorage["agendaToken"];
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(backendUrl + '/pro/supprimerRdvCalendrier', rdvDto, { headers });
    return response.data;
  } catch (error) {
    const updatedData = {
      pageReturn: "error"
    };
    return updatedData;
    //throw new Error(error.message);

  }
});

export const voirCalendrierType = createAsyncThunk('voirCalendrierType', async (rdvDto) => {
    const token = localStorage["agendaToken"];
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    try {
      const response = await axios.post(backendUrl + '/pro/voirRdvCalendrierType', rdvDto, { headers });
      return response.data;
    } catch (error) {
      const updatedData = {
        pageReturn: "error"
      };
      return updatedData;
      //throw new Error(error.message);
  
    }
  });

  export const voirCalendrierPro = createAsyncThunk('voirCalendrierPro', async (rdvDto) => {
    const token = localStorage["agendaToken"];
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    try {
      const response = await axios.post(backendUrl + '/pro/voirRdvCalendrierPro', rdvDto, { headers });
      return response.data;
    } catch (error) {
      const updatedData = {
        pageReturn: "error"
      };
      return updatedData;
      //throw new Error(error.message);
  
    }
  });


const rdvSlice = createSlice({

  name: "rdv",
  initialState: {
    oneRdv:null,
    rdvList: [],
    isLoading: false,
    professionnel:'',
    type:'',
    lastFetch: new Date(2000,1,1).getTime(),
    calendarList:[]
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAllRdv.fulfilled, (state, action) => {
      state.rdvList = action.payload;
      state.lastFetch = new Date().getTime();
      state.isLoading = false;
    });
    builder.addCase(getAllRdv.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllRdv.rejected, (state, action) => {
        state.isLoading = false;
        console.error(action.payload);
      });
    builder.addCase(getOneRdv.fulfilled, (state, action) => {
      state.isLoading = false;
      // TOD : affecter le payload
    });
    builder.addCase(getOneRdv.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteRdv.fulfilled, (state, action) => {

      state.isLoading = false;
    });
    builder.addCase(deleteRdv.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(reserveRdv.fulfilled, (state, action) => {

      state.isLoading = false;
    });
    builder.addCase(reserveRdv.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(creeCalendar.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(creeCalendar.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(supprCalendar.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(supprCalendar.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(voirCalendrierType.fulfilled, (state, action) => {
        state.isLoading = false;
    });
    builder.addCase(voirCalendrierType.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(voirCalendrierPro.fulfilled, (state, action) => {
        state.calendarList = action.payload;
        state.isLoading = false;
    });
    builder.addCase(voirCalendrierPro.pending, (state, action) => {
        state.isLoading = true;
    });
  }
});

export const rdvSliceReducer = rdvSlice.reducer;
