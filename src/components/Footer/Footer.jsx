import React from 'react'
import './Footer.css'
import axios from 'axios'

function Footer() {

    const onEnter = () => {

    }

  return (
    <div className="footer-container">
        <div className="top-footer-container">
            <div className="top-footer-container-left">
                <p className="footer-title">Keep in Touch</p>
                <p className="curious-blurb">Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
                <input type="email" placeholder="Your email" className="email-input" />
            </div>
            <div className="top-footer-container-right">
                <p className="footer-title">Let's Socialize</p>
                <div className="socials-container">
                    <div className="socials">
                        <img src="../src/assets/Facebook.png" alt="" className="socials-icon" />
                        <p className="socials-text">Facebook</p>
                    </div>
                    <div className="socials">
                        <img src="../src/assets/twitter.png" alt="twitter icon" className="socials-icon" />
                        <p className="socials-text">Twitter</p>
                    </div>
                    <div className="socials">
                        <img src="../src/assets/instagram.png" alt="instagram logo" className="socials-icon" />
                        <p className="socials-text">Instagram</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer-container">
            <div className="bottom-footer-container-left">
                <p className="bottom-footer-text">About Us</p>
                <p className="bottom-footer-text">Terms & Conditions</p>
                <p className="bottom-footer-text">Privacy & Cookie Policies</p>
            </div>
            <div className="bottom-footer-container-right">
                <p className="bottom-footer-text">2022</p>
                <p className="bottom-footer-text">© UniLife</p>
            </div>
        </div>
    </div>
  )
}

export default Footer