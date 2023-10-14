import React, { useEffect, useState} from 'react'
import './PropertyDetailsPage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsHeart } from "react-icons/bs"
import Modal from 'react-modal'
import bookingLogo from "../../assets/booking.png"
import blueBedLogo from "../../assets/blue-bed.png"
import blueBathtubLogo from "../../assets/blue-bathtub.png"

//Modal styling
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '60%',
    width: '60%',
    border: 'none',
    borderRadius: '12px',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
  }
};

Modal.setAppElement(document.getElementById('root'));



function PropertyDetailsPage() {

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
 



    const { property_id } = useParams();
    const [property, setProperty] = useState({});
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
        .then((res) => {
          setProperty(res.data || {});
        })
        .catch((err) => {
          console.log(err);
        });
    }, [property_id]);
  
    const images = property.images || [];
    



    return (

      
      <div className="property-details-page">

        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Us"
      >
        <div className="modal-top">
          <h2 className="modal-title">Book a Viewing</h2>
          <img className="modal-image" src={bookingLogo} alt="icon of a mailbox" />
        </div>
        <p className="modal-text">{`${property?.address?.street}, ${property?.address?.city}, ${property?.address?.postcode}`}</p>
        <form className="modal-form">
          <div className="modal-left booking-left">
            <label for="name">First name:</label>
            <input type="text" className="input input-text" name="name" placeholder='Enter your name'/>
            <label for="email">Email:</label>
            <input type="email" className="input" name="email" placeholder='Enter your email address'/>
            <label for="phone-number">Phone Number:</label>
            <input type="tel" className="input input-text" name="phone-number" placeholder='Enter your phone number'/>
          </div>
          <div className="modal-right">
            <label for="message">Message:</label>
            <textarea className="input input-message" name="message" placeholder='Enter your message'/>
            <button className="modal-submit booking-submit" onClick={closeModal}>Submit</button>
          </div>
        </form>
  
      </Modal>

        <div className="property-details-left">
          <button className="back-button" onClick={() => { history.back() }}>{`< Back to search`}</button>
          <div className="image-slider-container">
            <div className="larger-image-container">
              {images[currentImage] && <img src={images[currentImage]} alt="larger" className="larger-image" />}
            </div>
            <div className="smaller-images-container">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`property image-${index}`}
                  className='smaller-image'
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
            
          </div>
          <div className="property-description-container">
            <p className="property-page-title">Description</p>
            <p className="property-page-description">{property.property_description}</p>
          </div>
          <div className="key-features-container">
            <p className="property-page-title">Key Features</p>
            {property?.key_features?.map((feature, index) => (
                <div key={index} className="single-feature-container">
                    <p className="check-mark">✓</p>
                    <p className="feature">{feature}</p>
                </div>
            ))}
          </div>
        </div>
        <div className="property-details-right">
            <div className="main-details-container">
                <p className="details-address">
                    {`${property?.address?.street}, ${property?.address?.city}, ${property?.address?.postcode}`}
                </p>
                <div className="specific-details-container">
                    <div className="detail-container">
                        <p className="detail-title">Bedrooms</p>
                        <div className="pulled-detail-container">
                            <img className="details-icon" src={blueBedLogo} />
                            <p>{property?.bedroom_count}</p>
                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="detail-title">Bathrooms</p>
                        <div className="pulled-detail-container">
                            <img src={blueBathtubLogo} />
                            <p>{property?.bathroom_count}</p>
                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="detail-title">Property Type</p>
                        <div className="pulled-detail-container">
                            <p>{property?.property_type}</p>
                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="detail-title">Price</p>
                        <div className="pulled-detail-container">
                            <p>£{property?.rent}</p>
                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="detail-title">Furnished Type</p>
                        <div className="pulled-detail-container">
                        <p>{property?.furnished}</p>
                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="detail-title">Available from</p>
                        <div className="pulled-detail-container">
                        <p>{property?.availability}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-button-container">
                <button className="details-shortlist-button details-page-button">
                    <BsHeart /> &nbsp; Shortlist
                </button>
                <button className="details-book-viewing-button details-page-button" onClick={openModal}>
                    Book Viewing
                </button>
            </div>
                <div className="bedroom-prices-container">
                    <p className="property-page-title">Bedroom Prices</p>
                    <div className="bedroom-prices">
                        {property.bedroom_prices && Object.keys(property.bedroom_prices).map((bedroom, index) => (
                            <div key={index} className={`bedroom-price ${index !== property.bedroom_prices.length - 1 ? 'bottom-border' : ''}`}>
                                <p className="bedroom-number">Bedroom {index+1}</p>
                                <p className="individual-price">£{property.bedroom_prices[bedroom]} per week</p>
                            </div>
                        ))}
                    </div>
                  </div>
            
        </div>
      </div>
    
    );
  }
  
  export default PropertyDetailsPage;