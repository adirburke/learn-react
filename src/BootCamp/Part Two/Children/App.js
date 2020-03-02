import React from "react"
import CTA from "./CTA"

function App() {
    return (
        <div>
            <CTA>
                <h1>This is an important CTA</h1>
                <button>Click me now or you'll miss out!</button>  
            </CTA>

            <CTA>
                <input type="email" placeholder="EnterEmail Address"/>
                <br/>
                <button>Submit</button>
            </CTA>
        </div>
    )
}

export default App