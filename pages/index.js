import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";
import cloudySky from "../public/cloudy-sky.jpg";

const Home = ({ weather }) => {
  const { current_weather, hourly, daily } = weather;

  const currentWeatherCode = current_weather.weathercode;
  return (
    <main>
      <div className="img">
        <Hero wcode={currentWeatherCode} />
      </div>
      <div className="info">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quas
          harum enim magni dignissimos soluta repudiandae perspiciatis beatae?
          Quos mollitia recusandae unde distinctio cumque, alias quod temporibus
          excepturi eos laborum.
        </h1>
      </div>
    </main>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=43.05&longitude=10.89&hourly=temperature_2m,apparent_temperature,precipitation,weathercode&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum&current_weather=true&precipitation_unit=inch&timezone=auto`
  );
  const data = await res.json();
  return {
    props: {
      weather: data,
    },
  };
};
