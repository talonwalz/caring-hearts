import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import image from '../../images/caringHeartsImg.png'
import './EmployeeAuth.scss'

const Auth = (props) => {

    const [ pin, setPin ] = useState('')

    function enter() {
        const {history} = props;

        if (pin === '1234') {
            history.push('/employee-info')
        } else {
            notifyWarning('Incorrect Pin')
            setPin('')
        }
            
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

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            enter()
        }
    }


    return (
       
        <section className="employeeAuth-container">
             <ToastContainer />
            <p>Must be an employee to login</p>
            <div className="outerDiv">
                <input value={pin} type="password" placeholder="password" onChange={e => setPin(e.target.value)} onKeyPress={handleKeyPress}/>
                <div className="innerDiv">
                    <button className="altBtn" onClick={enter}>Enter</button>
                </div>
                <img src={image} alt="Caring Hearts logo"/>
            </div>
        </section>
    )
}

export default Auth