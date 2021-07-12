import React from 'react'
import logo from '../../images/caringHeartsImg.png'
import './About.scss'

const About = () => {
    return (
        <main className="about-container"> 
            <img src={logo} alt="logo" />
            <section>
                {/* <h1>Professionalizing in personalized full time In-Home care. Let your loved ones avoid the chaos of assisted living centers and give them the care they need in the comfort of their own homes.</h1> */}
                <br/>
                <h1>With decades of experience we are a proven source for full-time live-in care. We thrive on helping your loved ones live their best lives at home, it’s what we do.</h1>
                <br/>
            </section>  
        </main>
    )
}

export default About