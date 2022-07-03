import React from "react";
import { Spinner } from "../common";
import { Wrapper } from "./Wrapper";

// eslint-disable-next-line react/display-name
export const Card = React.memo(({ weatherData, error, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  //className="flex px-2 shadow drop-shadow-md justify-self-center"
  return (
    <Wrapper>
      <div className="w-2/6 h-auto  items-center flex flex-row justify-self-center">
        <h4 className="text-3xl mx-4 ">{weatherData.name}</h4>
        <p className="font-bold text-3xl my-4">
          {Math.floor(weatherData.main.temp)}&#8451;
        </p>
        <p>{weatherData.main.description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="weather icon logo"
        />
      </div>
    </Wrapper>
  );
});
