import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Customer from "./components/Customer";
import { Tab, Tabs, Table,ListGroup } from 'react-bootstrap';

const api_key = "d925c5663594cafd93b82bc32feedb6a";
let message;
export default function App(props) {
  const [key, setKey] = useState(1);
  const [city, setCity] = useState("");
  const [isrefresh, setIsrefresh] = useState(false);

  useEffect(async () => {
    document.title = `${city} Daily Weather`;
    if(key === 1){
      try{
        const weather_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=${api_key}&units=metric`);
        const data = await weather_data.json();
        console.log(data);
        message =           
          <div className="Weather-card">
            <p>Location:{"      "}{data.name},{data.sys.country}</p>
            <p>Description:{"      "}{data.weather[0].description}</p>
            <p>Temperature:{"      "}{data.main.temp}C°</p>
            <p>Humidity:{"      "}{data.main.humidity}%</p>
          </div>;
      }
      catch(e){
        message = <p>Please select "Forecast" or "Current" then type in a city name and press 'Find Weather'</p>
      };}
    else{
      try{
        const forcast_data = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${api_key}&units=metric`);
        const fdata = await forcast_data.json();
        console.log(fdata)
        message = 
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Date&time</th>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
            {fdata.list.map(item=>(
            <tr   key={item[0]}>
                <td>{item.dt_txt}</td>
                <td>{item.main.temp}C°</td>
                <td>{item.main.humidity}%</td>
                <td>{item.weather[0].description}</td>
              </tr>
              ))}
          </tbody>
          </Table>
      }
      catch(e){};
      }
  });

  function handleSelect(key){
    setKey(key);
  }

  return (
    <div className="AppContainer">
      <div className="App-header">
        <div className="App-customer">
         <Customer />
        </div>
        <div className = "Header-items">
          <Titles />  
          <div className="App-space"></div>
          <Form onSubmit={cityinfo => {setIsrefresh(!isrefresh);setCity(cityinfo)}}/>
        </div>
      </div> 
      <Tabs className="Tab-list" activeKey={key} onSelect={handleSelect}>
        <Tab eventKey={1} title=" Current "></Tab>
        <Tab eventKey={2} title=" Forecast "></Tab>
      </Tabs>
      <div className="App-field">
        <div className="App-todo">
          <Todo />
        </div>
        <div className="App-weather">{message}</div>
      </div>
    </div>
  );
}
