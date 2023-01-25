import { useTranslations } from 'next-intl';

export const Heading = () => {
  const t = useTranslations('home');

  return (
    <h1 className="text-center text-fluid-lg font-bold">
      <span>{t('heading')}</span>
      <br />
      <span className="whitespace-nowrap">{t('subheading')}</span>
    </h1>
  );
};
