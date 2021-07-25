import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addTodo(this.state);

        // ? membersihkan input dari nilai yang telah diinput const [state, dispatch] = useReducer(reducer, initialState, init)
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        );
    }
}

export default AddTodo;
