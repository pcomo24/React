import React, { Component } from 'react';




class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {id: 1, name: 'Pauaul', age: 26},
            {id: 2, name: 'Jeff', age: 23},
            {id: 3, name: 'Sandy', age: 20}
    }

    render() {
        return (
            <ul>

                <li key={this.state.id}>{'name: ' + this.state.name + ', ' + 'age: ' + this.state.age}</li>
                <li>{this.state.name}</li>
                <li>{this.state.name}</li>
            </ul>
        )
    }
}

export default Hello;