import Head from "next/head";
import React from "react";

const Layout = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="icons8-weather-64.svg"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="For every location on earth, the best forecast is available on Lightning fast weather forecast app. Weather data are provided in
          hourly resolution with 7 days forecast. Typically, the first 2-3 days
          hours are calculated with high resolution weather models, followed by
          global weather models up to 180 hours"
        />
        <title>Lightning Fast Weather Forecast App.</title>
      </Head>
    </div>
  );
};

export default Layout;
