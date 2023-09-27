import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './CityDetailsPage.css'
import Slider from '../../components/Slider/Slider'
import axios from 'axios';
import FilterForm  from "../../components/FilterForm/FilterForm"
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Footer from '../../components/Footer/Footer';


function CityDetailsPage() {

  const { city_id } = useParams();
  const [properties, setProperties] = useState([]);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    console.log(city_id);
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${city_id}`).then((res) => {
      setProperties(res.data.response)
      console.log(res.data.response)
  }).catch (err => {
      console.log(err)
  })
  }, [city_id])

  useEffect(() => {
    console.log(city_id);
    axios.get(`https://unilife-server.herokuapp.com/cities/${city_id}`).then((res) => {
      setCurrentCity(res.data.data[0])
      console.log(res.data.data[0])
  }).catch (err => {
      console.log(err)
  })
  }, [city_id])

  return (

    

    <div>
      <div className="city-details-top-container">
        <Slider />
        <FilterForm />
      </div>
      {currentCity.name ? (
  <p className="property-count">{properties.length} homes in {currentCity.name}</p>
) : (
  <p>Loading...</p>
)}
      <div className="property-cards-container">
        {
          properties.map((property) => {
            return (
            <PropertyCard key={property._id} property={property} /> )
          })
        }
      </div>
      <div className="city-blurb-container">
        <div className="city-blurb-text">
          <h1 className="student-in">Being a student in {currentCity.name}</h1>
          <p className="city-blurb-paragraph">
            <p>{currentCity.student_life}</p>
            
            <p>{currentCity.universities}</p>
          </p>
        </div>
        <img src="../src/assets/student-life.png" alt="" className="city-blurb-image" />
      </div>
      <Footer />
    </div>
  )
}

export default CityDetailsPage