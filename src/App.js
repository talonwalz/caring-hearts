import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import axios from 'axios'
import routes from './Routes'
import Nav from './components/Header/Nav'
import './components/Header/Nav.scss'
// import { updateUser } from './Redux/reducers/userReducer'
// import { connect } from 'react-redux'
import { Component } from 'react';
import './App.scss';

class App extends Component {

  componentDidMount() {
    axios
      .get('/auth/session')
      .then(res => {
        this.props.updateUser(res.data)
      })
  }

  render() {
    
    return (
      <div className="App">
        <Header />
        <section className='nav-section'>
            <Nav />
        </section>
        {routes}
        <Footer />
      </div>
    );
    }
}
export default App;
// export default connect(null, {updateUser})(App);