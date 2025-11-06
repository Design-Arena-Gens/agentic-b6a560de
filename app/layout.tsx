import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Personal Experience Dashboard',
  description: 'A clean, responsive dashboard to showcase experience, projects, and skills.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="container-max py-8 md:py-12">{children}</main>
        <footer className="container-max py-10 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-between">
            <p>? {new Date().getFullYear()} Personal Experience Dashboard</p>
            <a className="hover:text-brand-600" href="#top">Back to top</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
