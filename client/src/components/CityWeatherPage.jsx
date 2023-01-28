/* eslint-disable import/no-extraneous-dependencies */
import './CityWeatherPage.css';
import { React, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import WeatherInformation from './WeatherInformation';

function CityWeatherPage() {
  const location = useLocation();
  const [weatherData, setWeatherData] = useState([]);
  const [isCitySelected, setIsCitySelected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);
  const [multiDayView, setMultiDayView] = useState(false);
  const daysToRender = 3;

  const checkCityBeforeFetch = () => {
    if (location.state !== null) {
      setIsCitySelected(true);
    }
  };

  const changeMultiDayView = () => {
    setMultiDayView((multiDayView) => !multiDayView);
  };

  const createweatherData = (data) => {
    setWeatherData([]);
    for (let i = 0; i < daysToRender; i++) {
      const newDayData = {
        date: data.daily.time[i],
        unitTemperature: data.daily_units.temperature_2m_min,
        wmoCode: data.daily.weathercode[i],
        unitWindSpeed: data.daily_units.windspeed_10m_max,
        dailyMaxTemp: data.daily.temperature_2m_max[i],
        dailyMinTemp: data.daily.temperature_2m_min[i],
        dailyWindSpeedMax: data.daily.windspeed_10m_max[i],
      };
      setWeatherData((prevData) => [...prevData, newDayData]);
    }
  };

  const getDataFromApi = () => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.state.city.latitude}&longitude=${location.state.city.longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode,windspeed_10m_max&windspeed_unit=ms&timezone=Europe/Helsinki`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            setErrorLoading(true),
            `This is an HTTP error: The status is ${res.status}`,
          );
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        createweatherData(data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Error while fetching from location API', error);
        setErrorLoading(true);
      });
  };

  useEffect(() => {
    checkCityBeforeFetch();
    if (isCitySelected) {
      getDataFromApi();
    }
  }, [isCitySelected]);

  const themeSwitch = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            color: 'grey',
          },
          colorPrimary: {
            '&.Mui-checked': {
              // Controls checked color for the thumb
              color: 'white',
            },
          },
          track: {
            // Controls default (unchecked) color for the track
            opacity: 0.2,
            backgroundColor: 'grey',
            '.Mui-checked.Mui-checked + &': {
              // Controls checked color for the track
              opacity: 0.7,
              backgroundColor: '#fff',
            },
          },
        },
      },
    },
  });

  const themeButton = createTheme({
    palette: {
      neutral: {
        main: 'rgba(30,30,30,0.8)',
        contrastText: '#fff',
      },
    },
  });

  if (!isCitySelected) {
    return (
      <div>
        <Typography variant="h2" pt="2em" color="error">Please select the city first</Typography>
        <ThemeProvider theme={themeButton}>
          <Button component={Link} to="/" variant="contained" color="neutral">Select city</Button>
        </ThemeProvider>
      </div>

    );
  }
  if (errorLoading) {
    return (
      <div>
        <Typography variant="h2" pt="2em" color="error">Error while fetching data</Typography>
        <ThemeProvider theme={themeButton}>
          <Button component={Link} to="/" variant="contained" color="neutral">Select city</Button>
        </ThemeProvider>
      </div>
    );
  }
  return (
    <div>
      <div className="page-header">
        <Typography variant="h2" color="white">{location.state.city.name}</Typography>
      </div>
      {multiDayView ? (
        <Typography variant="body2" color="white" pt="0.5em">Weather cast for the next three days</Typography>
      ) : (
        <Typography variant="body2" color="white" pt="0.5em">Today&apos;s weather</Typography>
      )}
      <div className="weather-data-container">
        {!loading
        && !multiDayView ? (
          <WeatherInformation
            dayMaxTemp={weatherData[0].dailyMaxTemp}
            dayMinTemp={weatherData[0].dailyMinTemp}
            unitTemp={weatherData[0].unitTemperature}
            wmoCode={weatherData[0].wmoCode}
            unitWind={weatherData[0].unitWindSpeed}
            dayMaxWind={weatherData[0].dailyWindSpeedMax}
          />
          )
          : weatherData.map((item) => (
            <WeatherInformation
              key={item.date}
              date={item.date}
              dayMaxTemp={item.dailyMaxTemp}
              dayMinTemp={item.dailyMinTemp}
              unitTemp={item.unitTemperature}
              wmoCode={item.wmoCode}
              unitWind={item.unitWindSpeed}
              dayMaxWind={item.dailyWindSpeedMax}
            />
          ))}
      </div>
      <div className="control-container">
        <ThemeProvider theme={themeSwitch}>
          <FormControlLabel
            sx={{ color: 'white', mt: '1em' }}
            control={(
              <Switch
                onChange={changeMultiDayView}
              />
            )}
            label="Toggle between 1 and 3 day forecast"
          />
        </ThemeProvider>
        <ThemeProvider theme={themeButton}>
          <Button component={Link} to="/" variant="contained" color="neutral">Select city</Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default CityWeatherPage;
