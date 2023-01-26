/* eslint-disable import/no-extraneous-dependencies */
import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import WeatherInformation from './WeatherInformation';

function CityWeatherPage() {
  const location = useLocation();
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);
  const [multiDayView, setMultiDayView] = useState(false);

  useEffect(() => {
    console.log(multiDayView);
  }, [multiDayView]);

  const changeMultiDayView = () => {
    // eslint-disable-next-line no-shadow
    setMultiDayView((multiDayView) => !multiDayView);
  };

  const getDataFromApi = () => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.state.city.latitude}&longitude=${location.state.city.latitude}&daily=temperature_2m_max,temperature_2m_min&timezone=Europe/Helsinki`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${res.status}`,
          );
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error while fetching from location API', error);
      });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div>
      <Typography variant="h2" pt="2em" color="white">{location.state.city.name}</Typography>
      {!loading
      && (
      <WeatherInformation
        dayMaxTemp={apiData.daily.temperature_2m_max[0]}
        dayMinTemp={apiData.daily.temperature_2m_min[0]}
        unit={apiData.daily_units.temperature_2m_min}
      />
      )}
      <FormControlLabel
        sx={{ color: 'white', mt: '1em' }}
        control={(
          <Switch
            // eslint-disable-next-line no-shadow
            onChange={changeMultiDayView}
          />
        )}
        label="Toggle between 1 and 3 day forecast"
      />
    </div>
  );
}

export default CityWeatherPage;
