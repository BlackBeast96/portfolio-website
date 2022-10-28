import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from "./components/NavBar/Navbar"
import { BrowserRouter } from "react-router-dom"
import Footer from './components/footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)
