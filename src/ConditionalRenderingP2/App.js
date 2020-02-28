import React, {Component} from 'react'
import Conditional from "./Conditional.js"


class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "hello"
            ]
        }
    }
    
    render() {
        return (
            <div>
                {this.state.unreadMessages.length > 0 &&  <h2>You have {this.state.unreadMessages.length} unread messages!</h2>}
            </div>
        )
    }
}

export default App