import './App.css'
import { STORE_DATA } from "./Store/Type/type"
import {connect} from "react-redux"
import React , {useState} from 'react'
import "react-step-progress-bar/styles.css"
import {mainAction} from './Store/Action/mainAction'
import RealTime from "./components/RealTime/RealTime"
import { ProgressBar, Step } from 'react-step-progress-bar'
import FirstPage from "./components/Pages/FirstPage/firstPage"
import SecondPage from "./components/Pages/SecondPage/secondPage"

function App(props:any) {
  const [state, setState] = useState({
    age: '',
    progress: 0,
    lastName: '',
    firstName: '',
    nextorprev: 0,
    middleName: '',
    university: '',
    profession : '',
    github : '',
    yOe : ''
  })

  const handleClickNext = () => {
    setState((prevState) => ({
      ...prevState,
      nextorprev: prevState.nextorprev < 2 ? prevState.nextorprev + 1 : prevState.nextorprev,
      progress: prevState.progress !== 100 ? prevState.progress + 50 : prevState.progress
    }))
    const {firstName, lastName, middleName, age, university, profession, github, yOe} = state
    const payload = {firstName, lastName, middleName, age, university,profession, github, yOe}

    const dispatch = props.dispatch
    dispatch(mainAction(STORE_DATA, payload))
  }
  const handleClickPrev = () => {
    setState((prevState) => ({
      ...prevState,
      nextorprev: prevState.nextorprev > 0 ? prevState.nextorprev - 1 : prevState.nextorprev,
      progress: prevState.progress <= 0 ? prevState.progress : prevState.progress - 50
    }))
  }
  const handleChange = (e:any) => {
    const {name, value} : {name : string, value : string} = e.target
    setState((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }

  console.log(props)
  const {firstName, lastName, middleName, age, university, github, profession, yOe} = state
  return (
    <div className="App">
      <div className="multipageForm">
        <div className="pages">
          <h3><i className="fas fa-user-tie" style={{color: '#f0f3ff', marginRight : 7, fontSize: 25}}></i>Your Personal Information</h3>
          
          <div id='pages'>
          <ProgressBar percent={state.progress}>
            <Step>
              {({ accomplished, index } : {accomplished : any , index : any}) => (
                <div
                  className={`indexedStep ${accomplished ? "accomplished" : null}`}
                >
                  {index + 1}
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished, index } : {accomplished : any , index : any}) => (
                <div
                  className={`indexedStep ${accomplished ? "accomplished" : null}`}
                >
                  {index + 1}
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished, index } : {accomplished : any , index : any}) => (
                <div
                  className={`indexedStep ${accomplished ? "accomplished" : null}`}
                >
                  {index + 1}
                </div>
              )}
            </Step>
        </ProgressBar>
          {/* FirstPage Component */}
            {state.nextorprev === 0? <FirstPage 
              handleChange = {handleChange}
              firstName = {firstName}
              lastName = {lastName}
              middleName = {middleName}
              age = {age}
              /> : null}
          {/* FirstPage Component END*/}

          {/* FirstPage Component */}
            {state.nextorprev === 1? <SecondPage 
              handleChange = {handleChange}
              university = {university}
              github = {github}
              profession = {profession}
              yOe = {yOe}
              /> : null}
          {/* FirstPage Component END*/}

          {/* FirstPage Component */}
          {state.nextorprev === 2? <div className="sucess"><h1>You Are Good To Go!</h1></div> : null}
          {/* FirstPage Component END*/}
          </div>

          <div className="buttonContainer">
            <button onClick={handleClickPrev}><i className="fas fa-angle-left"></i>Prev</button>
            <button 
              onClick={handleClickNext}
            >{state.nextorprev > 1? "Finish" : "Next"}<i className="fas fa-angle-right"></i></button>
          </div>
        </div>

        {/* RealTime Component */}
          <RealTime />
        {/* RealTime Component END*/}

      </div>
    </div>
  );
}


const mapStateToProps = (state: any) => (state) 


export default connect(mapStateToProps)(App);
