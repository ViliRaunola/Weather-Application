import sun from '../icons/sun-solid.svg';
import partlyCloud from '../icons/cloud-sun-solid.svg';
import cloud from '../icons/cloud-solid.svg';
import fog from '../icons/smog-solid.svg';
import drizzle from '../icons/cloud-sun-rain-solid.svg';
import rainHeavy from '../icons/cloud-showers-heavy-solid.svg';
import rain from '../icons/cloud-rain-solid.svg';
import snow from '../icons/snowflake-solid.svg';
import thunder from '../icons/cloud-bolt-solid.svg';

const wmoInterpretation = [
  {
    code: 0,
    description: 'Clear sky',
    icon: sun,
  },
  {
    code: 1,
    description: 'Mainly clear',
    icon: partlyCloud,
  },
  {
    code: 2,
    description: 'Partly cloudy',
    icon: partlyCloud,
  },
  {
    code: 3,
    description: 'Overcast',
    icon: cloud,
  },
  {
    code: 45,
    description: 'Fog',
    icon: fog,
  },
  {
    code: 48,
    description: 'Depositing rime fog',
    icon: fog,
  },
  {
    code: 51,
    description: 'Light drizzle',
    icon: drizzle,
  },
  {
    code: 53,
    description: 'Moderate drizzle',
    icon: drizzle,
  },
  {
    code: 55,
    description: 'Dense drizzle',
    icon: drizzle,
  },
  {
    code: 56,
    description: 'Light freezing drizzle',
    icon: drizzle,
  },
  {
    code: 57,
    description: 'Dense freezing drizzle',
    icon: drizzle,
  },
  {
    code: 61,
    description: 'Slight rain',
    icon: rain,
  },
  {
    code: 63,
    description: 'Moderate rain',
    icon: rain,
  },
  {
    code: 66,
    description: 'Heavy rain',
    icon: rainHeavy,
  },
  {
    code: 66,
    description: 'Light freezing rain',
    icon: rain,
  },
  {
    code: 67,
    description: 'Heavy freezing rain',
    icon: rainHeavy,
  },
  {
    code: 71,
    description: 'Slight snow fall',
    icon: snow,
  },
  {
    code: 73,
    description: 'Moderate snow fall',
    icon: snow,
  },
  {
    code: 75,
    description: 'Heavy snow fall',
    icon: snow,
  },
  {
    code: 77,
    description: 'Snow grains',
    icon: snow,
  },
  {
    code: 80,
    description: 'Slight rain shower',
    icon: rain,
  },
  {
    code: 81,
    description: 'Moderate rain shower',
    icon: rain,
  },
  {
    code: 82,
    description: 'Violent rain shower',
    icon: rainHeavy,
  },
  {
    code: 85,
    description: 'Slight snow shower',
    icon: snow,
  },
  {
    code: 86,
    description: 'Heavy snow shower',
    icon: snow,
  },
  {
    code: 95,
    description: 'Thunderstorm',
    icon: thunder,
  },
  {
    code: 96,
    description: 'Thunderstorm with slight hail',
    icon: thunder,
  },
  {
    code: 99,
    description: 'Thunderstorm with heavy hail',
    icon: thunder,
  },
];

export default wmoInterpretation;
