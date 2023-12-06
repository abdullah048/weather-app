'use client';
import { AreaChart, Card, Title } from '@tremor/react';
import { FC } from 'react';

interface HumidityChartProps {
  results: Root;
}

const HumidityChart: FC<HumidityChartProps> = ({ results }) => {
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
    'Humidity (%)': results.hourly.relativehumidity_2m[i],
  }));

  const dataFormatter = (number: number) => `${number}`;
  return (
    <Card>
      <Title>Humidity Levels</Title>
      <AreaChart
        data={data}
        className='mt-6'
        showLegend
        index='time'
        categories={['Humidity (%)']}
        colors={['teal']}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default HumidityChart;
