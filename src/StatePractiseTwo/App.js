import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div>
                <h1>This user is logged {this.state.isLoggedIn ? "In" : "Out"}</h1>
            </div>
        )
    }
}

export default App