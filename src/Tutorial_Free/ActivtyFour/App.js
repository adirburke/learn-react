import React from 'react'
import './app.css'


function App() {
    return (
        <ul> 
            <li>
                 <input type="checkbox" name="todo" id="1"/> <p>Item 1</p>   
            </li>
            <li>
                 <input type="checkbox" name="todo" id="2"/> <p>Item 2</p>   
            </li>
            <li>
                 <input type="checkbox" name="todo" id="3"/> <p>Item 3</p>   
            </li>
        </ul>
    )
}

export default App