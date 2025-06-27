import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Revith | Portfolio',
  description: 'Personal portfolio of Revith, a Full-Stack Software Engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill-rule='evenodd' fill='currentColor' d='M9,20V4h4.5c2.48,0,4.5,2.02,4.5,4.5S15.98,13,13.5,13H12v2.5l4.5,4.5H13V20H9z M12,11h1.5c0.83,0,1.5-0.67,1.5-1.5S14.33,8,13.5,8H12V11z'/></svg>" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
