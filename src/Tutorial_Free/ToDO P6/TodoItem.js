import React, { Component } from 'react'

class TodoItem extends Component {

    render() {
        return (
            <div className="todo-item">
                <input onChange={() => this.props.handleChange(this.props.item.id)} type="checkbox"
                    checked={
                        this.props.item.completed
                    }/>
                <p>{
                    this.props.item.text
                }</p>
            </div>
        )
    }
}





export default TodoItem