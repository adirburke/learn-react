import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: true,
            gender: '',
            favColor: 'blue'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target // Syntheric Events
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})

    }


    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={
                        this.state.firstName
                    }
                    name="firstName"
                    placeholder="First Name"
                    onChange={
                        this.handleChange
                    }/>

                <input type="text"
                    value={
                        this.state.lastName
                    }
                    name="lastName"
                    placeholder="Last Name"
                    onChange={
                        this.handleChange
                    }/> {/* <textarea name="textArea" value={"Some Default value"} /> */}

                <input type="radio" name="gender" value="male"
                    checked={
                        this.state.gender === "male"
                    }
                    onChange={
                        this.handleChange
                    }/>
                <input type="radio" name="gender" value="female"
                    checked={
                        this.state.gender === "female"
                    }
                    onChange={
                        this.handleChange
                    }/>
                <label htmlFor="">Favourite Colour:</label>
                <select name="favColor"
                    value={
                        this.state.favColor
                    }
                    onChange={
                        this.handleChange
                }>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="black">Black</option>
                </select>

                <h1>{
                    this.state.firstName
                }
                    {
                    this.state.lastName
                }
                    {
                    this.state.isFriendly
                }
                    Your geneder is {
                    this.state.gender
                }
                    {
                    this.state.favColor
                }</h1>

            <button>Submit</button>
            </form>
        )
    }
}


export default App

