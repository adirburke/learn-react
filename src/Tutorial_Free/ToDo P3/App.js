import React from 'react'
import './app.css'
import TodoItem from './TodoItem'
import todoData from './todoData'


function App() {
    const todoItems = todoData.map ( item => <TodoItem key={item.id} item={item} />)

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App