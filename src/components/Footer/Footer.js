import React from 'react'
import icon from '../../images/icons8-hearts-64white.png'
import { Link } from 'react-router-dom'
import './Footer.scss'

const google = `https://www.google.com/maps/place/Caring+Hearts+of+Utah/@40.1757133,-112.0962297,9z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb937f29d6b30462d!8m2!3d40.1770645!4d-111.5357944?hl=en`

const Footer = () => {
    return (
        
        <header className="footer-container">
        <ul className="left">
                <Link to="/" style={{textDecoration: "none"}}><li>HOME</li></Link>
                <Link to="/our-team" style={{textDecoration: "none"}}><li>OUR TEAM</li></Link>
                <Link to="/our-services" style={{textDecoration: "none"}}><li>SERVICES</li></Link>
                <Link to="/new-patient" style={{textDecoration: "none"}}><li>NEW PATIENT</li></Link>
                <Link to="/contact-us" style={{textDecoration: "none"}}><li>CONTACT US</li></Link>
                {/* <Link to="/auth" style={{textDecoration: "none"}}><li>LOGIN</li></Link> */}
                <Link to="/employee-login" style={{textDecoration: "none"}}><li>EMPLOYEES</li></Link>
            </ul>   
            
            <section className="middle">
                <p>Caring Hearts of Utah</p>
                <p className="phone">(801) 471-5059</p>
            </section>
            <article className="right">
                {/* <Link to="/" style={{textDecoration: "none"}}><img className="footer-logo" src={icon} alt="Caring Hearts logo"/></Link>   */}
                <a href={google} alt="google business"><img className="footer-logo" src={icon} alt="Caring Hearts logo"/></a>  

                
                <div>
                    <a href="https://www.facebook.com/Caring-Hearts-113697130284224/" target="_blank" rel="noopener noreferrer"><img className="fb" src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook link"/></a>
                    {/* <a href={googleReview} target="_blank" rel="noopener noreferrer"><img className="google" src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="google review link"/></a> */}
                </div>
                </article>
        </header>        
    )
}

export default Footer