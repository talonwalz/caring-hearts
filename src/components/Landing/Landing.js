import React from 'react'
import About from './About'
import './Landing.scss'
import Carousel from './Slider'

const Landing = () => {
    return (
        <main className="landing">
            <Carousel/>
            <About />
        </main>
        
        
    )
}

export default Landing