import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/componants/ThemeProvider";



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amit Kumar - Frontend Developer | React.js, Next.js, TypeScript',
  description: 'Frontend Developer with 2.5 years of experience specializing in React.js, Next.js, and TypeScript. Building scalable, high-performance web applications.',
  keywords: 'Frontend Developer, React.js, Next.js, TypeScript, JavaScript, Web Development, Amit Kumar',
  authors: [{ name: 'Amit Kumar' }],
  openGraph: {
    title: 'Amit Kumar - Frontend Developer',
    description: 'Frontend Developer specializing in React.js, Next.js, and TypeScript',
    url: 'https://amitkumar.dev',
    siteName: 'Amit Kumar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Kumar - Frontend Developer',
    description: 'Frontend Developer specializing in React.js, Next.js, and TypeScript',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
