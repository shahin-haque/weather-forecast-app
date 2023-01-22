import Image from "next/image";
import React from "react";
import windy from "../public/icons8-windy-weather.gif";
import cloudy from "../public/icons8-partly-cloudy-day.gif";
import rain from "../public/icons8-rain.gif";
import sun from "../public/icons8-sun.gif";
import rainHeavy from "../public/icons8-heavy-rain.gif";

const Icon = ({ current_weather }) => {
  const currentWeatherCode = 2;

  return (
    <div>
      <div className="icon">
        {currentWeatherCode === 0 && (
          <Image
            className="icon-2nd"
            src={sun}
            alt="current_weather_image"
            priority
            width={50}
            height={50}
          />
        )}
        {currentWeatherCode === 1 && (
          <Image
            className="icon-2nd"
            src={sun}
            alt="current_weather_image"
            priority
            width={50}
            height={50}
          />
        )}
        {currentWeatherCode === 2 && (
          <Image
            className="icon-2nd"
            src={cloudy}
            alt="current_weather_image"
            priority
            width={50}
            height={50}
          />
        )}
        {currentWeatherCode === 3 && (
          <Image
            className="icon-2nd"
            src={windy}
            alt="current_weather_image"
            priority
            width={50}
            height={50}
          />
        )}
        {currentWeatherCode >= 61 && currentWeatherCode <= 67 && (
          <Image
            className="icon-2nd"
            src={rain}
            alt="current_weather_image"
            priority
            width={50}
            height={50}
          />
        )}
        {currentWeatherCode >= 71 && currentWeatherCode <= 86 && (
          <Image
            className="icon-2nd"
            src={snow}
            alt="current_weather_image"
            priority
            width={50}
            height={50}
          />
        )}
        {currentWeatherCode === 96 && (
          <Image
            className="icon-2nd"
            src={windy}
            alt="current_weather_image"
            priority
            width={50}
            height={50}
          />
        )}
        {currentWeatherCode === 99 && (
          <Image
            className="icon-2nd"
            src={windy}
            alt="current_weather_image"
            priority
            width={50}
            height={50}
          />
        )}
      </div>
    </div>
  );
};

export default Icon;
