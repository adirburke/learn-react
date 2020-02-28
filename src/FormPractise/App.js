import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: "",
            gender: '',
            location: '',
            vego: false,
            kosher: false,
            lactose: false


        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {value, name, checked, type} = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name]: value})
    }
    
    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange} value={this.state.firstName}/><br />
                    <input placeholder="Last Name" name="lastName" onChange={this.handleChange} value={this.state.lastName}/><br />
                    <input placeholder="Age" name="age" onChange={this.handleChange} value={this.state.age.value}/><br />
                    
                    {/* Create radio buttons for gender here */}
                    <br />
                    <label htmlFor="">Male</label>
                    <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={this.state.gender === "male"}/>
                    <label htmlFor="">Female</label>
                    <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={this.state.gender === "female"}/>
                    {/* Create select box for location here */}
                    <br />
                    <label htmlFor="">Where are you from:</label>
                    <select name="location" onChange={this.handleChange} value={this.state.location}>
                        <option value="">-- Please Choose this an Option --</option>
                        <option value="AU">Australia</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                    </select>
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    <label htmlFor="">Vego</label>
                    <input type="checkbox" name="vego" onChange={this.handleChange} checked={this.state.vego}/>
                    <label htmlFor="">Kosher</label>
                    <input type="checkbox" name="kosher" onChange={this.handleChange} checked={this.state.kosher}/>
                    <label htmlFor="">Lactose Free</label>
                    <input type="checkbox" name="lactose" onChange={this.handleChange} checked={this.state.lactose}/>
                    <br/>
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.vego && "Vego,"} {this.state.kosher && "Kosher,"} {this.state.lactose && "Lactose Free,"}
                </p>
            </main>
        )
    }
}

export default App
