import React from 'react'
import './Header.css'
import { BsHouseDoor, BsHeart, BsEnvelope } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Modal from 'react-modal';

//Modal styling
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '4',
    },
  };

  Modal.setAppElement(document.getElementById('root'));

function Header() {

    //Start modal
    let subtitle =  '';
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
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
        
    </div>
  )
}

export default Header