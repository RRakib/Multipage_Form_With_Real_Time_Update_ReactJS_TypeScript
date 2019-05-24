import React, {Component} from "react"
import {ISecondPageProps} from "./ISecondPageProps"
import {ISecondPageState} from "./ISecondPageState"

class SecondPage extends Component<ISecondPageProps, ISecondPageState>{
    constructor(props: ISecondPageProps){
        super(props)
        this.state = {}
    }
    render(){
      const {university, github, profession, yOe} = this.props
        return(
          <div>
            <div className="fields">
              <p>University</p>
              <input 
                value={university}
                name = "university"
                onChange={this.props.handleChange}
                placeholder="Enter Your University Name"
              />
            </div>
            <div className="fields">
              <p>Profession</p>
              <input 
                value={profession}
                name = "profession"
                onChange={this.props.handleChange}
                placeholder="Enter Your Profession"
              />
            </div>
            <div className="fields">
              <p>GitHub Profile</p>
              <input 
                value={github}
                name = "github"
                onChange={this.props.handleChange}
                placeholder="Enter Your Github Link"
              />
            </div>
            <div className="fields">
              <p>Years Of Experience</p>
              <input 
                value={yOe}
                name = "yOe"
                onChange={this.props.handleChange}
                placeholder="Enter How Many Years of Experience You Have"
              />
            </div>
          </div>
        )
    }
}

export default SecondPage