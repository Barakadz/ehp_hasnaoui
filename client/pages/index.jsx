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
  <script src="
https://cdn.jsdelivr.net/npm/icofont@1.0.0/main.min.js
"></script>
<link href="
https://cdn.jsdelivr.net/npm/icofont@1.0.0/dist/icofont.min.css
" rel="stylesheet"/>

  </Head>
  <main style={{padding:'0'}}>
  <Topbar/>

 <Navbar/>
<HeroSlider/>
<EhphWhy/>
 <Video/>
 <Convention/><center>
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title">
							<h2>Suivez nos dernières Actualités :</h2>
							<img src="section-img.png" className="mb-3" alt="#"/>
 						</div>
					</div>
				</div></center>
 <Actualites/>
 <Footer/>
     </main>
</>
  );
}
