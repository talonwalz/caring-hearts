import React, {useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss'
import axios from 'axios'

const Contact = () => {
    const [ date, setDate ] = useState(new Date().toDateString())
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ message, setMessage ] = useState('')

    function sendText() {

            axios.post('/api/send-text', { name, phone, message})
            .then(res => {
                console.log(res.data)
                notifySuccess(res.data)
            })
            .catch(err => {
                console.log(err)
                notifyWarning(err.response.data)
            })
            setName('')
            setPhone('')
            setMessage('')

    }

    function notifyWarning(msg) {
        toast.error(msg, {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    function notifySuccess(msg) {
        toast.success(msg, {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }) 
    }

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
            <h1>Send Us A Message To Get Started!</h1>
            <section id="get-started" className="request-info">   
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
                <textarea placeholder="ask any specific questions here..." value={message} onChange={e => setMessage(e.target.value)} required/>
                </div> 
                <button className="mainBtn" onClick={sendText}>Submit</button>
            </section>
            </section>
            <ToastContainer />
        </main>
    )
}

export default Contact