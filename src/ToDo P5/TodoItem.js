import React, { Component } from 'react'

class TodoItem extends Component {

handleClick() {

    console.log("Hellow Worlds")
}

    render() {
        return (
            <div className="todo-item">
                <input onChange={this.handleClick} type="checkbox"
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