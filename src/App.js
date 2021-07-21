import React, { useEffect, useState } from 'react';
import './App.css';
import { FcSearch } from "react-icons/fc";
import { WiDayRain } from "react-icons/wi";
import {FaTemperatureHigh,FaTemperatureLow } from "react-icons/fa";
import { WiHumidity} from "react-icons/wi";
function App() {
  const [city,setCity] = useState(null);
  const [search,setSearch] = useState('Mumbai');
  useEffect(()=>{
    const fetchapi= async()=>{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3959f10e63616528157c8bf2669444fa`);
      const data = await response.json();
      console.log(data.main);
      setCity(data.main);
    }
    fetchapi();
  },[search])
  return (
    
    <div className='main-div'>
      <h1>Weather App</h1>
     <div className='search'>
     
     <input type='search' placeholder='search city here...'  value={search} onChange={(e)=>{
      setSearch(e.target.value);
     }} />
     </div>
     {!city ? (<p>No Data Found</p>):(
      <div className='content'>
     <h1><WiDayRain size='2em' color='lightblue' className='weather'/> {search}</h1>
   <h2>{city.temp} °C</h2>
   <h3><FaTemperatureHigh/>Min-Temp : {city.temp_min} °C</h3>
   <h3><FaTemperatureLow />Max-Temp : {city.temp_max} °C </h3>
   <h3><WiHumidity />Humidity : {city.humidity}</h3>

    </div>

     )}
     </div>
  );
}

export default App;
