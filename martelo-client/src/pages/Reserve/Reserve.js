import React from 'react'
import "../Reserve/Reserve.css"
import NavbarPrivate from '../../components/Navbar/NavbarPrivate.js'
import { Link } from 'react-router-dom'

const Reserve = () => {
  return (
    <div>
      <div>
        <NavbarPrivate />
      </div>
      <div className="routes-in-page">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="home">HOME /</li>
          </Link>
          <Link to="/reservar" style={{ textDecoration: "none" }}>
            <li className="home"> QUERO ALUGAR</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Reserve