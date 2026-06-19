import React, { useState } from 'react';
import usePatient from '../hooks/usePatient';

const AddPatient = () => {
  const [name, setName] = useState('');
  const { addPatient } = usePatient();

  const handleSubmit = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    addPatient(trimmed);
    setName('');
  };

  return (
    <div className="card">
      <h2>Add Patient</h2>
      <div className="add-patient-form">
        <input
          type="text"
          placeholder="Enter patient name"
          value={name}
          onChange={(e) => setName(e.target.value)}         
        />
        <button className="btn-add" onClick={handleSubmit}>
          Add Patient
        </button>
      </div>
    </div>
  );
};

export default AddPatient;