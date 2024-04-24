import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataFormulir() {
  const [npm, setNpm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && birthdate) {
      setShowModal(true);
    } else {
      alert('Harap isi semua field yang wajib diisi.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="text-center mb-4">Example Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="npm" className="form-label">NPM:</label>
              <input type="number" id="npm" name="npm" className="form-control" pattern="[0-9]*" value={npm} onChange={(e) => setNpm(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">First Name:</label>
              <input type="text" id="fname" name="fname" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="mname" className="form-label">Middle Name:</label>
              <input type="text" id="mname" name="mname" className="form-control" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label">Last Name:</label>
              <input type="text" id="lname" name="lname" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="birthdate" className="form-label">Tanggal Lahir:</label>
              <input type="date" id="birthdate" name="birthdate" className="form-control" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </header>

      {/* Modal */}
      {showModal &&
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Data</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>NPM: {npm}</p>
                <p>Full Name: {firstName} {middleName} {lastName}</p>
                <p>Age: {calculateAge(birthdate)}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

// Fungsi untuk menghitung usia berdasarkan tanggal lahir
function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default DataFormulir;