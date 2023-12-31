import { FC } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import CityPicker from './CItyPicker';
import Image from 'next/image';
import weatherCodeToString from '@src/lib/weatherCodeToString';

interface InformationPanelProps {
  city: string;
  lat: string;
  long: string;
  results: Root;
}

const InformationPanel: FC<InformationPanelProps> = ({
  city,
  lat,
  long,
  results,
}) => {
  return (
    <div className='bg-gradient-to-br from-[#394f68] to-[#183b7e] p-10'>
      <div className='pb-5'>
        <h1 className='text-5xl font-bold text-white'>{decodeURI(city)}</h1>
        <p className='text-xs text-gray-400'>
          Lat/Long: {lat}, {long}
        </p>
      </div>
      <CityPicker />

      <hr className='my-10' />
      <div className='mt-5 flex items-center justify-between space-x-10 mb-5'>
        <div>
          <p className='text-white text-xl'>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className='text-white font-extralight'>
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className='text-white text-xl font-bold uppercase'>
          {new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
      </div>
      <hr className='mt-10 mb-5' />
      <div className='flex items-center justify-between'>
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            width={75}
            height={75}
            alt={weatherCodeToString[results.current_weather.weathercode].label}
          />
          <div className='flex items-center justify-between space-x-10'>
            <p className='text-white text-5xl font-semibold'>
              {results.current_weather.temperature.toFixed(1)}˚C
            </p>
            <p className='text-white text-right font-extralight text-lg'>
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
      <div className='space-y-2 py-5'>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]'>
          <SunIcon className='h-10 w-10 text-gray-400' />
          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight text-white'>Sunrise</p>
            <p className='uppercase text-2xl text-white'>
              {new Date(results.daily.sunrise[0]).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]'>
          <MoonIcon className='h-10 w-10 text-gray-400' />
          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight text-white'>Sunset</p>
            <p className='uppercase text-2xl text-white'>
              {new Date(results.daily.sunset[0]).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
