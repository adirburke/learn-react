import React from 'react'
import ContactCard from './ContactCard.js'

function App() {
    return (
        <div className='contacts'>
            <ContactCard 
            contact={{name: "Name A", url: "http://placekitten.com/300/200", phone:"0404 044 040", email:"a@a.com"}}/>
            <ContactCard contact={{name: "Name B", url: "http://placekitten.com/200/200", phone:"0404 044 040", email:"a@a.com"}}/>
            <ContactCard contact={{name: "Name C", url: "http://placekitten.com/300/100", phone:"0404 044 040", email:"a@a.com"}}/>
        </div>
    )
}

export default App