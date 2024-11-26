import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Topbar from '../components/topbar/topbar';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Breadcumbs from "@/components/breadcumbs/breadcumbs";
import Contact from "@/components/contact/contact";
import Preloader from "@/components/preloader/preloader";
import React, { useEffect } from 'react';
import Actualites from "@/components/actualites/actualites";
import  { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ActualitesPage from "@/components/actualites/actualites_page";
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
  <script src="
https://cdn.jsdelivr.net/npm/icofont@1.0.0/main.min.js
"></script>
<link href="
https://cdn.jsdelivr.net/npm/icofont@1.0.0/dist/icofont.min.css
" rel="stylesheet"/>
  </Head>
  <main style={{padding:'0'}}>
 <Preloader/>

 <Topbar/>
 <Navbar/>
 <center>
				<div class="row">
					<div class="col-lg-12 mt-4">
						<div class="section-title">
							<h2>Suivez nos dernières Actualités :</h2>
							<img src="section-img.png" className="mb-3" alt="#"/>
 						</div>
					</div>
				</div></center>
 <div className="mt-4">
 <ActualitesPage/>
 </div>
 
 

  
 <Footer/>
     </main>
</>
  );
}
