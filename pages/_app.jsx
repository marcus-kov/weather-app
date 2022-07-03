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
              lat: 1,
              lon: 1,
              name: "Stockholm",
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
