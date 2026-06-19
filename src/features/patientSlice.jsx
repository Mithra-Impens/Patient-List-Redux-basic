import { createSlice } from '@reduxjs/toolkit';

// ─────────────────────────────────────────
//  patientSlice
// ─────────────────────────────────────────
// createSlice() replaces THREE things from plain Redux:
//   1. Action type constants  (ADD_PATIENT, DELETE_PATIENT)
//   2. Action creator functions (addPatient(), deletePatient())
//   3. The reducer (switch statement)
// All three live here in one place.

const patientSlice = createSlice({
  name: 'patient',           // prefix for auto-generated action types
  initialState: {
    patients: [],            // same shape as before: { patients: [] }
  },
  reducers: {
    // ── ADD PATIENT ───────────────────────────────────────────
    // In plain Redux we had to write:
    //   return { ...state, patients: [...state.patients, action.payload] }
    // RTK uses Immer internally — we can write direct mutation syntax.
    // Immer intercepts it and produces a new immutable state behind the scenes.
    addPatient: (state, action) => {
      state.patients.push({
        id: Date.now(),
        name: action.payload,   // payload is just the name string
      });
    },

    // ── DELETE PATIENT ────────────────────────────────────────
    // action.payload is the id number.
    // filter() returns a new array — also valid inside Immer.
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