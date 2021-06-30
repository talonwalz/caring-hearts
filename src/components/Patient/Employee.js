import React from 'react'
import logo from '../../images/caringHeartsImg.png'
import newEmployeePacket from '../../images/newEmployeePacket2020.pdf'
import pcsNotes from '../../images/PCSNotes.png'
import { Link } from 'react-router-dom'
import './Employee.scss'

const Patient = () => {
    return (
        <main className="employee-container">
            
            <section>
                <h1>New Employee Info</h1>
                <p>Please print and fill out the Employee Packet to get started. If you have any questions give us a call.</p>
                <a target="_blank" rel="noopener noreferrer" href={newEmployeePacket}><button className=" one mainBtn">Employee Packet</button></a>
                <a target="_blank" rel="noopener noreferrer" href={pcsNotes}><button className=" two mainBtn">Progress Notes</button></a>
                <Link to="/contact-us"><button className=' three mainBtn'><strong>Contact Us</strong></button></Link>
            </section>
            <img src={logo} alt="narf logo"/>
        </main>
    )
}

export default Patient