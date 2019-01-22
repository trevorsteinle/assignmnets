import React from 'react'
// import About from './About';
import './assets/styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="foot">
            {/* <About /> */}
            <Link to='/about'>About</Link>
        </div>
        )
    }
    
    export default Footer
