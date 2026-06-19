import { ADD_PATIENT, DELETE_PATIENT } from './actions';

// ─────────────────────────────────────────
//  Initial State
// ─────────────────────────────────────────
// This is exactly the shape the task requires:
//   { patients: [] }
// Redux passes this as the default value for `state`
// on the very first call (before any action is dispatched).
const initialState = {
  patients: [],
};

// ─────────────────────────────────────────
//  Reducer
// ─────────────────────────────────────────
// A reducer is a pure function: (currentState, action) → newState.
// It MUST NOT mutate the existing state — it always returns a new object.
// Using the spread operator (...) achieves this.

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PATIENT:
      // Return a new state object.
      // Spread the existing state to keep any other keys intact.
      // Replace `patients` with a new array that contains all
      // existing patients PLUS the new one at the end.
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };

    case DELETE_PATIENT:
      // Filter out the patient whose id matches the payload id.
      // filter() returns a NEW array — no mutation.
      return {
        ...state,
        patients: state.patients.filter(
          (patient) => patient.id !== action.payload.id
        ),
      };

    default:
      // For any unknown action (including Redux's own init action)
      // return the current state unchanged.
      return state;
  }
};

export default reducer;