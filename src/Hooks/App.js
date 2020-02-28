import React, { useState } from "react"


function App() {
    const [answer] = useState("Yes")

    return (
        <div>
            Is State import to know? {answer}
        </div>
    )
}

export default App