import React from 'react'
import About from './About'
import './Landing.scss'
import Carousel from './Slider'

const Landing = () => {
    return (
        <main className="landing">
            <h1 className="focal">Excellent in-home care ranging between $12 - $15 per hour</h1>
            <Carousel/>
            <About />
        </main>
        
        
    )
}

export default Landing