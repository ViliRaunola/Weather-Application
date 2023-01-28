/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { React, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CityCard({
  cityName, latitude, longitude, cityImageSource,
}) {
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

  const themeButton = createTheme({
    palette: {
      neutral: {
        main: 'rgba(70,70,70,0.5)',
        contrastText: '#fff',
      },
    },
  });

  return (
    <Card sx={{ width: 225, backgroundColor: 'rgba(20,20,20,0.8)' }}>
      <CardActionArea onClick={() => onSelectingCity(cityName, latitude, longitude)}>
        <CardMedia
          component="img"
          height="140"
          image={cityImageSource}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {cityName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center', marginBottom: '1em' }}>
        <ThemeProvider theme={themeButton}>
          <Button variant="contained" size="small" color="neutral" onClick={() => onSelectingCity(cityName, latitude, longitude)}>
            Check Weather
          </Button>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}

export default CityCard;
