import React, { useRef } from 'react';
import Carou from '../components/Carou';
import Header from '../components/Header';
import madhack from '../assets/Madhacklogo.svg';

import { Box, Typography } from '@mui/material';
import Timeline from '../components/TimeLine';
import MadeHackTimeline from '../components/TimeLine';
import About from '../components/About';
import Prizecard from '../components/Prizecard';
import bg from '../assets/bg-v.mp4'
import Faq from '../components/Faq';

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
    <>
      <div style={{}}>
        <Header scrollToSection={scrollToSection} />

        <div>


          <section ref={homeref} style={{
            height: '850px', display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}>
            <video
              autoPlay
              muted

              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: '3',
                objectFit: 'cover',
                zIndex: '-1',  // Ensures video stays behind the content
              }}
            >
              <source src={bg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div style={{
              display: 'flex',
              alignItems: 'center'
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
          <div ref={aboutref} style={{ height: '840px', backgroundColor: '#050A30', position: '', paddingTop: '100px' }}>
            <div style={{ width: 'full', textAlign: 'center' }}>
              <Typography color='white'
                sx={{
                  fontSize: '60px',    // Set font size
                  fontFamily: 'Times new roman'  // Set font family
                }}
              >
                Intrduction

              </Typography>
              <About />
            </div>
          </div>
          <div ref={timelineref} style={{ backgroundColor: '#050A30', padding: '20px', margin: '0', paddingTop: '100px' }}>
            <div style={{ width: 'full', textAlign: 'center' }}>
              <Typography color='white'
                sx={{
                  fontSize: '50px',    // Set font size
                  fontFamily: 'Times new roman'  // Set font family
                }}
              >
                Timeline

              </Typography>
            </div>
            <div>
              <MadeHackTimeline />
            </div>
          </div> {/* Added missing timeline section */}
          <div ref={prizeref} style={{ backgroundColor: '#050A30', paddingTop: '100px', textAlign: 'center' }}>
            <Typography color='white'
              sx={{
                fontSize: '60px',    // Set font size
                fontFamily: 'Times new roman'  // Set font family
              }}
            >
              prizes

            </Typography>
            <Prizecard />
            <div style={{ backgroundColor: 'white' }}>


              <h2 style={{ fontFamily: 'monospace' }}>Our Partnerss</h2>
              <Carou />

            </div>

          </div>
          <div ref={faqref} style={{ height: '840px', backgroundColor: '#050A30', paddingTop: '100px' }}>
          <div style={{ width: 'full', textAlign: 'center' }}>
              <Typography color='white'
                sx={{
                  fontSize: '50px',    // Set font size
                  fontFamily: 'Times new roman'  // Set font family
                }}
              >
                FAQ

              </Typography>
            </div>

            <div style={{
              display: 'flex',          // Enables Flexbox
              justifyContent: 'center', // Centers horizontally
              alignItems: 'center',     // Centers vertically
              height: 'auto',          // Keeps the div size the same
              width: '800px',
              margin: '0 auto'          // Ensures the div is centered within the parent container
            }}>
              <Faq />
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
