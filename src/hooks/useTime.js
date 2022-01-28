import { useEffect, useState } from 'react';
import sleep from '@/utils/sleep';
import randomInRange from '@/utils/randomInRange';

const useTime = () => {
  const [time, setTime] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchTime = async () => {
    setError(false);
    setLoading(true);

    await sleep(randomInRange(1000, 3000));

    try {
      const res = await fetch('/api/time');

      if (!res.ok) throw new Error(res.error);

      const { time } = await res.json();
      const formattedTime = new Date(time).toLocaleTimeString();

      setTime(formattedTime);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => fetchTime(), []);

  return {
    time,
    error,
    loading,
    fetchTime,
  };
};

export default useTime;
