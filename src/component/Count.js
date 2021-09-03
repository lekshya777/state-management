import { Button } from '@material-ui/core'
import React, { Component } from 'react'

export default class Count extends Component {
state={
    counter:0
}
onIncrement=()=>
{
    this.setState(
        {
        counter:this.state.counter+1
        }
    )
}
onDecrement=()=>
{
    this.setState(
        {
        counter:this.state.counter-1
        }
    )
}

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
               <Button 
               onclick={this.onIncrement}
               variant="contained" color="secondary">+</Button> 
               <Button 
               onclick={this.onDecrement}
               variant="contained" color="secondary">-</Button>
            </div>
        )
    }
}
