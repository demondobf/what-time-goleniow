import { Architects_Daughter } from '@next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const font = Architects_Daughter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-brand',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return <body className={`${font.variable} font-sans`}>{children}</body>;
}
