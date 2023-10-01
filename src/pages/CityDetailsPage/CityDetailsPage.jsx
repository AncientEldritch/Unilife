import React, { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom';
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
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  const handleBedroomChange = (event) => {
    setBedroom(event.target.value);
  };
  
  const handleBathroomChange = (event) => {
    setBathroom(event.target.value);
  };
  
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  

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

  const filterProperties=(bedroom,bathroom,price,type)=>{
    const query={
      city_id: city_id,
      bedroom_count: bedroom,
      bathroom_count: bathroom,
      rent: price,
      property_type: type,
    }

    axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{query})
    .then(res=>{
      setProperties(res.data.response)
    })
    .catch(err=>console.log(err))
}

useEffect(() => {
  filterProperties(bedroom, bathroom, price, type)
}, [bedroom,bathroom,price, type])

  return (

    

    <div>
      <div className="city-details-top-container">
        <Slider />
        <FilterForm
          onBedroomChange={handleBedroomChange}
          onBathroomChange={handleBathroomChange}
          onPriceChange={handlePriceChange}
          onTypeChange={handleTypeChange}
          bedroom={bedroom}
          bathroom={bathroom}
          price={price}
          type={type}
        />
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
            <PropertyCard 
            key={property._id} 
            property={property} 
            city_id={city_id} /> )
          })
        }
      </div>
      <div className="city-blurb-container">
        <div className="city-blurb-text">
          <h1 className="student-in">Being a student in {currentCity.name}</h1>
          <div className="city-blurb-paragraph">
            <p>{currentCity.student_life}</p>
            
            <p>{currentCity.universities}</p>
          </div>
        </div>
        <img src="../src/assets/student-life.png" alt="students sitting together and smiling" className="city-blurb-image" />
      </div>
      <Footer />
    </div>
  )
}

export default CityDetailsPage