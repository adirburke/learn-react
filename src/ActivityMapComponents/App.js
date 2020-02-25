import React from 'react'
import Joke from './Joke.js'
import jokesData from './jokesData'

function App() {
    const jokes = jokesData.map(joke =><Joke key={joke.id} joke={joke}/>)

    return (
        <div>
            {jokes}
        </div>
    )
}


export default App