import React from 'react'
import image from '../../images/caringHeartsImg.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './Header.scss'

const Header = () => {

    return (
        <nav>
        <header className="header-container">
            <Link to="/" style={{textDecoration: "none"}} className="left">
            <img src={image} alt="Caring Hearts logo"/>
            </Link>
            <section className="middle">
                <p>Caring Hearts of Utah</p>
                <p className="phone">(801) 471-5059</p>
            </section>
            <section className="right">
                <div className="links">
                <Link to="/patient-feedback"><button className='btn1 mainBtn'><strong>Give Feedback</strong></button></Link>
                <Link to="/covid-info"><button className='btn2 mainBtn'><strong>Covid Updates</strong></button></Link>
                <Link to="/contact-us"><button className=' btn3 mainBtn'><strong>Contact Us</strong></button></Link>
                </div>
            </section>           
        </header>
        </nav>
    )
}

export default Header