import React, {useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './GetStarted.scss'
import image from '../../images/caringHeartsImg.png'
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
            <h1>Send Us A Message To Get Started!</h1>
            <section id="get-started" className="request-info">   
                <h2>Fill out the information below and we will contact you as soon as possible!</h2>
                <div className="input-box">
                    <div className="inputs">
                    <label >Name: </label>
                    <input id="name" placeholder="full name" value={name}onChange={e => setName(e.target.value)} required/>
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
                <textarea placeholder="ask any specific questions here..." value={message} onChange={e => setMessage(e.target.value)}required/>
                </div> 
                <button className="mainBtn" onClick={sendText}>Submit</button>
            </section>
            <img src={image} alt="Caring Hearts Logo"/>
            </section>
            <ToastContainer />
        </main>
    )
}

export default Contact