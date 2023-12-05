'use client';
import { FC } from 'react';
import { Callout } from '@tremor/react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid';
interface CalloutCardProps {
  message: string;
  warning?: boolean;
}

const CalloutCard: FC<CalloutCardProps> = ({ message, warning }) => {
  return (
    <Callout
      className='mt-4'
      title={message}
      icon={warning ? ExclamationTriangleIcon : CheckCircleIcon}
      color={warning ? 'rose' : 'teal'}
    />
  );
};

export default CalloutCard;
