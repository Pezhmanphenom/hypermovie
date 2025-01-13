import React, { useState } from 'react'
import Navigation from './Navigation'
import SearchBox from '../Header/searchBox/SearchBox'
import FollowUs from './FollowUs'
import Headrslider from './Headrslider'
import { useLocation } from 'react-router-dom'

//linear-gradient(to bottom rgb(30,41,59 /80%),rgb(30,41,59 /40%),rgb(30,41,59 /30%)) for style

export default function Header() {
  const location = useLocation();
  const [bg,setBg] = useState('')


  return (
     <header className={`py-6 md:py-12 transition-all duration-500 bg-center     bg-cover pb-8${location.pathname !== "/" ? "h-[500px]":""}`}
     style={{backgroundImage:` url(${bg})`}}
     >
        <Navigation />
        <div className="container">
        <SearchBox />
      
       
          <div className={`${location.pathname !== "/" ?  "hidden" : ""}`}>
              <FollowUs />
              <Headrslider setBg={setBg} />
          </div>
        
       </div>

     </header>
  )
}
