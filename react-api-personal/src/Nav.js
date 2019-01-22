import React from 'react'
import { Link } from 'react-router-dom'
import './assets/styles/Nav.css'

function Nav({ details }) {
    // const links = details.map((detail, i) => (
    //     <Link key={i} to={{ pathname: `/mission/${i}`, state: detail }}>{detail.mission_name}</Link>
    // ))

    return (
        <nav className="nav">
            <Link to='/'>Home</Link>
            <Link to='/all_missions'>All Missions</Link>
            {/* {links} */}
        </nav>
    )
}

export default Nav
