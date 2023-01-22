import React from "react";
import Icon from "./Icon";

const Current = ({ current_weather, daily }) => {
  const currentWeatherCode = current_weather.weathercode;

  const temperature_2m_max = daily.temperature_2m_max.map((x) => Math.round(x));
  const highTemperature = Math.max(...temperature_2m_max);

  const temperature_2m_min = daily.temperature_2m_min.map((x) => Math.round(x));
  const lowTemperature = Math.min(...temperature_2m_min);

  return (
    <>
      <h1>{Math.floor(`${current_weather.temperature}`)}&#176;</h1>
      <Icon current_weather={current_weather} />

      {currentWeatherCode === 0 && <p className="forecastText">Clear sky</p>}
      {currentWeatherCode === 1 && <p className="forecastText">Mainly clear</p>}
      {currentWeatherCode === 2 && (
        <p className="forecastText">Partly cloudy</p>
      )}
      {currentWeatherCode === 3 && <p className="forecastText">Overcast</p>}

      <p className="temperature">
        H {highTemperature}&#176; L {lowTemperature}&#176;
      </p>
      <br />
      <div className="grid">
        <div className="week">
          <div className="day-temp">
            <div>
              {daily.time.map((x) => (
                <p key={Math.random()}>{x}</p>
              ))}
            </div>
            <div>
              {temperature_2m_min.map((t) => (
                <p key={Math.random()}>{t}&#176; ----</p>
              ))}
            </div>
            <div>
              {temperature_2m_max.map((t) => (
                <p key={Math.random()}>{t}&#176;</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;
