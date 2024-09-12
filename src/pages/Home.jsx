import React, { useRef } from 'react';
import Carou from '../components/Carou';
import Header from '../components/Header';

export default function Home() {
  const homeref = useRef(null);
  const aboutref = useRef(null);
  const timelineref = useRef(null);
  const prizeref = useRef(null); // Fixed typo here
  const faqref = useRef(null);

  const scrollToSection = (section) => {
    switch(section) {
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
    <div style={{ textAlign: 'center' }}>
       <Header scrollToSection={scrollToSection} />
      <h1>Scroll to Component</h1>
      <div ref={homeref} style={{ height: '1000px', backgroundColor: 'red' }}>Home Section</div>
      <div ref={aboutref} style={{ height: '1000px', backgroundColor: 'blue' }}>About Section</div>
      <div ref={timelineref} style={{ height: '1000px', backgroundColor: 'purple' }}>Timeline Section</div> {/* Added missing timeline section */}
      <div ref={prizeref} style={{ height: '1000px', backgroundColor: 'yellow' }}>Prizes Section</div>
      <div ref={faqref} style={{ height: '1000px', backgroundColor: 'green' }}>FAQ Section</div>
    </div>
  );
}
