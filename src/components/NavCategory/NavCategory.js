import React from 'react'
import { Title } from '../Title'

const NavCategory = () => (
  <nav className="nav-categories">
    <Title />

    <ul className="nav-menu">
      <li className="active">
        <a href="#channels">Channels</a>
      </li>
      <li>
        <a href="#dialer">Dialer</a>
      </li>
      <li>
        <a href="#optimization">Optimization</a>
      </li>
      <li>
        <a href="#voice">Voice Analytics</a>
      </li>
    </ul>
  </nav>
)

export default NavCategory
