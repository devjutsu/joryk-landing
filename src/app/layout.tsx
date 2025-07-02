import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '@fontsource/manrope/latin.css';
import { FaRobot } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Жорик',
  description:
    'Жорик - Твой личный помощник по питанию и подсчету калорий 😺🥪',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="text-center py-8 text-sm text-gray-400 bg-sky-800/30">
          © 2025 Жорик. Забота, в которую можно вникнуть.<br className="hidden md:inline" />
          <div className="mt-4 flex justify-center items-center space-x-6">
        <a href="https://t.me/joryk_livebot" title="Жорик бот" className="hover:opacity-80">
          <FaRobot size={24} />
        </a>
        <a
          href="https://github.com/devjutsu/joryk-landing"
          title="GitHub"
          className="hover:opacity-80"
        >
          <FaGithub size={24} />
        </a>
        <a href="https://t.me/devjutsu" title="@devjutsu" className="hover:opacity-80">
          <FaTelegramPlane size={24} />
        </a>
      </div>
        </footer>
      </body>
    </html>
  );
}
