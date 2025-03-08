import React from 'react'
import { Link } from 'react-router'

const NavigationMenu = () => {
  return (
    <div>
        <div className = "flex justify-around list-none bg-gray-600 p-3 text-white ">
            <Link to="/" className="ml-10"> Home </Link>
            <Link to="/healthtopics"> Health Topics</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/register"> Register</Link>
            <Link to="/login" className='mr-10'> Login </Link>
        </div>
    </div>
  )
}

export default NavigationMenu