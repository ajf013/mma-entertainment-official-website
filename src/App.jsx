import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Team from './components/Team';
import Work from './components/Work';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    // Chatbot script
    const script = document.createElement("script");
    script.innerHTML = `(function(w, d) { w.CollectId = "607fb729b9c6e14b50d6be73"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <ThemeProvider>
      <main>
        <Navbar />
        <Hero />
        <Highlights />
        <About />
        <Team />
        <Work />
        <CallToAction />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
