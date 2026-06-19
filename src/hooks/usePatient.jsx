import { useSelector, useDispatch } from 'react-redux';
import { addPatient, deletePatient } from '../redux/actions';

const usePatient = () => {
  const patients = useSelector((state) => state.patients);

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
