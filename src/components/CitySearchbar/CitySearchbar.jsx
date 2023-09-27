import React, {useEffect, useState} from 'react'
import './CitySearchbar.css'
import axios from 'axios'

    
function CitySearchbar({navigate, cityList, handleCityChange}) {

    

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
        <button className="city-search-button">Find Homes</button>
    </div>
  )
}

export default CitySearchbar