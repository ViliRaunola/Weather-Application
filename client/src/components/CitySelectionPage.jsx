/* eslint-disable import/no-extraneous-dependencies */
import { React, useState, useEffect } from 'react';
import './CitySelectionPage.css';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CitySelectionCard from './CityCard';
import helsinkiImage from '../images/helsinki.webp';
import lappeenrantaImage from '../images/lappeenranta.jpg';
import tampereImage from '../images/tampere.jpg';

function CitySelectionPage() {
  const [selectedCity, setSelectedCity] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(selectedCity).length !== 0) {
      navigate('/weather', { state: { city: selectedCity } });
    }
  }, [selectedCity]);

  const onSelectingCity = (currentCity, lat, lon) => {
    setSelectedCity({ name: currentCity, latitude: lat, longitude: lon });
  };

  return (
    <div>
      <Typography variant="h2" pt="2em" color="white">The Weather Service</Typography>
      <Typography variant="body1" pt="1em" color="white">Please select the city which weather you want to view.</Typography>
      <div className="city-container">
        <CitySelectionCard cityName="Helsinki" latitude="60.17" longitude="24.95" cityImageSource={helsinkiImage} setSelectedCity={onSelectingCity} />
        <CitySelectionCard cityName="Lappeenranta" latitude="61.06" longitude="28.19" cityImageSource={lappeenrantaImage} setSelectedCity={onSelectingCity} />
        <CitySelectionCard cityName="Tampere" latitude="61.50" longitude="23.80" cityImageSource={tampereImage} setSelectedCity={onSelectingCity} />
      </div>
    </div>
  );
}

export default CitySelectionPage;
