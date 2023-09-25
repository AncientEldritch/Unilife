import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage'
import SeeAllCities from './pages/SeeAllCities/SeeAllCities'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/city/:city_id" element={<CityDetailsPage />} />
        <Route path="allcities" element={<SeeAllCities />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
