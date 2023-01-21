import { Architects_Daughter } from '@next/font/google';
import './globals.css';

const font = Architects_Daughter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-brand',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${font.variable} font-sans`}>{children}</body>
    </html>
  );
}
