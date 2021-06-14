import React, {useState } from 'react'
import './Contact.scss'
// import image from '../../images/logoIcon.png'
import image from '../../images/logoIcon.png'

import axios from 'axios'


const Contact = () => {
    const [ date, setDate ] = useState(new Date().toDateString())
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ subject, setSubject ] = useState('')


    // function addRequest() {

    //         // axios.post('/api/email-us', { first, last, phone, message, email, subject})
    //         // // .then(res => console.log(res.data))
            
    //         // .catch(err => console.log(err))
    //         // axios.post('/api/email-from-us', { first, last, email })
    //         emailUs()
    //         emailFromUs()
    //         axios.post('/api/request-info', { first, last, phone, message, date})
    //         .then(res => {
    //             setName('')
    //             setPhone('')
    //             setMessage('')
    //             setEmail('')
    //             setSubject('')
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err))

    // }

    // function emailUs() {
    //     axios.post('/api/email-us', { first, last, phone, message, email, subject})
    //     .then()
    //     .catch(err => console.log(err))
    // }

    // function emailFromUs() {
    //     axios.post('/api/email-from-us', { first, last, email, image })
    //     .then()
    //     .catch(err => console.log(err))
    // }


    return (
        <main className="contact">
            <section className="contact-container">
            <h1>Contact Us</h1>
            <article className="address">    
                <h2>Phone #: (801) 471-5059</h2>
                <h2>Locations: All of Utah</h2>
                <h2>Email: caringhearts.roberts@gmail.com</h2>
            </article>
            <h1>Hours</h1>
            <article className="hours">
                <section>
                    <div>
                        <h2>Monday</h2>
                        <h2>Tuesday</h2>
                        <h2>Wednesday</h2>
                        <h2>Thursday</h2>
                        <h2>Friday</h2>
                        <h2>Saturday</h2>
                        <h2>sunday</h2>
                    </div>
                    <div>
                        <h2>closed</h2>
                        <h2>7:00 AM - 6:00 PM</h2>
                        <h2>7:00 AM - 6:00 PM</h2>
                        <h2>7:00 AM - 6:00 PM</h2>
                        <h2>7:00 AM - 6:00 PM</h2>
                        <h2>closed</h2>
                        <h2>closed</h2>
                    </div>
                </section>
            </article>
            <h1>Request Information</h1>
            <section className="request-info">   
                <div className="input-box">
                    <div className="inputs">
                    <label >Name: </label>
                    <input id="name" placeholder="name" value={name}onChange={e => setName(e.target.value)} required/>
                    </div>
                </div>
                <div className="input-box">
                    {/* <label htmlFor="tel">ex: 928-649-9726</label> */}
                    <div className="inputs">
                    <label>Phone #: </label>
                    <input placeholder="phone number" type="tel" id="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={phone} onChange={e => setPhone(e.target.value)} required minLength={9}/>
                    </div>
                    <input  type="hidden" placeholder="date" value={date} onChange={e=>setDate(e.target.value)} required/>
                </div> 
                <div className="inputs">
                <label className="message">Message: </label>          
                <textarea placeholder="ask any specific questions..." value={message} onChange={e => setMessage(e.target.value)} required/>
                </div> 
                {/* <button className="mainBtn" onClick={addRequest}>Submit</button> */}
            </section>
            </section>
        </main>
    )
}

export default Contact