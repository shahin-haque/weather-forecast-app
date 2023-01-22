import Image from "next/image";
import clearSky from "../public/clear-sky.jpg";
import cloudySky from "../public/cloudy-sky.jpg";
import sunnySky from "../public/sunny-sky.jpg";
import rain from "../public/rain.jpg";
import snow from "../public/snow.jpg";
import thunderstorm from "../public/thunderstorm.jpg";

const Hero = ({ wcode }) => {
  console.log(wcode);

  return (
    <div className="bg">
      {wcode === 0 && (
        <Image
          className="bg-2nd"
          src={sunnySky}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {wcode === 1 && (
        <Image
          className="bg-2nd"
          src={clearSky}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {wcode === 2 && (
        <Image
          className="bg-2nd"
          src={cloudySky}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {wcode === 3 && (
        <Image
          className="bg-2nd"
          src={cloudySky}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {wcode >= 61 && wcode <= 67 && (
        <Image
          className="bg-2nd"
          src={rain}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {wcode >= 71 && wcode <= 86 && (
        <Image
          className="bg-2nd"
          src={snow}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {wcode === 96 && (
        <Image
          className="bg-2nd"
          src={thunderstorm}
          alt="current_weather_image"
          priority
          width={500}
          height={500}
        />
      )}
      {wcode === 99 && (
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
