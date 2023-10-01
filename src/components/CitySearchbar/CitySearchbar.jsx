import React, {useEffect, useState} from 'react'
import './CitySearchbar.css'
import axios from 'axios'
import {Navigate, useNavigate } from 'react-router-dom'

    
function CitySearchbar({ navigate, cityList, handleCityChange, selectedCity }) {
  const cityButtonClick = () => {
    const selectedCityObject = cityList.find((city) => city.name === selectedCity);
    if (selectedCityObject) {
      navigate(`/city/${selectedCityObject._id}`);
    } else {
      console.log("City not found");
    }
  };


  return (
    <div className="searchbar-container">
        <select className="city-dropdown" defaultValue="" onChange={handleCityChange}>
            <option value="" disabled>Search by city</option>
            {cityList.map((city) => {
                return (
                    <option key={city._id} value={city.name}>{city.name}</option>
                )
            })}
        </select>
        <button onClick={() => cityButtonClick(selectedCity)} className="city-search-button">Find Homes</button>
    </div>
  )
}

export default CitySearchbar