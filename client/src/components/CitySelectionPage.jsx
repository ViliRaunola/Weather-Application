/* eslint-disable import/no-extraneous-dependencies */
import {
  React,
} from 'react';
import './CitySelectionPage.css';
import { Typography } from '@mui/material';
import CityCard from './CityCard';
import helsinkiImage from '../images/helsinki.webp';
import lappeenrantaImage from '../images/lappeenranta.jpg';
import tampereImage from '../images/tampere.jpg';

function CitySelectionPage() {
  return (
    <div>
      <div className="page-header">
        <Typography variant="h2" color="white">The Weather Service</Typography>
      </div>
      <Typography variant="body1" pt="1em" color="white">Select a city to check the weather</Typography>
      <div className="city-container">
        <CityCard cityName="Helsinki" latitude={60.17} longitude={24.95} cityImageSource={helsinkiImage} />
        <CityCard cityName="Lappeenranta" latitude={61.06} longitude={28.19} cityImageSource={lappeenrantaImage} />
        <CityCard cityName="Tampere" latitude={61.50} longitude={23.80} cityImageSource={tampereImage} />
      </div>
    </div>
  );
}

export default CitySelectionPage;
