import { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser, logoutUser } from '../../Redux/reducers/userReducer'
import image from '../../images/caringHeartsImg.png'
import './Auth.scss'

const Auth = (props) => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ admin, setAdmin ] = useState(false)

    useEffect(() => {
        const {userReducer} = props
        if (userReducer.user) {
            setAdmin(true)   
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function loginUser() {
        const {userReducer,history} = props
            if (userReducer.user) {
                history.push('/admin')
            } else {
                axios.post('/auth/login', {username, password})
                .then(res => {
                    props.updateUser(res.data)
                    props.history.push('/admin')
                })
            .catch(err => {
                alert('Invalid Login')
            })
        }  
    }  

    function registerUser() {
        axios.post('/auth/register', {username, password})
        .then(res => {
            props.updateUser(res.data)
            props.history.push('/admin')
        })
        .catch(err => console.log(err))
    }

    function logoutUser() {
        axios.delete('/auth/logout')
        .then(() => {
            props.logoutUser()
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            loginUser()
        }
    }


    return (
       
        <section className="auth-container">
            <p>Must be an employee to login</p>
            <div>
            <input value={username}  placeholder="username" onChange={e => setUsername(e.target.value)}/>
            <input value={password} type="password" placeholder="password" onChange={e => setPassword(e.target.value)} onKeyPress={handleKeyPress}/>
            <div>
            <button className="altBtn" onClick={loginUser}>Login</button>
            <button className="altBtn" onClick={logoutUser}>Logout</button>
            {admin ? <button className="altBtn" onClick={registerUser}>Register</button> : null }
            </div>
            <img src={image} alt="Caring Hearts logo"/>
            </div>
        </section>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, { updateUser, logoutUser })(Auth)