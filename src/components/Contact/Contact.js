import React, {useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss'
// import axios from 'axios'

const Contact = () => {
    const [ date, setDate ] = useState(new Date().toDateString())
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ message, setMessage ] = useState('')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        emailjs.sendForm('gmail', 'template_i4h5wtl', form.current, 'user_xEWI2orbMXf48SBIwv08s')
          .then((result) => {
              console.log(result.text);
              clearForm();
              confirmation();
          }, (error) => {
              failed();
              console.log(error.text);
          });
      };
      const clearForm = () => {
        setName('');
        setPhone('');
        setMessage('');
      }
      const confirmation = () => {
        toast.success('Message Sent', {
          theme: 'colored',
          autoClose: 2500
        })
      }
      const failed = () => {
        toast.error('Message failed to send!',{
          theme: 'colored'
        })
      }

    // function sendText() {

    //         axios.post('/api/send-text', { name, phone, message})
    //         .then(res => {
    //             console.log(res.data)
    //             notifySuccess(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             notifyWarning(err.response.data)
    //         })
    //         setName('')
    //         setPhone('')
    //         setMessage('')

    // }

    // function notifyWarning(msg) {
    //     toast.error(msg, {
    //         position: "bottom-center",
    //         autoClose: 4000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     })
    // }

    // function notifySuccess(msg) {
    //     toast.success(msg, {
    //         position: "bottom-center",
    //         autoClose: 4000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     }) 
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
                        <h2>Sunday</h2>
                    </div>
                    <div>
                        <h2>24-hours</h2>
                        <h2>24-hours</h2>
                        <h2>24-hours</h2>
                        <h2>24-hours</h2>
                        <h2>24-hours</h2>
                        <h2>24-hours</h2>
                        <h2>24-hours</h2>
                    </div>
                </section>
            </article>
            <h1>Send Us A Message To Get Started!</h1>
            <form id="get-started" ref={form} className="request-info" onSubmit={sendEmail}>   
                <div className="input-box">
                    <div className="inputs">
                    <label >Name: </label>
                    <input id="name" name="name" placeholder="name" value={name}onChange={e => setName(e.target.value)} required/>
                    </div>
                </div>
                <div className="input-box">
                    {/* <label htmlFor="tel">ex: 928-649-9726</label> */}
                    <div className="inputs">
                    <label>Phone #: </label>
                    <input placeholder="phone number" name="phone" type="tel" id="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={phone} onChange={e => setPhone(e.target.value)} required minLength={9}/>
                    </div>
                    <input  type="hidden" placeholder="date" name="date" value={date} onChange={e=>setDate(e.target.value)} required/>
                </div> 
                <div className="inputs">
                <label className="message">Message: </label>          
                <textarea placeholder="ask any specific questions here..." name="message" value={message} onChange={e => setMessage(e.target.value)} required/>
                </div> 
                <button type="submit"  className="mainBtn">Submit</button>
                {/* <button type="submit"  className="mainBtn" onClick={sendText}>Submit</button> */}

            </form>
            </section>
            <ToastContainer />
        </main>
    )
}

export default Contact