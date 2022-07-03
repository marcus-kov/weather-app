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

  return (
    <Wrapper>
      <div className="flex flex-col justify-self-center text-center w-full lg:flex-row lg:w-full lg:items-center">
        <h4 className="text-3xl mx-4">{weatherData.name}</h4>
        <img
          className="w-4/12 self-center lg:w-2/6"
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="weather icon logo"
        />
        <p className="font-bold text-3xl lg:my-4">
          {Math.floor(weatherData.main.temp)}&#8451;
        </p>
      </div>
    </Wrapper>
  );
});
