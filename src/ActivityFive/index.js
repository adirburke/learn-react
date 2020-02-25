import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    const firstName = "Adir"
    const lastName = "Burke"

    const date = new Date()
    const hours = date.getHours()
    let timeofDay



    const style = {
        backgroundColor: "red",
        fontSize: "30px",
    }

    if (hours < 12) {
        timeofDay = "Mornings"
        style.color = "green"
    } else {
        timeofDay = "Evening"
        style.color = "purple"
    }

    return (
        <div>
        <h1 style={style}>{`${timeofDay} ${firstName} ${lastName}`}</h1>


        </div>
    )


}

ReactDOM.render(<App />, document.getElementById('root'))