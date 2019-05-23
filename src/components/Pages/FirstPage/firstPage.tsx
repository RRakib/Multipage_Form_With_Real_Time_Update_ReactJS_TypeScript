import React, {Component} from "react"
import {IFirstPageProps} from "./IFirstPageProps"
import {IFirstPageState} from "./IFirstPageState"

class FirstPage extends Component<IFirstPageProps, IFirstPageState>{
    constructor(props: IFirstPageProps){
        super(props)
        this.state = {}
    }
    render(){
        return(
          <>
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
            <div className="fields">
              <p>Age</p>
              <input 
                placeholder="Enter Your Age"
              />
            </div>
          </>
        )
    }
}

export default FirstPage