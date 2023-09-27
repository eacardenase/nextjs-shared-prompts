import { Metadata } from 'next';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Propmtopia',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
