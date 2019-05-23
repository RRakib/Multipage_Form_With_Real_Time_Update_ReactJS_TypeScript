import {IRealTimeProps} from './IRealTimeProps'
import {IRealTimeState} from './IRealTimeState'
import React , {Component} from 'react'

class RealTime extends Component<IRealTimeProps, IRealTimeState>{
    constructor(props: IRealTimeProps){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className="pages">
                <h3>Real Time Update</h3>
            </div>
        )
    }
}

export default RealTime