import { randomInRange } from '@/utils/randomInRange';
import { sleep } from '@/utils/sleep';
import { useEffect, useState } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(null);
  const [error, setError] = useState(false);

  const fetchTime = async () => {
    setTime(null);
    setError(false);

    await sleep(randomInRange(1000, 3000));

    try {
      const response = await fetch('/api/time');

      if (!response.ok) {
        throw new Error('Failed to fetch internal time API');
      }

      const { time } = await response.json();

      if (!time) {
        throw new Error("Time wasn't found");
      }

      setTime(time);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchTime();
  }, []);

  return {
    time,
    error,
    fetchTime,
  };
};
