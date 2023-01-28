/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import './WeatherInformation.css';
import { Tooltip, Typography } from '@mui/material';
import React from 'react';
import wmoInterpretation from '../data/WmoProperties';

// eslint-disable-next-line react/prop-types
function WeatherInformation({
  dayMaxTemp, dayMinTemp, unitTemp, date, wmoCode, dayMaxWind, unitWind,
}) {
  const formatDate = (date) => {
    const dateArray = date.split('-');
    return `${dateArray[2]}.${dateArray[1]}`;
  };

  const selectWeatherDescription = (wmoCode) => {
    let wmoDescription = '';
    for (let i = 0; i < wmoInterpretation.length; i++) {
      const wmoItem = wmoInterpretation[i];
      if (wmoItem.code === wmoCode) {
        wmoDescription = wmoItem.description;
      }
    }
    return wmoDescription;
  };

  const selectIcon = (wmoCode) => {
    let wmoIcon;
    for (let i = 0; i < wmoInterpretation.length; i++) {
      const wmoItem = wmoInterpretation[i];
      if (wmoItem.code === wmoCode) {
        wmoIcon = wmoItem.icon;
      }
    }
    return wmoIcon;
  };

  return (
    <div className="weather-container">
      <div>
        {wmoCode ? (
          <img style={{ marginTop: '1em' }} width={50} height={50} src={`${selectIcon(wmoCode)}`} alt="icon" />
        ) : null}
      </div>
      <Tooltip title="Max and min temp">
        <Typography variant="body1" pt="2em" color="white">
          {dayMaxTemp}
          {' '}
          /
          {' '}
          {dayMinTemp}
          {' '}
          {unitTemp}
        </Typography>
      </Tooltip>
      <Tooltip title="Max wind speed">
        <Typography variant="body1" pt="0.5em" color="white">
          {dayMaxWind}
          {' '}
          {unitWind}
        </Typography>
      </Tooltip>
      <Typography variant="body1" pt="0.5em" color="white">
        {selectWeatherDescription(wmoCode)}
      </Typography>
      {date ? (
        <Typography variant="body1" pt="0.5em" color="white">
          {formatDate(date)}
        </Typography>
      ) : null }
    </div>
  );
}

export default WeatherInformation;
