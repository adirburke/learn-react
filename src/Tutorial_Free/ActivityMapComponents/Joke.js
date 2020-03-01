import React from 'react'

function Joke(props) {

    const style = {
        display: "block",
    }
    if (props.joke.question == null) {
        style.display = "none"
    } 

    return (
        <div className="joke">
            <h3 style={style}>Question: {props.joke.question}</h3>
            <p>Answer: {props.joke.answer}</p>
            <br></br>
        </div>
    )
}


export default Joke