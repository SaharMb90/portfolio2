import './globals.css';

export const metadata = {
  title: 'Sahar Mirzabaki — Applied ML & Adaptive Systems',
  description:
    'Sahar Mirzabaki — machine-learning engineer building closed-loop systems that read live sensor data and act on it. Based in Tehran, open to remote roles and funded PhDs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&family=Vazirmatn:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
