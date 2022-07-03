import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AppContext from "../AppContext";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });
  return (
    <AppContext.Provider
      value={{
        state: {
          location,
          majorCities: [
            {
              lat: 52.3676,
              lon: 4.9041,
              name: "Amsterdam",
            },
            {
              lat: 59.3293,
              lon: 18.0686,
              name: "Stockholm",
            },
            {
              lat: 55.6761,
              lon: 12.5683,
              name: "Copenhagen",
            },
          ],
        },
        setLocation,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
