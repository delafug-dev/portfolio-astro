/**
 * Mapeo de códigos de WeatherAPI.com a iconos de Meteocons
 * Documentación: https://www.weatherapi.com/docs/weather_conditions.json
 * Iconos: https://basmilius.github.io/weather-icons/index-line.html
 */

export interface WeatherIconMap {
  icon: string;
  name: string;
}

export const weatherIconMap: Record<number, WeatherIconMap> = {
  // Sunny / Clear
  1000: { icon: "clear-day", name: "Despejado" },

  // Partly cloudy
  1003: { icon: "partly-cloudy-day", name: "Parcialmente nublado" },

  // Cloudy
  1006: { icon: "cloudy", name: "Nublado" },
  1009: { icon: "overcast", name: "Cubierto" },

  // Mist / Fog
  1030: { icon: "mist", name: "Neblina" },
  1135: { icon: "fog", name: "Niebla" },
  1147: { icon: "fog", name: "Niebla helada" },

  // Drizzle / Light rain
  1063: { icon: "partly-cloudy-day-drizzle", name: "Llovizna" },
  1150: { icon: "drizzle", name: "Llovizna ligera" },
  1153: { icon: "drizzle", name: "Llovizna" },
  1168: { icon: "drizzle", name: "Llovizna helada" },
  1171: { icon: "drizzle", name: "Llovizna helada fuerte" },

  // Rain
  1180: { icon: "partly-cloudy-day-rain", name: "Lluvia ligera" },
  1183: { icon: "rain", name: "Lluvia ligera" },
  1186: { icon: "rain", name: "Lluvia moderada" },
  1189: { icon: "rain", name: "Lluvia moderada" },
  1192: { icon: "rain", name: "Lluvia fuerte" },
  1195: { icon: "rain", name: "Lluvia fuerte" },
  1198: { icon: "rain", name: "Lluvia helada ligera" },
  1201: { icon: "rain", name: "Lluvia helada fuerte" },
  1240: { icon: "rain", name: "Chubascos ligeros" },
  1243: { icon: "rain", name: "Chubascos moderados" },
  1246: { icon: "rain", name: "Chubascos fuertes" },

  // Snow
  1066: { icon: "partly-cloudy-day-snow", name: "Nieve" },
  1114: { icon: "snow", name: "Ventisca" },
  1210: { icon: "snow", name: "Nieve ligera" },
  1213: { icon: "snow", name: "Nieve ligera" },
  1216: { icon: "snow", name: "Nieve moderada" },
  1219: { icon: "snow", name: "Nieve moderada" },
  1222: { icon: "snow", name: "Nieve fuerte" },
  1225: { icon: "snow", name: "Nieve fuerte" },
  1237: { icon: "hail", name: "Granizo" },
  1255: { icon: "snow", name: "Chubascos de nieve ligeros" },
  1258: { icon: "snow", name: "Chubascos de nieve moderados" },
  1261: { icon: "hail", name: "Chubascos de granizo ligeros" },
  1264: { icon: "hail", name: "Chubascos de granizo fuertes" },

  // Sleet
  1069: { icon: "sleet", name: "Aguanieve" },
  1072: { icon: "sleet", name: "Llovizna helada" },
  1204: { icon: "sleet", name: "Aguanieve ligera" },
  1207: { icon: "sleet", name: "Aguanieve moderada" },
  1249: { icon: "sleet", name: "Chubascos de aguanieve ligeros" },
  1252: { icon: "sleet", name: "Chubascos de aguanieve moderados" },

  // Thunder
  1087: { icon: "thunderstorms", name: "Tormenta" },
  1273: { icon: "thunderstorms-rain", name: "Lluvia con tormenta" },
  1276: { icon: "thunderstorms-rain", name: "Lluvia fuerte con tormenta" },
  1279: { icon: "thunderstorms-snow", name: "Nieve con tormenta" },
  1282: { icon: "thunderstorms-snow", name: "Nieve fuerte con tormenta" },

  // Blizzard
  1117: { icon: "snow", name: "Ventisca" },
};

/**
 * Obtiene el icono correspondiente al código de clima
 * Si no encuentra el código, devuelve un icono por defecto
 */
export function getWeatherIcon(
  code: number,
  isDay: boolean = true
): WeatherIconMap {
  const weather = weatherIconMap[code];

  if (!weather) {
    // Fallback por defecto
    return { icon: "cloudy", name: "Nublado" };
  }

  // Reemplazar "day" por "night" si es de noche
  if (!isDay && weather.icon.includes("day")) {
    weather.icon = weather.icon.replace("day", "night");
  }

  return weather;
}

/**
 * Datos por defecto cuando falla la API
 */
export const defaultWeatherData = {
  temp_c: 26.2,
  condition: {
    text: "Nublado",
    code: 1006,
    icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
  },
  is_day: 1,
};
