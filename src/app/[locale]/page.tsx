import { CurrentTime } from '@/components/CurrentTime';
import { Heading } from '@/components/Heading';
import { useLocale } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl/client';

export const dynamic = 'force-dynamic';

const HomePageContent = () => {
  return (
    <main className="grid min-h-full place-items-center">
      <div className="flex flex-col items-center">
        <Heading />
        <CurrentTime />
      </div>
    </main>
  );
};

export default async function HomePage() {
  const locale = useLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <HomePageContent />
    </NextIntlClientProvider>
  );
}
