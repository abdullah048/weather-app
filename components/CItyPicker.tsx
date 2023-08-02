'use client';
import { Country } from 'country-state-city';
import Select from 'react-select';
type Props = {};

// HACK: transform all countries data to custom array so we can use it in react-select...
const options = Country.getAllCountries().map(country => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const CityPicker = (props: Props) => {
  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default CityPicker;
