import React, { useRef } from 'react';
import Carou from '../components/Carou';
import Header from '../components/Header';
import madhack from '../assets/Madhacklogo.svg';

import { Box, Typography } from '@mui/material';
import Timeline from '../components/TimeLine';
import MadeHackTimeline from '../components/TimeLine';
import About from '../components/About';

export default function Home() {
  const homeref = useRef(null);
  const aboutref = useRef(null);
  const timelineref = useRef(null);
  const prizeref = useRef(null); // Fixed typo here
  const faqref = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'Home': // Ensure this matches the section names used in Header
        homeref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        aboutref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'TimeLine':
        timelineref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Prizes': // Fixed typo here
        prizeref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Faq':
        faqref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div style={{  }}>
      <Header scrollToSection={scrollToSection} />
      <section ref={homeref} style={{ height: '840px', backgroundColor: '#050A30', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <div style={{
         display:'flex',
         alignItems:'center'
        }}>
         
          <Box
            sx={{

              width: 600,
              height: 600,
              borderRadius: 100,
              bgcolor: '#0f1e64',
              backgroundImage: `url(${madhack})`, // Add your image URL here
              backgroundSize: '500px', // Ensures the image covers the entire box
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              '&:hover': {
                bgcolor: '#191970',
              },
            }}
          />
          

        </div>
        
      </section>
      <div ref={aboutref} style={{ height: '840px', backgroundColor: '#050A30' }}>
      <div  style={{width:'full', textAlign: 'center'}}>
        <Typography color='white'
         sx={{ 
          fontSize: '60px',    // Set font size
          fontFamily: 'Times new roman'  // Set font family
        }}
        >
          Intrduction

        </Typography>
        <About/>
        </div>
      </div>
      <div ref={timelineref} style={{  backgroundColor: '#050A30' }}>
        <div  style={{width:'full', textAlign: 'center'}}>
        <Typography color='white'
         sx={{ 
          fontSize: '50px',    // Set font size
          fontFamily: 'Times new roman'  // Set font family
        }}
        >
          Timeline

        </Typography>
        </div>
        
      <MadeHackTimeline/>  </div> {/* Added missing timeline section */}
      <div ref={prizeref} style={{ height: '840px', backgroundColor: '#050A30' }}>Prizes Section</div>
      <div ref={faqref} style={{ height: '840px', backgroundColor: '#050A30' }}>FAQ Section</div>
    </div>
  );
}
