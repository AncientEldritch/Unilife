import React, {useState, useEffect} from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'
import CitySearchbar from '../../components/CitySearchbar/CitySearchbar'
import axios from 'axios'

function Homepage() {
  //setting state for my array of cities and for the drop down to select a city
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
    //function to save chosen city in variable
  const handleCityChange = (event) => {
      const cityName = event.target.value;
      setSelectedCity(cityName);
  };
  //get array of all cities from API
  useEffect(() => {
      axios.get("https://unilife-server.herokuapp.com/cities").then((res) => {
          setCityList(res.data.response)
      }).catch (err => {
          console.log(err)
      })

  },[]);
  //Take top 9 cities from array to make list of top cities
  const topCities = cityList.slice(0,9);

  console.log(topCities)

  return (
    <div>
      <div className="homepage-top-container">
        <Slider />
        <CitySearchbar 
        cityList={cityList} 
        setCityList={setCityList} 
        handleCityChange={handleCityChange} />
      </div>
      <div className="top-cities-container">
        <p className="top-cities-title">Student accomodations in our top cities</p>
        <div className="top-cities-cards-container">
          {
            topCities.map((city) => {
              return (
                <button style={{backgroundImage: `url('${city.image_url}')`}} key={city._id} className="city-card-container">
                  <div  className="card-background-image">
                    <p className="city-name">{city.name}</p>
                    <p className="property-count">{city.property_count} properties</p>
                  </div>
                </button>
              )
            })
          }
        
        </div>
      </div>
      <div className="compare-container">
        <h1 className="compare-container-title">Compare all inclusive student homes.</h1>
        <div className="compare-card-container">
          <div className="compare-card">
            <img className="compare-image" src="../src/assets/travel.png"></img>
            <p className="compare-title">Search</p>
            <p className="compare-blurb">Find your dream home in the perfect area near your university.</p>
          </div>
          <div className="compare-card">
            <img className="compare-image" src="../src/assets/rule.png"></img>
            <p className="compare-title">Compare</p>
            <p className="compare-blurb">Compare student accommodation to find the right home for you.</p>
          </div>
          <div className="compare-card">
            <img className="compare-image" src="../src/assets/receipt.png"></img>
            <p className="compare-title">Bills Included</p>
            <p className="compare-blurb">Bills are included in all rent prices. No hidden fees.</p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Homepage