'use client';
import { AreaChart, Card, Title } from '@tremor/react';
import { FC } from 'react';

interface RainChartProps {
  results: Root;
}

const RainChart: FC<RainChartProps> = ({ results }) => {
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
    'Rain (%)': results.hourly.precipitation_probability[i],
  }));

  const dataFormatter = (number: number) => `${number}`;
  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        data={data}
        className='mt-6'
        showLegend
        index='time'
        categories={['Rain (%)']}
        colors={['blue']}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default RainChart;
