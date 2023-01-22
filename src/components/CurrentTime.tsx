'use client';

import { useTime } from '@/hooks/useTime';
import { Button } from './Button';

export const CurrentTime = () => {
  const { time, error, fetchTime } = useTime();

  return (
    <>
      <div className="mt-4 mb-8 text-fluid-xl">
        <Content time={time} error={error} />
      </div>

      <Button disabled={!time} onClick={fetchTime}>
        Update
      </Button>
    </>
  );
};

const Content = ({ time, error }: { time: string | null; error: boolean }) => {
  if (time) {
    const formattedTime = new Date(time).toLocaleTimeString();

    return (
      <time dateTime={time} role="alert">
        {formattedTime}
      </time>
    );
  }

  if (error) {
    return (
      <div role="alert">
        <span className="sr-only">Something went wrong and we don&apos;t know</span>
        <span aria-hidden>¯\_(ツ)_/¯</span>
      </div>
    );
  }

  return (
    <div>
      <span className="sr-only">Still checking...</span>
      <span aria-hidden>...</span>
    </div>
  );
};
