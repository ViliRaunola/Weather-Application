/* eslint-disable import/no-extraneous-dependencies */
import './WeatherInformation.css';
import { Typography } from '@mui/material';
import React from 'react';

// eslint-disable-next-line react/prop-types
function WeatherInformation({ dayMaxTemp, dayMinTemp, unit }) {
  return (
    <div className="weather-container">
      <Typography variant="body1" pt="2em" color="white">
        {dayMaxTemp}
        {' '}
        {unit}
        {' '}
        /
        {' '}
        {dayMinTemp}
        {' '}
        {unit}
      </Typography>
    </div>
  );
}

export default WeatherInformation;
