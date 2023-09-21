import React from 'react'
import './Slider.css'
import { useLocation } from 'react-router-dom'


function Slider() {
    const location = useLocation();
    const pageViewing = location.pathname;
    let sliderHeading = "";
    let sliderText = "";

    if (pageViewing  === '/') {
        sliderHeading = "Find student homes with bills included";
        sliderText =  "A simple and faster way to search for student accommodation";
    } else if (pageViewing === '/citydetails') {
        sliderHeading =  "Search Accomodation"
        sliderText = "Whatever you’re after, we can help you find the right student accommodation for you. "
    } else {
        sliderHeading = "Where are you?"
        sliderText = "Are you lost??"
    }

  return (
    
    <div className="slider-container">
        <div className="slider-container-background">
            <h1 className="slider-header">{sliderHeading}</h1>
            <p className="slider-text">{sliderText}</p>
        </div>
        
    </div>
  )
}

export default Slider