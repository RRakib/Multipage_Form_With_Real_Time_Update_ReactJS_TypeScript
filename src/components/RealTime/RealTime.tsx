import {connect} from "react-redux"
import React , {Component} from 'react'
import {IRealTimeProps} from './IRealTimeProps'
import {IRealTimeState} from './IRealTimeState'

class RealTime extends Component<IRealTimeProps, IRealTimeState>{
    constructor(props: IRealTimeProps){
        super(props)
        this.state = {
        }
    }
    render(){
        console.log(this.props)
        const {firstName, lastName, middleName, age, university, github, profession, yOe} = this.props.state.mainStore
        return(
            <div className="pages">
                <h3>Real Time Update</h3>
                <div className="realTimeContainer">
                    {firstName? <>
                        {firstName && middleName && lastName && <div className="cards">
                        <h4>Full Name</h4>
                        {firstName +" "+ middleName +" "+ lastName}
                    </div>}
                    {age? <div className="cards">
                        <h4>Age</h4>
                        {age}
                    </div> : null}
                    {university? <div className="cards">
                        <h4>University</h4>
                        {university}
                    </div> : null}
                    {profession? <div className="cards">
                        <h4>Profession</h4>
                        {profession}
                    </div> : null}
                    {github? <div className="cards">
                        <h4>Github</h4>
                        {github}
                    </div> : null}
                    {yOe? <div className="cards">
                        <h4>Years of Experience</h4>
                        {yOe}
                    </div> : null}</> : <div className='subReal'><i className="fab fa-audible"></i></div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state : object) => ({
    state : state
  })
  

export default connect(mapStateToProps)(RealTime)