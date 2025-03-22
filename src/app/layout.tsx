import type React from 'react';
import './globals.css';
import { Inter, Arapey } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

// Load Inter as base font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Load Arapey font
const arapey = Arapey({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-arapey',
  display: 'swap',
});

export const metadata = {
  title: 'Junior Web Developer Portfolio',
  description: 'Portfolio showcasing my web development projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body
        className={`${inter.variable} ${arapey.variable} font-sans bg-[#121210] text-white`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
