'use client';
import { Country, City } from 'country-state-city';
import { useState } from 'react';
import Select from 'react-select';
import { useRouter } from 'next/navigation';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

type CountryOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type CityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

type Props = {};

// HACK: transform all countries data to custom array so we can use it in react-select...
const countriesOptions = Country.getAllCountries().map(country => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const CityPicker = (props: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption>(null);
  const router = useRouter();

  function handleCountryChange(option: CountryOption) {
    setSelectedCountry(option);
    setSelectedCity(null);
  }

  function handleCityChange(option: CityOption) {
    setSelectedCity(option);
    router.push(
      `/location/${option?.value.latitude}/${option?.value.longitude}`
    );
  }

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <div className='flex space-x-2 items-center text-white/80'>
          <GlobeAltIcon className='h-5 w-5 text-white' />
          <label htmlFor='country'>Country</label>
        </div>
        <Select
          value={selectedCountry}
          options={countriesOptions}
          onChange={handleCountryChange}
        />
      </div>
      {selectedCountry && (
        <div className='space-y-2'>
          <div className='flex space-x-2 items-center text-white/80'>
            <GlobeAltIcon className='h-5 w-5 text-white' />
            <label htmlFor='country'>City</label>
          </div>
          <Select
            value={selectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map(city => ({
              value: {
                latitude: city.latitude ?? '',
                longitude: city.longitude ?? '',
                countryCode: city.countryCode,
                stateCode: city.stateCode,
                name: city.name,
              },
              label: city.name,
            }))}
            onChange={handleCityChange}
          />
        </div>
      )}
    </div>
  );
};

export default CityPicker;
