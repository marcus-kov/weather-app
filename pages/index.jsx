import React, { useEffect, useState, useContext } from "react";
import { useQuery } from "react-query";
import { Header } from "../components/Header";
import AppContext from "../AppContext";

import {
  AirQualityCard,
  Card,
  CurrentLocationWeather,
} from "../components/Card";
import { getAirQuality, getWeather } from "../services/api";

const Home = () => {
  const contextValues = useContext(AppContext);

  const { location } = contextValues.state;
  const { setLocation } = contextValues;

  const [errorGettingLocation, setErrorGettingLocation] = useState(false);

  // Queries
  const {
    isLoading: isLoadingCurrentWeather,
    error: currentWeatherError,
    data: currentWeather,
  } = useQuery(
    ["currentWeather", `${location.lat}_${location.lon}`],
    () => getWeather(location),
    {
      enabled: !!location.lat,
    }
  );

  const {
    isLoading: isLoadingAirQuality,
    error: airQualityError,
    data: airQualityData,
  } = useQuery(
    ["airQuality", `${location.lat}_${location.lon}`],
    () => getAirQuality(location),
    {
      enabled: !!location.lat,
    }
  );

  const {
    isLoading: isLoadingCurrentWeatherNY,
    error: currentWeatherErrorNY,
    data: currentWeatherNY,
  } = useQuery("currentWeatherNY", () =>
    getWeather({ lat: 35.6762, lon: 139.6503 })
  );

  const {
    isLoading: isLoadingCurrentWeatherStch,
    error: currentWeatherErrorStch,
    data: currentWeatherStch,
  } = useQuery("currentWeatherStch", () =>
    getWeather({ lon: 18.0686, lat: 59.3293 })
  );

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          setErrorGettingLocation(true);
        }
      );
      setErrorGettingLocation(false);
    }
  }, []);

  return (
    <div className="py-12">
      <Header />
      <div className="mt-10">
        {errorGettingLocation && <div>Error getting your location</div>}

        <div className="flex items-center justify-evenly">
          {!isLoadingCurrentWeather && currentWeather && (
            <CurrentLocationWeather
              currentWeather={currentWeather}
              isLoading={isLoadingCurrentWeather}
            />
          )}
          <AirQualityCard
            airQualityData={airQualityData}
            isLoading={isLoadingAirQuality}
            error={airQualityError}
          />
        </div>

        <div className="px-7 m-5">
          <p className="mb-5">Major cities:</p>
          <div className="grid grid-cols-3 gap-3 px-7">
            <Card
              weatherData={currentWeatherNY}
              error={currentWeatherErrorNY}
              isLoading={isLoadingCurrentWeatherNY}
            />
            <Card
              weatherData={currentWeatherStch}
              error={currentWeatherErrorStch}
              isLoading={isLoadingCurrentWeatherStch}
            />
            <Card
              weatherData={currentWeatherStch}
              error={currentWeatherErrorStch}
              isLoading={isLoadingCurrentWeatherStch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
