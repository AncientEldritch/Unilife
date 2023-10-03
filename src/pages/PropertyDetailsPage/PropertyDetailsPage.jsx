import React, { useEffect, useState} from 'react'
import './PropertyDetailsPage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsHeart } from "react-icons/bs"

function PropertyDetailsPage() {
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
                            <img className="details-icon" src="../src/assets/blue-bed.png" />
                            <p>{property?.bedroom_count}</p>
                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="detail-title">Bathrooms</p>
                        <div className="pulled-detail-container">
                            <img src="../src/assets/blue-bathtub.png" />
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
                            <p>{property?.rent}</p>
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
                <button className="details-shortlist-button">
                    <BsHeart /> Shortlist
                </button>
                <button className="details-book-viewing-button">
                    Book Viewing
                </button>
                <div className="bedroom-prices-container">
                    <p className="property-page-title">Bedroom Prices</p>
                    <div className="bedroom-prices">
                        {property.bedroom_prices && Object.keys(property.bedroom_prices).map((bedroom, index) => (
                            <div key={index} className="bedroom-price">
                                <p className="bedroom-number">Bedroom {index+1}</p>
                                <p className="individual-price">£{property.bedroom_prices[bedroom]}</p>
                            </div>
                        ))}
                    </div>
</div>
            </div>
        </div>
      </div>
    
    );
  }
  
  export default PropertyDetailsPage;