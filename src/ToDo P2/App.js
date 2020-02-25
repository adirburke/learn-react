import React from 'react'
import './app.css'
import TodoItem from './TodoItem'


function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App