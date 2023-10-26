import React, { Component } from 'react'
class PropsChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.value
        }
    }
    render() {
        return (
            <>
                <p>child Component having parent value - {this.props.message}</p>
                <h3>props value:{this.state.counter}</h3>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>increament</button>
            </>
        )
    }
} export default PropsChild


