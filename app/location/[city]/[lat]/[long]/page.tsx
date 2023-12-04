import { getClient } from '@src/apollo-client';
import fetchWeatherQuery from '@src/graphql/queries/fetchWeatherQuery';
import React from 'react';

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

const WeatherPage = async ({ params: { city, lat, long } }: Props) => {
  const client = getClient();
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: 'true',
      longitude: long,
      latitude: lat,
      timezone: 'GMT',
    },
  });
  const results: Root = data.myQuery;
  console.log(results);
  return (
    <div>
      {/* Information panel */}
      <div>
        <div>
          <div>
            <h2>Todays Overview</h2>
            <p>Last Updated at: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;

/**
 * https://api.open-meteo.com/v1/forecast?latitude=51.151&longitude=-0.13&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&current_weather=true&timezone=Europe%2FLondon
 */
