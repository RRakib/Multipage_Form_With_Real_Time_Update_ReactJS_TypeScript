import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="multipageForm">
        <div className="pages">
          <h3><i className="fas fa-user-tie" style={{color: 'purple', marginRight : 7, fontSize: 20}}></i>Your Personal Information</h3>
          <div className="fields">
            <p>First Name</p>
            <input 
              placeholder="Enter Your First Name"
            />
          </div>
          <div className="fields">
            <p>Middle Name</p>
            <input 
              placeholder="Enter Your Middle Name"
            />
          </div>
          <div className="fields">
            <p>Last Name</p>
            <input 
              placeholder="Enter Your Last Name"
            />
          </div>
          <div className="buttonContainer">
            <button><i className="fas fa-angle-left"></i>Prev</button>
            <button>Next<i className="fas fa-angle-right"></i></button>
          </div>
        </div>
        <div className="pages">
          <h3>Real Time Update</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
