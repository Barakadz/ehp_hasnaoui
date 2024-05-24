import Head from "next/head";
 import { Inter } from "next/font/google";
 import Topbar from '../components/topbar/topbar';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
  import Preloader from "@/components/preloader/preloader";
import React, { useEffect } from 'react';
 import  { useState } from 'react';
 import Actualitesplus from "@/components/actualitesPlus/actualitesplus";
const inter = Inter({ subsets: ["latin"] });

export default function ActualitesDetaill() {
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
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    // You can fetch new data based on the selected page
    // For example: fetchData(selected + 1);
  };
  return (<>
	<Head>
	<title>Actualités - EHPHASNAOUI</title>
	<meta name="description" content="Ehp hasnaoui, Hopital Privée Hasnaui,Hasnaoui Private Hospital, Ehp-hasnaoui" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/logozoom.PNG" />
  </Head>
  <main style={{padding:'0'}}>
 <Preloader/>

 <Topbar/>
 <Navbar/>
 <Actualitesplus/>

 <Footer/>
     </main>
</>
  );
}
