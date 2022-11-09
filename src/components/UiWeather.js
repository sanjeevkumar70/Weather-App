import React from 'react'

import './UiWeather.css';
function UiWeather({text}) {
    return (
        <>
            <div className="container">
               
                <div className="current-info">
                    <div className="date-container">
                        <div className="time" id="time">
                            27 °C
                        </div>
                        <div className="others" id="current-weather-items">
                            <div>
                                <p><span>FEELS LIKE:{text.temp.toFixed()}°C</span> &nbsp; &nbsp;<span>WIND:{text.speed}</span> &nbsp; &nbsp;<span>VISIBILITY:{text.visibility}Km</span></p>  
                            </div>
                            <div>
                            <p><span>HUMIDITY:{text.visibility}</span> &nbsp; &nbsp;<span>PRESSURE:{text.pressure}mb</span> &nbsp; &nbsp;<span>DEW POINT:{text.Visibility}</span></p>   
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="future-forecast">
           
                <div className="weather-forecast" id="weather-forecast">
                    <div className="weather-forecast-item">
                        <div className="day">Today</div>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                        <div className="temp">Night - 25.6&#176; C</div>
                        <div className="temp">Day - 35.6&#176; C</div>
                    </div>
                    <div className="weather-forecast-item">
                        <div className="day">Tue</div>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                        <div className="temp">Night - 25.6&#176; C</div>
                        <div className="temp">Day - 35.6&#176; C</div>
                    </div>
                    <div className="weather-forecast-item">
                        <div className="day">Wed</div>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                        <div className="temp">Night - 25.6&#176; C</div>
                        <div className="temp">Day - 35.6&#176; C</div>
                    </div>
                    <div className="weather-forecast-item">
                        <div className="day">Thu</div>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                        <div className="temp">Night - 25.6&#176; C</div>
                        <div className="temp">Day - 35.6&#176; C</div>
                    </div>
                    <div className="weather-forecast-item">
                        <div className="day">Fri</div>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                        <div className="temp">Night - 25.6&#176; C</div>
                        <div className="temp">Day - 35.6&#176; C</div>
                    </div>
                    <div className="weather-forecast-item">
                        <div className="day">Sat</div>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                        <div className="temp">Night - 25.6&#176; C</div>
                        <div className="temp">Day - 35.6&#176; C</div>
                    </div>
                    <div className="weather-forecast-item">
                        <div className="day">Sun</div>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                        <div className="temp">Night - 25.6&#176; C</div>
                        <div className="temp">Day - 35.6&#176; C</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UiWeather
