import React from 'react'
import './PropertyCard.css'
import { Link } from 'react-router-dom'
import { BsHouseDoor } from 'react-icons/bs'

function PropertyCard({property}) {


  return (
    <div className="property-card">
        <img className="property-image" src={property.images[0]}/>
        <div className="top-details">
            <div className="price">
                <p className="property-price">£{property.rent}</p>
                <p className="including-bills">pppw including bills</p>
            </div>
            <div className="bed-bath">
                <div className="bed-bath-count">
                    <img className="bed-and-bath-icon" src="../src/assets/bed.png" />
                    <p>{property.bedroom_count}</p>
                </div>
                <div className="bed-bath-count">
                    <img className="bed-and-bath-icon" src="../src/assets/bathtub.png" />
                    <p>{property.bathroom_count}</p>
                </div>
            </div>
        </div>
        <div className="property-details-container">
                <div className="type-and-furnished">
                    <p className="property-type">{property.property_type}</p>
                    <p className="furnished">{property.furnished}</p>
                </div>
                <div className="address-container">
                    <img className="location-icon" src="../src/assets/location.png" alt="location logo" />
                    <p className="address">{property.address.street}, {property.address.city} {property.address.postcode}</p>
                </div>
                <Link to={`/property/${property?._id}`} className="house-details-link">
                    <BsHouseDoor />
                    <p className="view-home">View Home</p>
                </Link>
            </div>
    </div>
  )
}

export default PropertyCard