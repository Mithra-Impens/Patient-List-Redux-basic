import React from 'react';
import AddPatient from './components/AddPatient';
import PatientList from './components/PatientList';
import './App.css';

const App = () => {
  return (
      <div className="app-page">

        <header className="app-header">
          <h1>Patient List Management</h1>
        </header>

        <main className="app-main">
          <AddPatient />
          <PatientList />
        </main>

      </div>
  );
};

export default App;
