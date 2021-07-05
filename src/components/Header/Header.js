import React from 'react'
import image from '../../images/caringHeartsIcon.png'
import { Link } from 'react-router-dom'
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
                <p className="caption">Proudly serving Utah for over 20 years!</p>
                <p className="phone">(801) 471-5059</p>
            </section>
            <section className="right">
                <div className="links">
                <Link to="/contact-us"><button className=' btn1 mainBtn'><strong>Contact Us</strong></button></Link>
                <Link to="/get-started"><button className='btn2 mainBtn'><strong>Let's Get Started!</strong></button></Link>
                <Link to="/employee-login"><button className='btn3 mainBtn'><strong>Employment</strong></button></Link>
                
                </div>
            </section>           
        </header>
        </nav>
    )
}

export default Header