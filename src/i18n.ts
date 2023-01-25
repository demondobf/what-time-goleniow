import { NextIntlConfig } from 'next-intl';

const config: NextIntlConfig = {
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  async getMessages({ locale }) {
    return (await import(`./messages/${locale}.json`)).default;
  },
};

export default config;
