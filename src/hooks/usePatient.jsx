import { useSelector, useDispatch } from 'react-redux';
import { addPatient, deletePatient } from '../features/patientSlice';

// ─────────────────────────────────────────
//  Custom Hook: usePatient
// ─────────────────────────────────────────
// Only ONE change from the plain Redux version:
//   BEFORE: imported from '../redux/actions'
//   AFTER:  imported from '../redux/patientSlice'
//
// Everything else is identical — this is the power of the
// custom hook pattern. Components never need to change
// even when the Redux layer underneath is completely rewritten.
//
// Note: state.patient.patients (not state.patients)
// because configureStore registered the slice under key 'patient'
// so the state shape is: { patient: { patients: [] } }

const usePatient = () => {
  const patients = useSelector((state) => state.patient.patients);
  const dispatch = useDispatch();

  const handleAddPatient = (name) => {
    dispatch(addPatient(name));       // payload is just the name string
  };

  const handleDeletePatient = (id) => {
    dispatch(deletePatient(id));      // payload is just the id number
  };

  return {
    patients,
    addPatient: handleAddPatient,
    deletePatient: handleDeletePatient,
  };
};

export default usePatient;