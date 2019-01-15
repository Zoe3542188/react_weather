import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import ControlledTabs from "./components/ControlledTabs";
import Todo from "./components/Todo"

const api_key = "d925c5663594cafd93b82bc32feedb6a";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  fetchData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const weather_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${api_key}&units=metric`);
    const data = await weather_data.json();
    if(city&&country){
      console.log(data);
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:""
      })  
    }
    else{
        this.setState({
          temperature:undefined,
          city:undefined,
          country:undefined,
          humidity:undefined,
          description:undefined,
          error:"Please input your country and city."
      });  
    }
  }

  render() {
    return (
      <div className="AppContainer">
        <div className="App-header">
          <Titles />  
          <div className="App-space"></div>
          <Form fetchData = { this.fetchData }/> 
        </div> 
        <ControlledTabs />
        <div className="App-field">
          <div className="App-weather">
            <Weather
              temperature = { this.state.temperature } 
              city = { this.state.city }
              country = { this.state.country }
              humidity = { this.state.humidity }
              description = { this.state.description }
              error = {this.state.error}
            />
          </div>
          <div className="App-todo">
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
