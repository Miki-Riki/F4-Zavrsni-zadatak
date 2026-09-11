import './globals.css';
import Providers from './providers';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="hr"><body><Providers>{children}</Providers></body></html>;
}
