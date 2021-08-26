import React, { useEffect, useState}  from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";


function Weather() {

 const [weather, setWeather] = useState([]); 
    const [form, setForm] = useState({
        City: "",
        Country: ""
      });

      const APIKEY = "57060af3cd5e59961517b54f658101c1";
      async function weatherData(e) {
        e.preventDefault();
        if (form.city == "" , form.country="") {
          //form validation will work!!
        } else {
          const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
          )
            .then((res) => res.json())
            .then((data) => data);
    
            setWeather({ data: data });
        }
      }
    

      const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        if (name == "city") {
          setForm({ ...form, city: value });
        }
        if (name == "country") {
          setForm({ ...form, country: value });
        }
    
      };

    return (
        <div className="container-fluid weather">
      <span className="title">Weather App</span>
      <br />
      <form class="was-validated">
       <div class="form-group">
        <input
          type="text"
          placeholder="city"
          name="city"
          required
          onChange={(e) => handleChange(e)}
        />
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        &nbsp; &nbsp; &nbsp;&nbsp;
        <div class="form-group">
        <input
          type="text"
          placeholder="Country"
          name="country"
          required
          onChange={(e) => handleChange(e)}
        />
        <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
      </div>
        <button className="btn btn-warning btn-lg btn-outline-danger getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
        </form>

        {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}


    </div>
      );
    }

    export default Weather;