import React, { Component } from "react"




class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            image: "http://i.imgflip.com/1bij.jpg",
            allMemesImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})

    }


    handleSubmit(event) {
        event.preventDefault()

        const min = 0;
        const max = this.state.allMemesImgs.length - 1;
        const rand = Number(min + Math.random() * (max - min)).toFixed(0)
        this.setState({image: this.state.allMemesImgs[rand].url})

        
    }


componentDidMount() {
    fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then(response => {
            // console.log(response.data.memes)
            this.setState({allMemesImgs: response.data.memes})
})
}


    render() {
        return (
            <div>
                <form className="meme-form"
                    onSubmit={
                        this.handleSubmit
                }>



                    <input name="topText"
                        value={
                            this.state.topText
                        }
                        placeholder="Top Line"
                        onChange={
                            this.handleChange
                        }/>
                    <input name="bottomText"
                        value={
                            this.state.bottomText
                        }
                        placeholder="Bottom Line"
                        onChange={
                            this.handleChange
                        }/>


                    <button>Gen</button>
                </form>
                
                <div className="meme">
                    <img src={this.state.image} alt=""/>
                    <h2 className="top"> {this.state.topText}</h2>
                    <h2 className="bottom"> {this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}



export default MemeGenerator