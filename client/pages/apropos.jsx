import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Topbar from '../components/topbar/topbar';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Breadcumbs from "@/components/breadcumbs/breadcumbs";
import Contact from "@/components/contact/contact";
import AproposInfo from "@/components/apropos/apropos";
import WhyEhph from "@/components/whyehph/whyehph";
import BreadcumbsApropos from "@/components/breadcumbs_apropos/breadcumbs_apropos";
import AproposCard from "@/components/apropos_card/apropos_card";
import ChifresCle from "@/components/chiffres_cles/chiffres_cle";
import Hybrid from "@/components/hybrid/hybrid";
import Medecin from "@/components/medecin/medecin";
import { useEffect } from "react";
import Preloader from "@/components/preloader/preloader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const handleLoad = () => {
      console.log('Window loaded');
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('preloader-deactivate');
      }
    };

    if (document.readyState === 'complete') {
      handleLoad(); // If window is already loaded, execute immediately
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (<>
	<Head>
	<title>A Propos - EHPHASNAOUI</title>
	<meta name="description" content="Ehp hasnaoui, Hopital Privée Hasnaui,Hasnaoui Private Hospital, Ehp-hasnaoui" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/logozoom.PNG" />
  </Head>
  <main style={{padding:'0'}}>
 <Preloader/>

 <Topbar/>
 <Navbar/>
<BreadcumbsApropos/>

<AproposInfo/>
<AproposCard/>
<ChifresCle/>
<Hybrid/>

<WhyEhph/>
<Medecin/>
 <Footer/>
     </main>
</>
  );
}
