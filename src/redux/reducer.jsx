import { ADD_PATIENT, DELETE_PATIENT } from './actions';

const initialState = {
  patients: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PATIENT:
    
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };

    case DELETE_PATIENT:
     
      return {
        ...state,
        patients: state.patients.filter(
          (patient) => patient.id !== action.payload.id
        ),
      };

    default:
     
      return state;
  }
};

export default reducer;
