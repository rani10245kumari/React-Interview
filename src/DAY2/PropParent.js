import React from 'react';
import PropsChild from './Props';
import { Component } from 'react';

class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        const msg = "this is parent component";

        return (
            <div>
                <PropsChild message={msg} value={this.state.count} />

            </div>
        );
    }
}
export default ParentComponent