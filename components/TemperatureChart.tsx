'use client';
import { AreaChart, Card, Title } from '@tremor/react';
import { FC } from 'react';

interface TemperatureChartProps {
  results: Root;
}

const TemperatureChart: FC<TemperatureChartProps> = ({ results }) => {
  const hourlyTransformed = results?.hourly.time
    .map(t =>
      new Date(t).toLocaleString('en-US', {
        hour: 'numeric',
        hour12: false,
      })
    )
    .slice(0, 24);

  const data = hourlyTransformed.map((hour, i) => ({
    time: Number(hour),
    'UV Index': results.hourly.uv_index[i],
    'Temperature (C)': results.hourly.temperature_2m[i],
  }));

  const dataFormatter = (number: number) => `${number}`;

  return (
    <Card>
      <Title>Temperature & UV Index</Title>
      <AreaChart
        data={data}
        className='mt-6'
        showLegend
        index='time'
        categories={['Temperature (C)', 'UV Index']}
        colors={['yellow', 'rose']}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default TemperatureChart;
