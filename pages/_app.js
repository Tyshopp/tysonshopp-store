// Forzando redeploy para que Vercel actualice los imports
import '../globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
