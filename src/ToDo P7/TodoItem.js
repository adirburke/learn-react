import React, { Component } from 'react'

class TodoItem extends Component {

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }

        return (
            <div className="todo-item">
                <input onChange={() => this.props.handleChange(this.props.item.id)} type="checkbox"
                    checked={
                        this.props.item.completed
                    }/>
                <p style={this.props.item.completed ? completedStyle : null }>{
                    this.props.item.text
                }</p>
            </div>
        )
    }
}





export default TodoItem