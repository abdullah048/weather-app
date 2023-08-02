'use client';

import CityPicker from '@src/components/CItyPicker';
import { Card, Divider, Subtitle, Text } from '@tremor/react';

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-[#394f68] to-[#183b7e] p-10 flex flex-col justify-center'>
      <Card className='text-center max-w-5xl mx-auto'>
        <Text className='text-6xl font-bold mb-10'>Weather App</Text>
        <Subtitle className='text-xl'>
          Powered by Next 13.3, tailwind CSS, Tremor 2.0
        </Subtitle>
        <Divider className='my-10' />

        <Card className='bg-gradient-to-br from-[#394f68] to-[#183b7e]'>
          <CityPicker />
        </Card>
      </Card>
    </main>
  );
}
