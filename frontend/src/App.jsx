import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Contact from './components/Contact/Contact'
import FAQSection from './components/Faq/FAQSection.jsx'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />


      </Routes>
      <FAQSection/>
      <Contact/>

    </div>
  )
}

export default App
