import React from 'react'
import astound_logo from '../assets/imges/Astound-Simbolo-500x281_new.png'
function Hero() {
  return (
    <div className="logo">
        <img
            src={astound_logo} alt="Astound Broadband logo" 
        />    
        <p className="astound__name">
          A 
          <br></br>
          S
          <br></br>
          T
          <br></br>
          O
          <br></br>
          U
          <br></br>
          N
          <br></br>
          D
        </p>            
                   
    </div>
  )
}

export default Hero