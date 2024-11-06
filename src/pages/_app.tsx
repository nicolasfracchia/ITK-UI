import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import localFont from "next/font/local";
import "../app/styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const montserrat = localFont({
  src: "../app/fonts/montserrat/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 200 300 400 500 600 700 800 900",
});
const sarabun = localFont({
  src: "../app/fonts/sarabun/Sarabun-Regular.ttf",
  variable: "--font-sarabun",
  weight: "100 200 300 400 500 600 700 800 900",
});
 
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <div className={`${montserrat.variable} ${sarabun.variable} antialiased`}>
      
      { (currentPage !== '/login' && currentPage !== '/signup') ? <Header /> : ''}
      <Component {...pageProps} />
      { (currentPage !== '/login' && currentPage !== '/signup') ? <Footer /> : ''}
    </div>
  );
}