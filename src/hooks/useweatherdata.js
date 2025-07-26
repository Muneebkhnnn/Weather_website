import { useEffect, useState } from "react";
import config from "../assets/config";

export default function useWeatherData(place) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedPlace, setDebouncedPlace] = useState(place);
  const [weatherData, setweatherData] = useState({});
  const key = config.openWeatherKey;

  // Debounce logic to prevent too many API calls
  useEffect(() => {
    setIsLoading(true);
    setData({});
    const handler = setTimeout(() => {
      setDebouncedPlace(place);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(handler);
  }, [place]);

 
  useEffect(() => {
    if (!debouncedPlace?.trim()) {
      setData({});
      setweatherData({});
      return;
    } // Prevents  empty call

    console.log(`🌐 Making API call for: ${debouncedPlace}`);

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${debouncedPlace}&appid=${key}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.error("API fetch error:", err));

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${debouncedPlace}&appid=${key}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => setweatherData(res))
      .catch((err) => console.error("API fetch error:", err));
  }, [debouncedPlace, key]);

  return { data, weatherData, isLoading };
}
