import React from 'react'
import Conditional from "./Conditional.js"


class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {

            this.setState({isLoading: false})
        }, 1500)
    }


    render() {


        return (
            <div>
                <h1>Code goes here</h1>
                <Conditional isLoading={this.state.isLoading} />
            </div>
        )
    }
}

export default App