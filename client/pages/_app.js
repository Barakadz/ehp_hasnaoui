
import '@/public/icofont.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";

import '../components/topbar/topbar.css';
import '../components/navbar/navbar.css';
import '../components/footer/footer.css';
import '../components/contact/contact.css';

import '../components/breadcumbs/breadcumbs.css';


import "@/styles/Home.module.css";
 
import { useEffect } from 'react';
  
 
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return <Component {...pageProps} />;
}
