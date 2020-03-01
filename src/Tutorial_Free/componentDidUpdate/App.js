import React from 'react'
import randomcolor from 'randomcolor'


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            color: "",
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick() { // this.setState({count: this.state.count + 1})
    console.log("Test")
        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("Did Update")
        if (prevState.count !== this.state.count) {
            const newColor = randomcolor()
            console.log(newColor)
            this.setState({color: newColor})
        }
    }

    componentDidMount() {
        console.log("Mounted")
    }

    render() {
        console.log("Render")
        return (
            <div>
                <h1 style={{color: this.state.color}}>{
                    this.state.count
                }</h1>
                <button onClick={() => this.handleClick() }>Change!</button>
            </div>
        )
    }
}


export default App