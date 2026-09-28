import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://peterayoade.studio'),
  title: 'Peter Ayoade — AI Video Expert | Commercials, UGC & Cinematic Video Production',
  description:
    'Peter Ayoade is a leading AI Video Expert and Creative Director producing high-impact AI commercials, performance UGC, and narrative animation with Google Veo 3, Kling AI, and Runway Gen-3.',
  keywords: [
    'AI Video Expert',
    'Peter Ayoade',
    'AI Commercial Production',
    'AI Video Studio',
    'Google Veo 3',
    'Kling AI',
    'Runway Gen-3',
    'AI UGC Ads',
    'Cinematic AI Video',
    'Generative Video Director',
  ],
  authors: [{ name: 'Peter Ayoade' }],
  creator: 'Peter Ayoade',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://peterayoade.studio',
    title: 'Peter Ayoade — AI Video Expert & Creative Director',
    description:
      'Helping brands communicate through AI-powered visual content. Cinematic commercials, UGC, and narrative world-building.',
    siteName: 'Peter Ayoade Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Peter Ayoade — AI Video Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peter Ayoade — AI Video Expert',
    description:
      'Helping brands communicate through AI-powered visual content. Commercials, UGC, and narrative animation.',
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Peter Ayoade — AI Video Studio',
    image: 'https://peterayoade.studio/images/peter-ayoade.jpg',
    description:
      'High-craft AI video production studio specializing in commercials, social UGC, and narrative world-building.',
    url: 'https://peterayoade.studio',
    priceRange: '$$',
    founder: {
      '@type': 'Person',
      name: 'Peter Ayoade',
      jobTitle: 'AI Video Expert & Creative Director',
    },
    knowsAbout: [
      'Artificial Intelligence Video Production',
      'Google Veo 3',
      'Kling AI',
      'Runway Gen-3',
      'Cinematography',
      'Commercial Direction',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070A0F] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}

