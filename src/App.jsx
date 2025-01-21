import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import Autumn from './assets/autumn.jpg';
import Winter from './assets/winter.jpg';
import Cloudy from './assets/cloudy.jpg';
import Rainy from './assets/rainny.jpg';
import Sunny from './assets/sunny.jpg';
import Spring from './assets/spring.jpg';

const cardWeather = [
  {
    cityName: "New York",
    condition: "Autumn",
    comment: "Sunshine and crisp air, birds and calmness, year’s end and day’s beginnings.",
    temperature: "13°C",
    image: Autumn
  },
  {
    cityName: "Ottawa",
    condition: "Winter",
    comment: "For many, winter is a time of rest and reflection, a chance to slow down and appreciate the stillness.",
    temperature: "1°C",
    image: Winter
  },
  {
    cityName: "London",
    condition: "Cloudy",
    comment: "When the sky is overcast with clouds, it often creates a calm, tranquil atmosphere that can be quite soothing.",
    temperature: "8°C",
    image: Cloudy
  },
  {
    cityName: "Kampala",
    condition: "Rainy",
    comment: "There's something soothing about the sound of raindrops tapping against windows and the fresh, earthy scent that fills the air.",
    temperature: "10°C",
    image: Rainy
  },
  {
    cityName: "Kampala",
    condition: "Sunny",
    comment: "The clear blue sky and abundant sunlight can boost our mood and energy levels, making us feel more vibrant and alive. ",
    temperature: "34°C",
    image: Sunny
  },
  {
    cityName: "Tokyo",
    condition: "Spring",
    comment: "Spring brings a burst of color and new life, with flowers blooming and the air filled with the scent of blossoms.",
    temperature: "15°C",
    image: Spring
  },
  
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cardWeather.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
    <h1 className='head'>{cardWeather[currentIndex].cityName} Weather</h1>
      <WeatherCard
        cityName={cardWeather[currentIndex].cityName}
        condition={cardWeather[currentIndex].condition}
        comment={cardWeather[currentIndex].comment}
        temperature={cardWeather[currentIndex].temperature}
        image={cardWeather[currentIndex].image}
      />
      <div className='buttons'>
        <button onClick={handlePrev} disabled={currentIndex === 0} className="button">
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === cardWeather.length - 1}
          className="button"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
