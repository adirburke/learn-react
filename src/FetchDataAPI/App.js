import React from 'react'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        console.log("Hello")
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1").then(response => response.json()).then(data => {
            console.log(data)
            this.setState({character: data, loading: false})
        })
    }

    render() {
        return (
            <div>
                <h1>{
                    this.state.loading ? "Loading" : this.state.character.name
                }</h1>

            </div>
        )
    }
}


export default App