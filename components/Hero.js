import Image from "next/image";
import clearSky from "../public/clear-sky.jpg";
import cloudySky from "../public/cloudy-sky.jpg";
import sunnySky from "../public/sunny-sky.jpg";
import rain from "../public/rain.jpg";
import snow from "../public/snow.jpg";
import thunderstorm from "../public/thunderstorm.jpg";

const Hero = ({ current_weather }) => {
  const currentWeatherCode = current_weather.weathercode;
  return (
    <div className="bg">
      {currentWeatherCode === 0 && (
        <Image
          className="bg-2nd"
          src={sunnySky}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {currentWeatherCode === 1 && (
        <Image
          className="bg-2nd"
          src={clearSky}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {currentWeatherCode === 2 && (
        <Image
          className="bg-2nd"
          src={cloudySky}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {currentWeatherCode === 3 && (
        <Image
          className="bg-2nd"
          src={cloudySky}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {currentWeatherCode >= 61 && currentWeatherCode <= 67 && (
        <Image
          className="bg-2nd"
          src={rain}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {currentWeatherCode >= 71 && currentWeatherCode <= 86 && (
        <Image
          className="bg-2nd"
          src={snow}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {currentWeatherCode === 96 && (
        <Image
          className="bg-2nd"
          src={thunderstorm}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {currentWeatherCode === 99 && (
        <Image
          className="bg-2nd"
          src={thunderstorm}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
    </div>
  );
};

export default Hero;
