/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function CitySelectionCard({
  cityName, latitude, longitude, cityImageSource, setSelectedCity,
}) {
  return (
    <Card sx={{ width: 225, backgroundColor: 'rgb(20,20,20)' }}>
      <CardActionArea onClick={() => setSelectedCity(cityName, latitude, longitude)}>
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
      <CardActions>
        <Button variant="outlined" size="small" color="primary" onClick={() => setSelectedCity(cityName, latitude, longitude)}>
          Check Weather
        </Button>
      </CardActions>
    </Card>
  );
}

export default CitySelectionCard;
