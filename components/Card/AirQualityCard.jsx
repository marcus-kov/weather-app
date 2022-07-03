import React from "react";
import { Spinner } from "../common";
import { Wrapper } from "./Wrapper";

const mapAirQuality = (aiqIndex) => {
  const values = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very poor",
  };

  return values[aiqIndex];
};

export const AirQualityCard = ({ airQualityData, isLoading, error }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>error.message</div>;
  }

  if (!airQualityData) {
    return null;
  }

  return (
    <Wrapper classNames="text-center">
      <h4 className="text-3xl mx-4 ">Air Quality</h4>
      <div className="flex flex-col items-center">
        <img src={`/assets/${airQualityData.list[0].main.aqi}-air.png`} />
        <p className="font-bold text-3xl my-4">
          {mapAirQuality(airQualityData.list[0].main.aqi)}
        </p>
      </div>

      <p>PM 2.5 {airQualityData.list[0].components.pm2_5}</p>
      <p>PM 10 {airQualityData.list[0].components.pm10}</p>
    </Wrapper>
  );
};
