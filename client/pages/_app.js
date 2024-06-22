
import '@/public/icofont.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";

import '../components/topbar/topbar.css';
import '../components/navbar/navbar.css';
import '../components/footer/footer.css';
import '../components/breadcumbs/breadcumbs.css';

import '../components/actualites_detail/actdetail.css';
import '../components/video/video.css';
import '../components/preloader/preloader.css';

import '../components/ehphwhy/ehphwhy.css';
import '../components/apropos/apropos.css';
import '../components/whyehph/whyehph.css';
import '../components/slide/slide.css';
import '../components/breadcumbs_apropos/breadcumbs_apropos.css';
import '../components/apropos_card/apropos_card.css';
import '../components/chiffres_cles/chiffres_cle.css';
import '../components/hybrid/hybrid.css';
import '../components/convention/convention.css';
import '../components/actualites/actualites.css';
import '../components/login/login.css';
import '../components/loginAdmin/loinadmin.css';

import '../components/contact/contact.css';
import '../components/404/404.css';
import '../components/rendez/rendez.css';
import '../components/topbardashboard/top.css';
import '../components/sidebar/sidebar.css';
import '../components/card_dash/carddash.css';
import '../components/visitevirtelle/visite.css';

import "@/styles/Home.module.css";
 
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { AuthProviderAdmin } from '../contexts/AdminContext';
 

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return (
  
    <AuthProvider>
<AuthProviderAdmin> 
  <Component {...pageProps} />
  </AuthProviderAdmin>  
  </AuthProvider>

  ) ;
}
