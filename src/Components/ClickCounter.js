import React from 'react'
import Counts from'./Counts'

class ClickCounter extends React.Component {

    state = {
        count: 0,
        previousCounts: [],
    }

    clickHandler = () => {
        this.setState({count: this.state.count + 1})
    }

    resetHandler = () => {
        const previousCounts = this.state.previousCounts
        previousCounts.push(this.state.count)
        this.setState({count: 0, previousCounts})
    }
   render(){
       return (
           <>
           <button onClick={this.clickHandler}>Click Me!!!</button>
           <br/>
           <p>{this.state.count}</p>
           <br/>
           <button onClick={this.resetHandler}>Reset Me!!!</button>
           <Counts previousCounts={this.state.previousCounts}/>

           </>
       )
   }
}

export default ClickCounter;