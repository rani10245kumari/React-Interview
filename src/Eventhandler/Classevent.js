import React, { Component } from "react";
class Classeventhandler extends Component {

    eventchange() {
        console.log("namaste")

    }
    render() {
        return (
            <>
                <button onClick={this.eventchange}>Click here</button>
            </>
        )
    }
} export default Classeventhandler