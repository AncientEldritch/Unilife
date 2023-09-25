import React, { useEffect, useState} from 'react'
import './FilterForm.css'
import axios from 'axios'

function FilterForm() {
    const [allPropertyTypes, setAllPropertyTypes] = useState([]);
    useEffect(() => {
        axios.get("https://unilife-server.herokuapp.com/propertyTypes").then((res) => {
            setAllPropertyTypes(res.data.response)
        }).catch (err => {
            console.log(err)
        })
  
    },[]);

  return (
    <div className="filter-form-container">
        <div className="filter-option">
            <div className="filter-title">Min Bedroom</div>
            <select onChange=" " value="anyBedroom" className="filter-dropdown">
                <option value="anyBedroom" disabled>Any Bedroom</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </div>
        <div className="filter-option">
            <div className="filter-title">Min Bathroom</div>
            <select onChange="" value="anyBathoom" className="filter-dropdown">
                <option value="anyBathroom">Any Bathoom</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <div className="filter-option">
            <div className="filter-title">Max Price</div>
            <select onChange="" value="anyPrice" className="filter-dropdown">
                <option value="anyPrice" >Any Price</option>
                <option value="600">€600</option>
                <option value="800">€800</option>
                <option value="900">€900</option>
                <option value="1200">€1200</option>
                <option value="1500">€1500</option>
                <option value="2450">€2450</option>
                
            </select>
        </div>
        <div className="filter-option">
            <div className="filter-title">Home Type</div>
            <select  onChange="" value="anyType" className="filter-dropdown">
                <option value="anyType">Any Type</option>
                {
                    allPropertyTypes.map((type) => {
                    return (
                        <option key={type.name} value={type.name}>{type.name}</option>
                    )
                    })
                }
            </select>
        </div>
    </div>
  )

}
export default FilterForm