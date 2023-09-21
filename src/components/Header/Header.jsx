import React from 'react'
import './Header.css'
import { BsHouseDoor, BsHeart, BsEnvelope } from "react-icons/bs"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header-container">
        <div className="left-header-container">
            <BsHouseDoor className="header-icon" />
            <Link to="/" className="unilife-header-title">UniLife</Link>
        </div>
        <div className="right-header-container">
            <div className="header-link-container">
                <BsHeart className="header-link-icon" />
                <Link className="header-link" to="">Shortlist</Link>
            </div>
            <div className="header-link-container">
                <BsEnvelope className="header-link-icon" />
                <Link className="header-link" to="">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Header