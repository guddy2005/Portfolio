export const metadata = {
  title: 'John Doe | Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies. Check out my portfolio to see my latest projects and skills.',
  keywords: [
    'Full Stack Developer',
    'Web Development',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Portfolio'
  ].join(', '),
  authors: [{ name: 'John Doe' }],
  creator: 'John Doe',
  publisher: 'John Doe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'John Doe | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies',
    url: 'https://johndoe.dev',
    siteName: 'John Doe Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'John Doe | Full Stack Developer',
    card: 'summary_large_image',
    description: 'Full Stack Developer specializing in modern web technologies',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      me: ['johndoe@email.com'],
    },
  },
};

export default metadata;
