
import React, {useState} from 'react'
import './App.css'
function App() {

  const apiKey = '09703711003d56c768ad94cd0f56bc6d'
  const [weatherData, setWeatherData] =useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event) =>{
    if (event.key == "Enter" ) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}').then(
        Response => Response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")

        }
      )
      
    }
  }
  return (
    <div className="container">
    <input
     className="input" 
     placeholder="Enter City..."
     onChange={e => setCity(e.target.value)}
     value={city} 
     onKeyPress={getWeather}
     />
     
     { typeof weatherData.main == 'undefined' ? (
      <div>
        <p> welcome to weather app! Enter in a city to get the weather of.</p>
      </div>

     ): (
      <div className=''weatherData>
      <p className='city'>{weatherData.name}</p>
      <p className='temp'>{Math.round(weatherData.main.temp)}°</p>
      <p className='weather'>{weatherData.weather[0].main}</p>
      </div>
     )}
     {weatherData.cod === "404"? (
      <p> City not found</p>

     ) : (
      <p>
        
      </p>
     )}
     {weatherData.cod === "401"? (
      <p> APIkey not found</p>

     ) : (
      <p>
        
      </p>
     )}

    </div>
  )
}


export default App