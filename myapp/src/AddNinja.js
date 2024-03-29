import React, { Component } from 'react';

export default class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value  
            // * nilai state "name" sama dengan nilai yang diinput user pada kolom input dengan id "name"
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addNinja(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="belt">Belt: </label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
