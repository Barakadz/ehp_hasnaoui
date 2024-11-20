import Head from "next/head";
 import { Inter } from "next/font/google";
 import Topbar from '../components/topbar/topbar';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { useEffect } from "react";
import Preloader from "@/components/preloader/preloader";
import Visite from "@/components/visitevirtelle/visite";
import BreadcumbsVisite from "@/components/breadcumbs_visite/breadcumbs";
import ChatBubble from "@/components/tel/tel";
import Qalite from "@/components/qalite/qalite";

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
	<title>Visite virtuelle - EHPHASNAOUI</title>
	<meta name="description" content="Ehp hasnaoui, Hopital Privée Hasnaui,Hasnaoui Private Hospital, Ehp-hasnaoui" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/logozoom.PNG" />
   
  </Head>
  <main style={{padding:'0'}}>
 <Preloader/>

 <Topbar/>
 <Navbar/>
<BreadcumbsVisite/>

 <Visite/>

 <Qalite/>
 <Footer/>
 <ChatBubble/>     </main>
</>
  );
}
