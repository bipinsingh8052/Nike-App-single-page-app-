import React from 'react'
import '../style/navbar.css'
export default function Navbar() {
  return (
   <header className='container-fluid'>
    <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Old_Nike_logo.jpg" alt="logo" />
    </div>
    <div className="menu">
        <ul>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Location</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </div>
    <div className="sign">
        <button>Login</button>
    </div>
   </header>
  )
}
