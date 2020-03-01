import React, { Component } from 'react'

class Conditional extends Component {

    render() {
        console.log(this.props.isLoading)
        return (
            <div>
                {this.props.isLoading ? <h1>Hi</h1> : <h1>Bye</h1>}
            </div>
        )
    }
}




export default Conditional