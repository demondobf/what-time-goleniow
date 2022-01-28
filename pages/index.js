import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from '@/styles/Home.module.css';
import useTime from '@/hooks/useTime';

export default function IndexPage() {
  const { t } = useTranslation('common');
  const { time, loading, error, fetchTime } = useTime();

  const handleClick = () => fetchTime();

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h2 className={styles.title}>{t('heading')}</h2>
        <h2 className={styles.title}>{t('subheading')}</h2>

        <p className={styles.time}>
          {loading ? <span>...</span> : error ? <span>{t('error')}</span> : <time dateTime={time}>{time}</time>}
        </p>

        <button className={styles.button} onClick={handleClick} disabled={loading}>
          {loading ? t('loader') : t('button')}
        </button>
      </main>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
