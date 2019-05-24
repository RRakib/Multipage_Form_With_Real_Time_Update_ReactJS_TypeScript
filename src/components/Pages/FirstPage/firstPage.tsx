import React, {Component} from "react"
import {IFirstPageProps} from "./IFirstPageProps"
import {IFirstPageState} from "./IFirstPageState"

class FirstPage extends Component<IFirstPageProps, IFirstPageState>{
    constructor(props: IFirstPageProps){
        super(props)
        this.state = {}
    }
    render(){
      const {firstName, lastName, middleName, age} = this.props
        return(
          <div>
            <div className="fields">
              <p>First Name</p>
              <input 
                value={firstName}
                name="firstName"
                onChange={this.props.handleChange}
                placeholder="Enter Your First Name"
              />
            </div>
            <div className="fields">
              <p>Middle Name</p>
              <input 
                value={middleName}
                name="middleName"
                onChange={this.props.handleChange}
                placeholder="Enter Your Middle Name"
              />
            </div>
            <div className="fields">
              <p>Last Name</p>
              <input 
                value={lastName}
                name="lastName"
                onChange={this.props.handleChange}
                placeholder="Enter Your Last Name"
              />
            </div>
            <div className="fields">
              <p>Age</p>
              <input 
                value={age}
                name="age"
                onChange={this.props.handleChange}
                placeholder="Enter Your Age"
              />
            </div>
          </div>
        )
    }
}

export default FirstPage