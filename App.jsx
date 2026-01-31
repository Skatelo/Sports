import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Shop from './components/Shop';
import Community from './components/Community';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-10 bg-black"> {/* Stacking context for scrolling */}
          <About />
          <Services />
          <Shop />
          <Community />
        </div>
      </main>
      <Contact />
    </div>
  );
}

export default App;
