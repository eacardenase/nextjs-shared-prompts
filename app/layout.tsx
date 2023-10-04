import { Metadata } from 'next';

import '@/styles/globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Propmtopia',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 sm:px-16'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
