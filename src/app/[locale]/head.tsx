import { useTranslations } from 'next-intl';

export default function RootHead() {
  const t = useTranslations('head');

  return (
    <>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
