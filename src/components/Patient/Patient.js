import React from 'react'
import logo from '../../images/caringHeartsImg.png'
import newClientPacket from '../../images/newClientPacket.pdf'
import { Link } from 'react-router-dom'
import './Patient.scss'

const Patient = () => {
    return (
        <main className="patient-container">
            
            <section>
                <h1>New Client Info</h1>
                <p>Please print and fill out the Client Care Plan to get started. If you have any questions give us a call.</p>
                <a target="_blank" rel="noopener noreferrer" href={newClientPacket}><button className=" one mainBtn">Client Care Plan</button></a>
                <Link to="/contact-us"><button className=' two mainBtn'><strong>Contact Us</strong></button></Link>
            </section>
            <img src={logo} alt="narf logo"/>
        </main>
    )
}

export default Patient