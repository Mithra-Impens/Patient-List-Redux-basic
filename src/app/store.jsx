import { configureStore } from '@reduxjs/toolkit';
import patientReducer from '../features/patientSlice';

// ─────────────────────────────────────────
//  Store
// ─────────────────────────────────────────
// configureStore() replaces createStore() from plain Redux.
// What it includes AUTOMATICALLY (no manual setup needed):
//   ✅ Redux DevTools Extension — no window.__REDUX_DEVTOOLS_EXTENSION__ needed
//   ✅ redux-thunk middleware   — for async actions (createAsyncThunk)
//   ✅ Immutability checker     — warns if you accidentally mutate state
//   ✅ Serializability checker  — warns if non-serializable values enter state

const store = configureStore({
  reducer: {
    patient: patientReducer,   // state.patient.patients
  },
});

export default store;