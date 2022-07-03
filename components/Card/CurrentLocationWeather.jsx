import React from "react";
import { Wrapper } from "./Wrapper";

export const CurrentLocationWeather = ({ currentWeather }) => (
  <Wrapper classNames="text-center">
    <h4 className="text-3xl">{currentWeather.name}</h4>
    <img
      src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
      alt="weather icon"
    />
    <p className="font-bold text-5xl">
      {Math.floor(currentWeather.main.temp)}&#8451;
    </p>
    <p>{currentWeather.weather.description}</p>
  </Wrapper>
);
