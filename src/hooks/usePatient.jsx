import { useSelector, useDispatch } from 'react-redux';
import { addPatient, deletePatient } from '../redux/actions';

// ─────────────────────────────────────────
//  Custom Hook: usePatient
// ─────────────────────────────────────────
// This hook encapsulates ALL Redux interaction in one place.
// No component ever needs to import useSelector, useDispatch,
// or the raw action creators — they just call usePatient().
//
// This is the "separation of concerns" principle:
//   • Components handle UI (JSX, local state for form inputs)
//   • usePatient handles data (reading from / writing to Redux)

const usePatient = () => {
  // ── READ ──────────────────────────────────────────────────
  // useSelector subscribes this hook (and any component using it)
  // to the Redux store. The callback receives the FULL state tree
  // and returns only the piece we care about.
  // When state.patients changes, components re-render automatically.
  const patients = useSelector((state) => state.patients);

  // ── WRITE ─────────────────────────────────────────────────
  // useDispatch returns the store's dispatch function.
  // We wrap the raw action creators so callers pass simple
  // arguments (name, id) instead of building action objects.
  const dispatch = useDispatch();

  // Wrap addPatient: caller just passes a name string
  const handleAddPatient = (name) => {
    dispatch(addPatient(name));
  };

  // Wrap deletePatient: caller just passes the patient id
  const handleDeletePatient = (id) => {
    dispatch(deletePatient(id));
  };

  // ── RETURN ────────────────────────────────────────────────
  // Expose exactly what the task specifies:
  //   const { patients, addPatient, deletePatient } = usePatient();
  return {
    patients,
    addPatient: handleAddPatient,
    deletePatient: handleDeletePatient,
  };
};

export default usePatient;