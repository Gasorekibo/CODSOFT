import "./Navbar.css"

import React from 'react'

function Navbar() {
  return (
    <div className="container">
    <div className="navbar">
    <h2>JObBoard</h2>
      <nav>
      <ul>
      <li><a href="#">Find Work</a></li>
      <li><a href="#">Applications</a></li>
      <li><a href="#">UpSkills</a></li>
      <li><a href="#">Post Job</a></li>
      </ul>
      </nav>
      <button>Login</button>
    </div>
    </div>
  )
}

export default Navbar