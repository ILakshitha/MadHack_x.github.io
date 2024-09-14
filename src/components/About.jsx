import React from 'react';
import madhack2 from '../assets/hacker-logo.png';

export default function About() {
    return (
        <div>
           
            <div style={{display:'flex'}}>
            <div>
          <img src={madhack2} alt="MadeHack Image" style={{height:'700px',width:'auto', opacity:0.5}} />
          </div>
          <div>

          </div>
            <p style={{color:'white', fontSize:'20px',padding:'20px',textAlign:'left'}}>
            <h3 style={{fontFamily:'monospace', color:'white', fontSize:'40px'}}> What is MADHACK </h3>
            Introducing Sri Lanka’s first Mobile Application Development Hackathon, the IEEE Student Branch of UCSC proudly presents 'MadHack', 
            an inter-university hackathon followed by a series of workshops. MadHack aims to let the participants put their creativity and 
            innovation to the test by giving them the opportunity to develop in any platform of choice.</p>

            
            <div>
           
            </div>
            </div>
            
           
        </div>
    )
}
