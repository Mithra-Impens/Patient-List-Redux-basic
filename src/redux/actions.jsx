export const ADD_PATIENT = 'ADD_PATIENT';
export const DELETE_PATIENT = 'DELETE_PATIENT';

export const addPatient = (name) => ({
  type: ADD_PATIENT,
  payload: {
    id: Date.now(),   
    name,             
  },
});

export const deletePatient = (id) => ({
  type: DELETE_PATIENT,
  payload: { id },
});
