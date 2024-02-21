import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/Aboutme'
import Contact from './Components/Contact'
// import Navbar from './Components1/Navbar'


const Homepage = () => {
  return (
    <div >
    {/* <Navbar/> */}

    <NavBar/>
    <Home/>
    <About/>
    <Contact/>
      
    </div>
  )
}

export default Homepage
