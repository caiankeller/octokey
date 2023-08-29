import { useState, useEffect } from 'react'
import useWeatherBackground from '../hooks/useWeatherBackground'
import backgrounds from '../assets/backgrounds'

interface WeatherData {
  location: {
    name: string
    region: string
    country: string
  }
  current: {
    is_day: boolean
    condition: {
      text: string
    }
    wind_kph: number
    wind_dir: string
    humidity: number
    temp_c: number
  }
}

function Weather(): JSX.Element {
  const API_KEY = import.meta.env.VITE_WEATHER_API_TOKEN
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchWeatherData = async (): Promise<void> => {
      setIsLoading(true)
      try {
        const weatherDataFromCache = localStorage.getItem('weatherData') // lets cache this before the api owner try beat us up
        if (weatherDataFromCache) {
          const cachedData = JSON.parse(weatherDataFromCache)
          const cachedTimestamp = cachedData.timestamp
          const currentTime = new Date().getTime()

          if (currentTime - cachedTimestamp <= 10 * 60 * 1000) {
            setWeatherData(cachedData.data)
            setIsLoading(false)
            return
          }
        }

        const position = await new Promise<GeolocationPosition>((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        )

        const { latitude, longitude } = position.coords

        const cityResponse = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
        )
        const cityData = await cityResponse.json()
        const city = cityData.location.name

        const weatherResponse = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        )
        const weatherData = (await weatherResponse.json()) as WeatherData

        setWeatherData(weatherData)
        const cachedData = {
          data: weatherData,
          timestamp: new Date().getTime()
        }
        localStorage.setItem('weatherData', JSON.stringify(cachedData))
      } catch (error) {
        // OOPSIE 🥰 🥰 🥰
      }
      setIsLoading(false)
    }

    fetchWeatherData()
  }, [])

  const background = useWeatherBackground(weatherData, backgrounds)

  return (
    <div
      className="h-full w-full flex flex-col justify-end gap-2 bg-cover after:absolute after:h-full after:bg-black after:bg-opacity-20 after:top-0 after:w-full after:left-0 after:backdrop-blur-3xl after:mask-linear after:mask-dir-to-t after:mask-from-100 after:mask-via-90 after:mask-to-0 before:-z-10 [&>*]:z-10 relative outline-black outline-1 outline p-2 rounded text-white"
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      {!isLoading ? (
        <div>
          <p className="leading-none">Condition {weatherData?.current.condition.text}</p>
          <p className="leading-none">
            Wind {weatherData?.current.wind_kph} km/h from {weatherData?.current.wind_dir}
          </p>
          <p className="leading-none">Humidity {weatherData?.current.humidity}%</p>
          <p className="text-7xl font-title font-black tracking-tighter leading-none font-outline-1">
            {weatherData?.current.temp_c} °C
          </p>
          <p className="text-5xl font-title text-justify tracking-tight font-outline-1">
            {weatherData?.location.name}, {weatherData?.location.region},{' '}
            {weatherData?.location.country}
          </p>
        </div>
      ) : (
        <div className="absolute h-full bg-neutral-700 mix-blend-multiply top-0 w-full left-0 animate-pulse"></div>
      )}
    </div>
  )
}

export default Weather
