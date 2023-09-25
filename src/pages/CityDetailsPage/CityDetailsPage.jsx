import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './CityDetailsPage.css'
import Slider from '../../components/Slider/Slider'
import axios from 'axios';
import FilterForm  from "../../components/FilterForm/FilterForm"



function CityDetailsPage() {

  const { city_id } = useParams();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    console.log(city_id);
    axios.get(`https://unilife-server.herokuapp.com/properties/city/${city_id}`).then((res) => {
      setProperties(res.data.response)
      console.log(res.data.response)
  }).catch (err => {
      console.log(err)
  })
  console.log()
  }, [city_id])

  return (

    

    <div>
      <div className="city-details-top-container">
        <Slider />
        <FilterForm />
      </div>
      
    </div>
  )
}

export default CityDetailsPage