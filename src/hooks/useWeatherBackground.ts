import { useState, useEffect } from 'react'

interface WeatherData {
  current: {
    is_day: boolean
    condition: {
      text: string
    }
  }
}

interface Background {
  day: {
    condition: string
    background: string
  }
  night: {
    condition: string
    background: string
  }
}

const useWeatherBackground = (
  weatherData: WeatherData | null,
  backgrounds: Background[]
): string => {
  const [background, setBackground] = useState<string>('')

  useEffect(() => {
    const filterBackground = (): void => {
      if (!weatherData) return

      const condition = weatherData.current.condition.text.toLowerCase()
      const isDay = weatherData.current.is_day

      const selectedBackground = backgrounds.find(
        (background) =>
          background.day.condition.toLowerCase() === condition ||
          background.night.condition.toLowerCase() === condition
      )

      if (selectedBackground) {
        setBackground(
          encodeURI(isDay ? selectedBackground.day.background : selectedBackground.night.background)
        )
      }
    }

    filterBackground()
  }, [weatherData?.current.condition.text, weatherData, backgrounds])

  return background
}

export default useWeatherBackground
