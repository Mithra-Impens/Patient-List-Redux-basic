import { useSelector, useDispatch } from 'react-redux';
import { addPatient, deletePatient } from '../features/patientSlice';

const usePatient = () => {
  const patients = useSelector((state) => state.patient.patients);
  const dispatch = useDispatch();

  const handleAddPatient = (name) => {
    dispatch(addPatient(name));       
  };

  const handleDeletePatient = (id) => {
    dispatch(deletePatient(id));     
  };

  return {
    patients,
    addPatient: handleAddPatient,
    deletePatient: handleDeletePatient,
  };
};

export default usePatient;
