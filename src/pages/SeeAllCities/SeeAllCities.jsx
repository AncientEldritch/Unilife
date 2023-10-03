import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from '../../components/Slider/Slider';
import "./SeeAllCities.css";

function SeeAllCities() {
  const [allCities, setAllCities] = useState([]);
  const navigate = useNavigate();
  const cityButtonClick = ((city) => {
    navigate(`/city/${city._id}`)
  })

  useEffect(() => {
    axios.get("https://unilife-server.herokuapp.com/cities")
      .then((res) => {
        setAllCities(res.data.response);
        console.log(allCities); // cityList will be updated after the state change
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="all-cities-top-container">
        <Slider />
      </div>
        <div className="search-by-city-container">
            <p className="search-by-city-title">Search by City</p>
            <div className="city-buttons-container">
                {allCities.map((city) => (
                <button key={city._id} className="city-button" onClick={() => cityButtonClick(city)}>
                {city.name}</button> ))}
            </div>
        </div>
        
    </div>
  );
}

export default SeeAllCities;