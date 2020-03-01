import React from "react"

function FormComponent(props) {
    return (
        <main>
        <form>
            <input placeholder="First Name" name="firstName" onChange={props.handleChange} value={props.state.firstName}/><br />
            <input placeholder="Last Name" name="lastName" onChange={props.handleChange} value={props.state.lastName}/><br />
            <input placeholder="Age" name="age" onChange={props.handleChange} value={props.state.age.value}/><br />
            
            {/* Create radio buttons for gender here */}
            <br />
            <label htmlFor="">Male</label>
            <input type="radio" name="gender" value="male" onChange={props.handleChange} checked={props.state.gender === "male"}/>
            <label htmlFor="">Female</label>
            <input type="radio" name="gender" value="female" onChange={props.handleChange} checked={props.state.gender === "female"}/>
            {/* Create select box for location here */}
            <br />
            <label htmlFor="">Where are you from:</label>
            <select name="location" onChange={props.handleChange} value={props.state.location}>
                <option value="">-- Please Choose props an Option --</option>
                <option value="AU">Australia</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
            </select>
            {/* Create check boxes for dietary restrictions here */}
            <br />
            <label htmlFor="">Vego</label>
            <input type="checkbox" name="vego" onChange={props.handleChange} checked={props.state.vego}/>
            <label htmlFor="">Kosher</label>
            <input type="checkbox" name="kosher" onChange={props.handleChange} checked={props.state.kosher}/>
            <label htmlFor="">Lactose Free</label>
            <input type="checkbox" name="lactose" onChange={props.handleChange} checked={props.state.lactose}/>
            <br/>
            <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {props.state.firstName} {props.state.lastName}</p>
        <p>Your age: {props.state.age}</p>
        <p>Your gender: {props.state.gender}</p>
        <p>Your destination: {props.state.location}</p>
        <p>
            Your dietary restrictions: 
            {props.state.vego && "Vego,"} {props.state.kosher && "Kosher,"} {props.state.lactose && "Lactose Free,"}
        </p>
    </main>
    )
}

export default FormComponent