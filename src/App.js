import Navbar from './scenes/Navbar'
import DotGroup from './scenes/DotGroup'
import Landing from './scenes/Landing'
import MySkills from './scenes/MySkills'
import Projects from './scenes/Projects'
import Testimonials from './scenes/Testimonials'
import Contact from './scenes/Contact'
import Footer from './scenes/Footer'

import LineGradient from './components/LineGradient'

import { useEffect, useState } from 'react';
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPAge, setIsTopOfPage] = useState(true);
  
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  // CHECK IF IS TOP OF PAGE
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <div className="App bg-deep-blue">
      <Navbar
        isTopOfPAge={isTopOfPAge}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
          <MySkills />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
          <Projects />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
          <Testimonials />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
          <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
