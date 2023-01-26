import './App.css';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CitySelectionPage from './components/CitySelectionPage';
import CityWeatherPage from './components/CityWeatherPage';
import stormImgage from './images/storm-clouds.jpg';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${stormImgage})` }}>
        <Routes>
          <Route path="/" element={<CitySelectionPage />} />
          <Route path="/weather" element={<CityWeatherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
