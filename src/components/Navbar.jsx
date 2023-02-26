import React from 'react'
import './style.css'
import logo from '../assets/logo.svg'

const Navbar = (props) => {
  return (
    <div>
      <header>
        <nav className={props.darkMode ? "dark": ""}>
          <img src={logo} alt="react-logo" />
          <h3 className='header'>ReactFacts</h3>
                <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
      </header>

    </div>
  )
}

export default Navbar