import React from 'react';
import usePatient from '../hooks/usePatient';

const PatientList = () => {
  const { patients, deletePatient } = usePatient();

  return (
    <div className="card">
      <h2>Patient List</h2>

      {patients.length === 0 ? (
        <p className="empty-text">No patients added yet.</p>
      ) : (
        <ol className="patient-list">
          {patients.map((patient) => (
            <li key={patient.id} className="patient-item">
              <span className="patient-name">{patient.name}</span>
              <button
                className="btn-delete"
                onClick={() => deletePatient(patient.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      )}

      {patients.length > 0 && (
        <p className="patient-count">
          Total patients: <strong>{patients.length}</strong>
        </p>
      )}
    </div>
  );
};

export default PatientList;