import React from 'react'
import ForecastCard from './ForecastCard';
import forecast from '../utils/forecastData';

function Forecast({ data }) {

  const daysForecast = forecast(data)

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">
          5-Day Forecast
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Plan your week with confidence
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto ">

          {daysForecast.map((data, idx) => (
            <ForecastCard
              key={data.date || idx}
              day={data.day}
              icon={`https://openweathermap.org/img/w/${data.maxFrequencyIcon}.png`}
              high={data.max_temp}
              low={data.min_temp}
              condition={data.maxFrequencyDescription}
            />
          ))}

        </div>
      </div>
    </section >
  )
}

export default Forecast;