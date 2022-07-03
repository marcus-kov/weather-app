import React from "react";
import { Wrapper } from "./Wrapper";
import { Spinner } from "../common";

export const CurrentLocationWeather = ({
  currentWeather,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>error.message</div>;
  }

  if (!currentWeather) {
    return null;
  }

  const mapTemperature = (val) => `${Math.floor(val)}`;

  return (
    <Wrapper classNames="text-center card-wrapper mb-5 lg:mg-0">
      <h4 className="text-3xl">{currentWeather.name}</h4>
      <p className="my-1">
          Humidity: {currentWeather.main.humidity}%
      </p>
      <img
          className="w-8/12 self-center"
        src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
        alt="weather icon"
      />
      <p className="font-bold text-5xl">
        {mapTemperature(currentWeather.main.temp)}&#8451;
      </p>
    </Wrapper>
  );
};
