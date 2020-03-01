import React from 'react'


class App extends React.Component {


    handleClick() {
        console.log("I was clicked")
    }

    handleHover() {
        console.log("Entered this area")
    }

    render() {
        return (
            <div>
                <img onMouseEnter={this.handleHover} src="https://www.fillmurray.com/200/100" alt=""/>
                <br/><br/>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default App