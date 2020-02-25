import React from 'react'


function App() {
    return (
<div>
    <Nav />
        <h1>
            Hellow World
        </h1>
        <Footer />
</div>
    )
}


function Nav() {
    return (

        <nav>
            <ol>
                <li>Home</li>
                <li>Link 1</li>
                <li>Link 2</li>
            </ol>
        </nav>
    )
}


function Footer() {
    return (
        <footer>
            <h3>Foooterrrrrr</h3>
            <p>This is the footer of the page</p>
        </footer>
    )
}

export default App;