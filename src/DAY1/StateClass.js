import React, { Component } from 'react';
class Statecompo extends Component {
    constructor() {
        super();
        this.state = {
            msg: 'hello i have learn state'
        }
    }
    update() {
        this.setState({
            msg: 'hi i am here'
        })
    }

    render() {
        return (
            <>
                <h3>{this.state.msg}</h3>
                <button onClick={() => { this.update() }}>click here</button>
            </>
        )
    }
} export default Statecompo