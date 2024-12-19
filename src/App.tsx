import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AudioPlayer from './components/AudioPlayer.jsx';
import Programacion from './components/Programacion.jsx';
import HamburgerMenu from './components/HamburgerMenu';
import './index.css'; // TailwindCSS

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const radioData = {
    name: "Fm Television Alternativa",
    logoUrl: "/Logo.png",
    streamUrl: "https://stream-174.zeno.fm/b6428upqws8uv",
  };

  return (
    <React.StrictMode>
      <Router>
        <div>
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {isMenuOpen && (
            <div className="menu-items">
              {/* Add your menu items here */}
            </div>
          )}
          <Routes>
            <Route
              path="/"
              element={
                <AudioPlayer
                  streamUrl={radioData.streamUrl}
                  name={radioData.name}
                  logoUrl={radioData.logoUrl}
                  backgroundUrl="https://i.ibb.co/Qd6tcHf/istockphoto-1472060253-612x612.jpg"
                />
              }
            />
            <Route
              path="/programacion"
              element={
                <Programacion backgroundUrl="https://i.ibb.co/Qd6tcHf/istockphoto-1472060253-612x612.jpg" />
              }
            />
          </Routes>
        </div>
      </Router>
    </React.StrictMode>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);