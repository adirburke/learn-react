import React from "react"
import Card from "./Card"

function App() {
    return (
        <div>
            <Card cardColor="red" height={150} width={150} />
            <Card />
            <Card cardColor="green" />
        </div>
    )
}

export default App