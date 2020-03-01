import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"


function App() {

    const [count, setCount] = useState(0)
    const [colour, setColor] = useState('')

    // useEffect(() => {
    //     const newColour = randomcolor()

    //     setColour(newColour)

    // }, [count])


    // Only done once when mounted
    useEffect(()=> {
        const internalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return () =>
            clearInterval(internalId)
        
    },[])

    useEffect(() => {

        
        setColor(randomcolor())
    }, [count])

    return (
        <div>
            <h1 style={
                {color: colour}
            }>
                {count}</h1>
            <button onClick={
                () => setCount(count + 1)
            }>Increment!</button>
            <button onClick={
                () => setCount(count - 1)
            }>Decrement!</button>
        </div>
    )
}


export default App
