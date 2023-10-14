import React, {useState, useEffect} from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'
import CitySearchbar from '../../components/CitySearchbar/CitySearchbar'
import axios from 'axios'
import Footer from '../../components/Footer/Footer'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import travelLogo from "../../assets/travel.png"
import ruleLogo from "../../assets/rule.png"
import receiptLogo from "../../assets/receipt.png"
import realEstateLogo from "../../assets/real-estate.png"
import favoriteLogo from "../../assets/favorite.png"
import manTexting from "../../assets/texting.png"

function Homepage() {
  const navigate = useNavigate();
  const cityButtonClick = ((city) => {
    navigate(`/city/${city._id}`)
  })

  //setting state for my array of cities and for the drop down to select a city
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
    //function to save chosen city in variable
  const handleCityChange = (event) => {
      const cityName = event.target.value;
      setSelectedCity(cityName);
      console.log(cityName)
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
        handleCityChange={handleCityChange} 
        navigate={navigate}
        selectedCity={selectedCity}/>
      </div>
     
      <div className="top-cities-container">
        <p className="top-cities-title">Student accomodations in our top cities</p>
        <div className="top-cities-cards-container">
          {
            topCities.map((city) => {
              return (
                <button onClick={() => cityButtonClick(city)}style={{backgroundImage: `url('${city.image_url}')`}} key={city._id} className="city-card-container">
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
      <Link to ="/allcities"  className="see-all-cities-button">See All Cities</Link>
      <div className="compare-container">
        <h1 className="compare-container-title">Compare all inclusive student homes.</h1>
        <div className="compare-card-container">
          <div className="compare-card">
            <img className="compare-image" src={travelLogo}></img>
            <p className="compare-title">Search</p>
            <p className="compare-blurb">Find your dream home in the perfect area near your university.</p>
          </div>
          <div className="compare-card">
            <img className="compare-image" src={ruleLogo}></img>
            <p className="compare-title">Compare</p>
            <p className="compare-blurb">Compare student accommodation to find the right home for you.</p>
          </div>
          <div className="compare-card">
            <img className="compare-image" src={receiptLogo}></img>
            <p className="compare-title">Bills Included</p>
            <p className="compare-blurb">Bills are included in all rent prices. No hidden fees.</p>
          </div>
      </div>
      </div>
      <div className="search-and-compare-container">
        <div className="search-and-compare-left-container">
          <div className="search-and-compare-left-box">
            <img src={realEstateLogo} alt="An icon of a hand holding a house" className="search-and-compare-image" />
            <div className="search-and-compare-text">
              <p className="search-and-compare-title">Best Selection</p>
              <p className="search-and-compare-blurb">Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
            </div>
          </div>
          <div className="search-and-compare-left-box">
            <img src={favoriteLogo} alt="" className="search-and-compare-image" />
            <div className="search-and-compare-text">
              <p className="search-and-compare-title">Your Favorite</p>
              <p className="search-and-compare-blurb">Shortlist your favourite properties and send enquiries in one click.</p>
            </div>
          </div>
          <button className="search-and-compare-button" onClick={() => {window.scrollTo(0,0)}}>Search & Compare</button>
        </div>
        <img src={manTexting} alt="" className="man-texting-image" />
      </div>
    </div>
  )
}

export default Homepage