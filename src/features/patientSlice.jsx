import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',           
  initialState: {
    patients: [],            
  },
  reducers: {
   
    addPatient: (state, action) => {
      state.patients.push({
        id: Date.now(),
        name: action.payload,   
      });
    },

    deletePatient: (state, action) => {
      state.patients = state.patients.filter(
        (patient) => patient.id !== action.payload
      );
    },
  },
});

// Export the auto-generated action creators
export const { addPatient, deletePatient } = patientSlice.actions;

// Export the reducer for configureStore
export default patientSlice.reducer;
