import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import Weather from "./components/Weather";
import Fitbit from "./components/Fitbit";

class App extends Component {
  state = {
    weather: {},
    loading: true
  };

  componentDidMount() {
    this.getWeather();
  }

  getWeather = (
    cityName = "Waukesha",
    apiKey = "ff4017eac9d083cd5c45a59b256019a3"
  ) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      )
      .then(response => {
        this.setState({ weather: { ...response.data }, loading: false });
      })
      .catch(error => console.log("error fetching and parsing data", error));
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="wrapper">
            <Weather data={this.state.weather} />
            <Fitbit />
          </div>
        )}
      </div>
    );
  }
}

export default App;
