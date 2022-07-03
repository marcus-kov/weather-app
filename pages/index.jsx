import React, { useEffect, useState, useContext } from "react";
import {useQueries, useQuery} from "react-query";
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

  const { location, majorCities } = contextValues.state;
  const { setLocation } = contextValues;

  const [errorGettingLocation, setErrorGettingLocation] = useState(false);

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

  const majorCitiesQuery = useQueries(
      majorCities.map(city => {
        return {
          queryKey: ['majorCities', city.name],
          queryFn: () => getWeather({ lat: city.lat, lon:city.lon }),
        }
      })
  )

  return (
    <div className="pt-5">
      <Header />
      <div className="mt-10">
        {errorGettingLocation && <div>Error getting your location</div>}

        <div className="flex items-center justify-evenly flex-col lg:flex-row">
          <CurrentLocationWeather
              currentWeather={currentWeather}
              isLoading={isLoadingCurrentWeather}
              error={currentWeatherError}
          />
          <AirQualityCard
            airQualityData={airQualityData}
            isLoading={isLoadingAirQuality}
            error={airQualityError}
          />
        </div>

        <div className="px-7 m-5">
          <p className="mb-5 text-center text-lg text-bold">Major cities:</p>
          <div className="grid gap-3 lg:grid-cols-3 lg:px-7">
            {majorCitiesQuery.map( result => (
                // eslint-disable-next-line react/jsx-key
                <Card
                    weatherData={result.data}
                    error={result.error}
                    isLoading={result.isLoading}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
