import React, {Component} from "react"
import FormComponent from './FormComponent'

class Form extends Component {
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
           <FormComponent state={this.state} handleChange={this.handleChange}/>
        )
    }
}

export default Form
