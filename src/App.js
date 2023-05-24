import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";

const API_KEY = "1ce183462741c889496b80104c3c26f2";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    humidity: undefined,
    mainWeather: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;

    const api_call = await fetch(url);
    let data = await api_call.json();

    if (city && country) {
      try {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        mainWeather: data.weather[0].main,
        error: ""
      });
    } catch (err) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        mainWeather: undefined,
        error: "Неправильно введен город, либо страна. Проверьте пожалуйста!"
      });
    }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        mainWeather: undefined,
        error: "Пожалуйста заполните поля!"
      });
    }
  }
  render() {
    return (
      <div className="my-container">
        <Navbar />
        <Titles />
        <Form getWeather={this.getWeather} message={this.state.error}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          mainWeather={this.state.mainWeather}
          />
      </div>
    );
  }
};

export default App;