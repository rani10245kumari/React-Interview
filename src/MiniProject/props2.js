import React, { Component } from "react";
class CounterApp extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }
}

export default CounterApp;