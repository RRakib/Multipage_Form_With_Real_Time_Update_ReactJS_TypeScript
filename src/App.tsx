import './App.css';
import React , {useState} from 'react';
import RealTime from "./components/RealTime/RealTime"
import FirstPage from "./components/Pages/FirstPage/firstPage"
import SecondPage from "./components/Pages/SecondPage/secondPage"

function App() {
  const [state, setState] = useState({
    next: false,
    prev: true
  })

  const handleClickNext = () => {
    setState((prevState) => ({
      ...prevState,
      next: true,
      prev: false
    }))
  }
  const handleClickPrev = () => {
    setState((prevState) => ({
      ...prevState,
      prev: true,
      next: false
    }))
  }

  console.log(state)
  
  return (
    <div className="App">
      <div className="multipageForm">
        <div className="pages">
          <h3><i className="fas fa-user-tie" style={{color: 'purple', marginRight : 7, fontSize: 20}}></i>Your Personal Information</h3>
          
          <div id='pages'>
          {/* FirstPage Component */}
            {state.prev? <FirstPage /> : null}
          {/* FirstPage Component END*/}

          {/* FirstPage Component */}
            {state.next? <SecondPage /> : null}
          {/* FirstPage Component END*/}
          </div>

          <div className="buttonContainer">
            <button onClick={handleClickPrev}><i className="fas fa-angle-left"></i>Prev</button>
            <button onClick={handleClickNext}>Next<i className="fas fa-angle-right"></i></button>
          </div>
        </div>

        {/* RealTime Component */}
          <RealTime />
        {/* RealTime Component END*/}

      </div>
    </div>
  );
}

export default App;
