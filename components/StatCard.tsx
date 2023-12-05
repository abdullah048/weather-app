'use client';
import { Card, Color, Metric, Text } from '@tremor/react';
import { FC } from 'react';

interface StatCardProps {
  title: string;
  metric: string;
  color?: Color;
}

const StatCard: FC<StatCardProps> = ({ color, metric, title }) => {
  return (
    <Card decorationColor={color} decoration='top'>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
};

export default StatCard;
