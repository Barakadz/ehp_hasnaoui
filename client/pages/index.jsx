import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Topbar from '../components/topbar/topbar';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Video from "@/components/video/video";
import EhphWhy from "@/components/ehphwhy/ehphwhy";
import Preloader from "@/components/preloader/preloader";
import React, { useEffect } from 'react';
import HeroSlider from "@/components/slide/slide";
import Convention from "@/components/convention/convention";
import Actualites from "@/components/actualites/actualites";

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
	<title>EHP - HASNAOUI</title>
	<meta name="description" content="Ehp hasnaoui, Hopital Privée Hasnaui,Hasnaoui Private Hospital, Ehp-hasnaoui" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/logozoom.PNG" />
  </Head>
  <main style={{padding:'0'}}>
 <Preloader/>
 <Topbar/>

 <Navbar/>
<HeroSlider/>
<EhphWhy/>
 <Video/>
 <Convention/>
 <Actualites/>
 <Footer/>
     </main>
</>
  );
}
