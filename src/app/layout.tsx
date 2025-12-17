import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ResumeProvider } from '@/contexts/ResumeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Resume Builder - AI-Ready',
  description: 'Build professional resumes with smart AI-like recommendations',
  keywords: ['resume', 'cv', 'builder', 'job search', 'career'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResumeProvider>
          {children}
        </ResumeProvider>
      </body>
    </html>
  );
}
