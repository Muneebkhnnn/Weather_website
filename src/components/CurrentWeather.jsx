import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import {WeatherLoader} from './index';
function CurrentWeather({ data, time, day, presentTemp, place, isloading }) {

  const placeName = data?.city?.name ? data.city.name : 'Enter valid name'
  const path = data?.list?.[0]
  const weatherIconCode = path?.weather?.[0]?.icon
  const weatherIconUrl = weatherIconCode
    ? `https://openweathermap.org/img/w/${weatherIconCode}.png`
    : '';
  const weatherDescription = path?.weather?.[0]?.description ? path.weather[0].description : 'Loading...'
  const feelsLike = path?.main?.feels_like
  const humidity = path?.main?.humidity
  const windSpeed = path?.wind?.speed
  const [showMessage, setShowMessage] = useState(true);


  const visibility = path?.visibility

  let visibilityMsg = "";
  if (visibility > 10000) visibilityMsg = "🔥 Excellent visibility";
  else if (visibility > 6000) visibilityMsg = "👌 Good visibility";
  else if (visibility >= 2000) visibilityMsg = "⚠️ Moderate (fog, haze)";
  else if (visibility >= 500) visibilityMsg = "💩 Poor visibility";
  else visibilityMsg = "💀 Dangerous (dense fog)";

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 10000);
    return () => clearTimeout(timer);
  }, [visibility, place]);

  const messageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.3 },
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  if (isloading)
    return (
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            Current Weather
          </h2>
          <div className="max-w-4xl mx-auto">
            <WeatherLoader />  
          </div>
        </div>
      </section>
    );


return (

  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Current Weather
      </h2>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg max-w-4xl mx-auto p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-700">{placeName}</h3>
            <p className="text-gray-500">
              {`${day || "Loading..."} • ${time || "Loading..."}`}
            </p>
            <div className="flex items-center justify-center md:justify-start mt-4">
              {weatherIconUrl && (
                <img
                  src={weatherIconUrl}
                  alt={weatherDescription || "weather"}
                  className="h-12 w-12 text-yellow-500 mr-2"
                />
              )}
              <span className="text-5xl font-bold text-gray-800">
                {presentTemp}°
              </span>
            </div>
            <p className="capitalize text-lg text-gray-700 mt-2">
              {weatherDescription}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-4 text-center relative">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <img
                src="https://img.icons8.com/?size=100&id=poFZHQZ-CjsC&format=png&color=000000"
                alt="temperature-icon"
                className="h-5 w-5 mx-auto mb-1"
              />
              <p className="text-sm text-gray-500">Feels Like</p>
              <p className="font-medium text-gray-800">{feelsLike}°</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <img
                src="https://img.icons8.com/?size=100&id=vBRvJEJ4dJMI&format=png&color=000000"
                alt="droplet"
                className="h-5 w-5 mx-auto mb-1"
              />
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="font-medium text-gray-800">{humidity}%</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <img
                src="https://img.icons8.com/?size=100&id=31842&format=png&color=000000"
                alt="wind"
                className="h-5 w-5 mx-auto mb-1"
              />
              <p className="text-sm text-gray-500">Wind</p>
              <p className="font-medium text-gray-800">{windSpeed} mph</p>
            </div>

            {/* Visibility Card */}
            <div className="bg-white p-3 rounded-lg shadow-sm relative">
              <img
                src="https://img.icons8.com/?size=100&id=105124&format=png&color=000000"
                alt="highway"
                className="h-5 w-5 mx-auto mb-1"
              />
              <p className="text-sm text-gray-500">Visibility</p>
              <p className="font-medium text-gray-800">{visibility} m</p>


              <AnimatePresence>
                {showMessage && (
                  <motion.div
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="hidden md:block absolute top-8 left-full ml-10"
                  >
                    <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                      {visibilityMsg}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}


export default CurrentWeather