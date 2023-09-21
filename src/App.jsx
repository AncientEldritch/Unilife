import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/citydetails" element={<CityDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
