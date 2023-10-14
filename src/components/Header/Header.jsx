import React from 'react'
import './Header.css'
import { BsHouseDoor, BsHeart, BsEnvelope } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { GiHamburgerMenu } from "react-icons/gi"
import mailboxIcon from "../../assets/mailbox.png"

//hamburger menu functionality for mobile 

const toggleNav = () => {
  const navMenu = document.querySelector(".right-header-container");
  if (navMenu.style.display === "none") {
    navMenu.style.display = "block"
  } else {
    navMenu.style.display = "none"
  }
}

//Modal styling
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '70%',
      width: '60%',
      border: 'none',
      borderRadius: '12px',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)',
    }
  };

  Modal.setAppElement(document.getElementById('root'));

function Header() {

    //Start modal
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

 
  function closeModal() {
    setIsOpen(false);
  }

  //end Modal 

  return (
    <div className="header-container">
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Us"
      >
        <div className="modal-top">
          <h2 className="modal-title">Contact Us</h2>
          <img className="modal-image" src={mailboxIcon} alt="icon of a mailbox" />
        </div>
        <p className="modal-text">Feel free to contact us if you have any questions. <br /> Looking forward to hear from you.</p>
        <form className="modal-form">
          <div className="modal-left">
            <label for="name">First name:</label>
            <input type="text" className="input input-text" name="name" placeholder='Enter your name'/>
            <label for="phone-number">Phone Number:</label>
            <input type="tel" className="input input-text" name="phone-number" placeholder='Enter your phone number'/>
            <label for="affiliation">Are you a...</label>
            <select className="input input-dropdown" name="affiliation" defaultValue="student">
              <option value="student">Student</option>
              <option value="owner">Property Owner</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="modal-right">
            <label for="email">Email:</label>
            <input type="email" className="input" name="email" placeholder='Enter your email address'/>
            <label for="message">Message:</label>
            <textarea className="input input-message" name="message" placeholder='Enter your message'/>
            <button className="modal-submit" onClick={closeModal}>Submit</button>
          </div>
        </form>
  
      </Modal>
        <div className="left-header-container">
            <BsHouseDoor className="header-icon" />
            <Link to="/" className="unilife-header-title">UniLife</Link>
        </div>
        <div className="right-header-container">
            <div className="header-link-container">
                <BsHeart className="header-link-icon" />
                <button className="header-link" >Shortlist</button>
            </div>
            <div className="header-link-container">
                <BsEnvelope className="header-link-icon" />
                <button className="header-link" onClick={() => {openModal()}}>Contact Us</button>
            </div>
        </div>
        <GiHamburgerMenu className="hamburger-menu" onClick={toggleNav} />
    </div>
  )
}

export default Header