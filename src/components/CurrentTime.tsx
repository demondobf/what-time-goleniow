'use client';

import { useTime } from '@/hooks/useTime';
import { useTranslations } from 'next-intl';
import { Button } from './Button';

export const CurrentTime = () => {
  const t = useTranslations('home');
  const { time, error, fetchTime } = useTime();

  return (
    <>
      <div className="mt-4 mb-8 text-fluid-xl">
        <Content time={time} isError={error} />
      </div>

      <Button disabled={!time} onClick={fetchTime}>
        {t('refresh-button')}
      </Button>
    </>
  );
};

interface ContentProps {
  time: string | null;
  isError: boolean;
}

const Content = ({ time, isError }: ContentProps) => {
  const t = useTranslations('home');

  if (time) {
    const formattedTime = new Date(time).toLocaleTimeString();

    return (
      <time dateTime={time} role="alert">
        {formattedTime}
      </time>
    );
  }

  if (isError) {
    return (
      <div role="alert">
        <span className="sr-only">{t('time-error')}</span>
        <span aria-hidden>¯\_(ツ)_/¯</span>
      </div>
    );
  }

  return (
    <div>
      <span className="sr-only">{t('time-loading')}</span>
      <span aria-hidden>...</span>
    </div>
  );
};
