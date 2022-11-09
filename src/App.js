
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './components/HomePage';
import UiWeather from './components/UiWeather';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    description: "",
    feels_like: 0,
    visibility: 0,
    pressure: 0,
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
    wind: 0,

  })

  const handleClick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=778a8b21b0ca64382c8b5081c070ac24`)
      .then((response) => {
        console.log(response.data);
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp - 273,
          temp_min: response.data.main.temp_min,
          temp_max: response.data.main.temp_max,
          humidity: response.data.main.humidity,
          feels_like: response.data.main.feels_like,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
          visibility: response.data.visibility / 1000,
          speed: response.data.wind.speed,
          pressure: response.data.main.pressure,
        })

      })
  }

  return (
    <>
      <div className='body'>
        <div className="App">
      
          <input type="text" className='inp-box' value={city} onChange={(e) => {
            setCity(e.target.value)
          }} />
          <span>
            <i className="fa-solid fa-magnifying-glass text-light  mx-4" onClick={handleClick}></i>
          </span>

        </div>

        {/* <HomePage text={data}/> */}
        <UiWeather text={data} />
          </div>
      </>
      );
}

      export default App;
