import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage'
import SeeAllCities from './pages/SeeAllCities/SeeAllCities'
import PropertyDetailsPage from './pages/PropertyDetailsPage/PropertyDetailsPage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/city/:city_id" element={<CityDetailsPage />} />
        <Route path="allcities" element={<SeeAllCities />} />
        <Route path="property/:property_id" element={<PropertyDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
