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
  
    const prevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const nextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const visibleImages = Array.from({ length: 3 }, (_, index) => {
      const newIndex = (currentImage + index) % images.length;
      return images[newIndex];
    });

    return (
      <div className="property-details-page">
        <div className="property-details-left">
          <button onClick={() => { history.back() }}>Back to search</button>
          <div className="slider-container">
            <div className="larger-image-container">
              {images[currentImage] && <img src={images[currentImage]} alt="larger" className="larger-image" />}
            </div>
            <button onClick={prevImage} className="slider-arrow left-arrow">
              {'<'}
            </button>
            <div className="smaller-images-container">
              {visibleImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`image-${index}`}
                  className={'smaller-image'}
                  onClick={() => setCurrentImage((currentImage + index) % images.length)}
                />
              ))}
            </div>
            <button onClick={nextImage} className="slider-arrow right-arrow">
              {'>'}
            </button>
          </div>
          <div className="property-description-container">
            <p className="property-page-title">Description</p>
            <p className="property-page-description">{property.property_description}</p>
          </div>
          <div className="key-features-container">
            <p className="property-page-title">Key Features</p>
            {property?.key_features?.map((feature, index) => (
                <div key={index} className="single-deature-container">
                    <p className="check-mark">✓</p>
                    <p className="feature">{feature}</p>
                </div>
            ))}
          </div>
        </div>
        <div className="property-details-right">
            <div className="main-details-container">
                <p className="address">
                    {`${property?.address?.street}, ${property?.address?.city}, ${property?.address?.postcode}`}
                </p>
                <div className="specific-details-container">
                    <div className="detail-container">
                        <p className="detail-title">Bedrooms</p>
                        <div className="pulled-detail-container">
                            <img src="../src/assets/bed.png" />
                            <p>{property?.bedroom_count}</p>
                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="detail-title">Bathrooms</p>
                        <div className="pulled-detail-container">
                            <img src="../src/assets/bathtub.png" />
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
                        {Object.keys(property?.bedroom_prices).map((bedroom, index) => (
                            <div key={index} className="bedroom-price">
                                <p className="bedroom-number">{bedroom.replace('_', ' ')}</p>
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