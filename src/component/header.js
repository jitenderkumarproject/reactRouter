import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
    <a href='#'>Logo</a>

    <nav>
        <ul>
           <li>
          <NavLink to = "/">Home</NavLink>
          </li>
          <li>
          <NavLink to = "/About">About</NavLink>
          </li>
          <li>
          <NavLink to = "/Contact">Contact</NavLink>
          </li>
        </ul>
    </nav>
</header>
  )
}

export default Header
