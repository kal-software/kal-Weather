import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { MdOutlineWater } from "react-icons/md";
import axios from "axios";
function Wether() {
  const [temprature, setTemprature] = useState(24);
  const [location, setLocation] = useState("New Work");
  const [humidity, setHumidity] = useState('64');
  const [windSpeed, setWindSpeed] = useState('18');

  function getLocation(event) {
    setLocation(event.target.value);
  }
  function getTemprature() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a9276c0e75eb42093398230763e8fd0c`).then((res) =>{
      
    setTemprature(res.data.main.temp);
        setHumidity(res.data.main.humidity);
        setWindSpeed(res.data.wind.speed)
      });
  }

  function getHumidity() {

  }
  function getWindSpeed() {}
  return (
    <div>
        <h3 className="weather-h3">Simple weather App</h3>
      <div className="container">
        <div className="inputContainer">
          <div>
            <input
              type="text"
              placeholder="Enter Country"
              className="inputCountry"
              onChange={getLocation}
            />
          </div>
          <div onClick={getTemprature}>
            <CiSearch className="search" />
          </div>
        </div>
        <div className="image-div">
          <img
            src="./sunny image.jpg"
            width="100px"
            height="100px"
          />
        </div>
        <div className="temprature-container">
          <p className="temprature">{temprature}&deg;C</p>
          <p className="location">{location}</p>
        </div>
        <div className="allContainer">
          <div className="humidity-container">
            <MdOutlineWater className="humidity-icon" />
            <p className="humidity-p">{humidity} %<br/>humidity</p>
          </div>
          <div className="wind-container">
            <FaWind className="humidity-icon" />
            <p className="humidity-p">{windSpeed} kh/hr<br/>wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wether;
