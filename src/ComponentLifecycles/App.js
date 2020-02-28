import React from 'react'


class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        // ViewDidLoad
        //  -- API CALLS

    }


    shouldComponentUpdate(nextProps, nextState) {
        //return true to update

    }

    componentWillUnmount() {
       //Cleanup or teardown
       
       // -- Remove event listener
    }


    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
          // return the new, updated state based upon the props
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
    }

    //DEPERCATED
    componentWillReceiveProps(nextProps) {
        // if nextProps != this.probs
    }

    componentWillUpdate () {

    }

    componentWillMount() {

    }
    render() {

        return (
            <div>
                <h1>Code goes here</h1>
            </div>
        )
    }
}

export default App