import { configureStore } from '@reduxjs/toolkit';
import patientReducer from '../features/patientSlice';

const store = configureStore({
  reducer: {
    patient: patientReducer,   // state.patient.patients
  },
});

export default store;
