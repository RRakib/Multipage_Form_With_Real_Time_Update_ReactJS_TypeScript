import React, {Component} from "react"
import {ISecondPageProps} from "./ISecondPageProps"
import {ISecondPageState} from "./ISecondPageState"

class SecondPage extends Component<ISecondPageProps, ISecondPageState>{
    constructor(props: ISecondPageProps){
        super(props)
        this.state = {}
    }
    render(){
        return(
          <>
            <div className="fields">
              <p>University</p>
              <input 
                placeholder="Enter Your University Name"
              />
            </div>
            <div className="fields">
              <p>Profession</p>
              <input 
                placeholder="Enter Your Profession"
              />
            </div>
            <div className="fields">
              <p>GitHub Profile</p>
              <input 
                placeholder="Enter Your Github Link"
              />
            </div>
            <div className="fields">
              <p>Years Of Experience</p>
              <input 
                placeholder="Enter How Many Years of Experience You Have"
              />
            </div>
          </>
        )
    }
}

export default SecondPage